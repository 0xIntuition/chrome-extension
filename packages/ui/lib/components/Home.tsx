import React, { useState } from 'react';
import { Address, parseEther, useQuery } from '@extension/shared';
import {
  getClaimsFromFollowingAboutSubject,
  searchAtomsByUriQuery,
  useWaitForTransactionEvents,
  Hex,
} from '@extension/shared';
import { useMultiVault } from '@extension/shared';
import { Spinner } from './Spinner.js';
import { AtomForm } from './AtomForm.js';
import { Atom, AtomCard } from './AtomCard.js';
import { currentTabStorage, currentAccountStorage, currentChainStorage } from '@extension/storage';

import { useStorage } from '@extension/shared';

export const Home: React.FC = () => {
  const wait = useWaitForTransactionEvents();
  const currentTab = useStorage(currentTabStorage);
  const currentAccount = useStorage(currentAccountStorage);
  // const currentChain = useStorage(currentChainStorage);
  const [showAtomForm, setShowAtomForm] = useState(false);
  const { multivault } = useMultiVault();
  const [showTagSearch, setShowTagSearch] = useState(false);
  const [selectedTag, setSelectedTag] = useState<any>(null);

  const { data, error, refetch, loading } = useQuery(searchAtomsByUriQuery, {
    variables: {
      uri: currentTab?.url || '',
      address: currentAccount?.toString() || '',
    },
    skip: !currentTab?.url,
    fetchPolicy: 'cache-and-network',
  });
  const openAtom = (id: Hex) => {
    // const url = currentChain === base.id ? 'https://app.i7n.xyz/a' : 'https://dev.i7n.xyz/a';
    const url = 'https://portal.intuition.systems/explore/atom';
    chrome.tabs.create({ url: `${url}/${id}` });
  };

  const handleTagSelected = async (tag: any, atomId: Hex) => {
    if (!currentAccount) {
      // open options page
      chrome.runtime.openOptionsPage();
      return;
    }
    console.log('tag selected', tag);
    setSelectedTag(tag);
    setShowTagSearch(false);
    const subjectId = atomId;
    const predicateId = '0x49487b1d5bf2734d497d6d9cfcd72cdfbaefb4d4f03ddc310398b24639173c9d';
    const objectId = tag.term_id;

    // check if triple exists
    const tripleId = await multivault.read.calculateTripleId([subjectId, predicateId, objectId]);
    const tripleExists = await multivault.read.isTermCreated([tripleId]);
    const config = await multivault.read.getGeneralConfig();
    if (tripleExists) {
      console.log('Triple exists');
      const hash = await multivault.write.deposit([currentAccount, tripleId, BigInt(1), BigInt(0)], {
        value: config.minDeposit,
      });
      await wait(hash);
    } else {
      console.log('Triple does not exist');
      const tripleCost = await multivault.read.getTripleCost();
      const hash = await multivault.write.createTriples(
        [[subjectId], [predicateId], [objectId], [config.minDeposit + tripleCost]],
        { value: config.minDeposit + tripleCost },
      );
      await wait(hash);
    }

    setSelectedTag(null);
    refetch();
  };

  const useClaimsFromFollowing = (address: string | undefined, subjectId: Hex) => {
    // FIXME
    // const { data } = useQuery(getClaimsFromFollowingAboutSubject, {
    //   variables: {
    //     address: address as string,
    //     subjectId,
    //   },
    //   skip: !subjectId || !address,
    // });
    // return data?.claims_from_following || [];
    return [];
  };

  if (error) {
    return <div className="text-red-500">{error.message}</div>;
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center p-2">
        <Spinner />
      </div>
    );
  }
  const handleAtomClick = (atomId: Hex, myPosition: string | undefined) => {
    if (!currentAccount) {
      // open options page
      chrome.runtime.openOptionsPage();
      return;
    }
    if (myPosition) {
      redeem(atomId, myPosition);
    } else {
      deposit(atomId);
    }
  };

  const deposit = async (atomId: Hex) => {
    try {
      if (!currentAccount) {
        throw new Error('No account found');
      }

      console.log(`Depositing for atom ${atomId} from account ${currentAccount}`);

      const config = await multivault.read.getGeneralConfig();
      console.log({ config });
      const hash = await multivault.write.deposit([currentAccount, atomId, BigInt(1), BigInt(0)], {
        value: config.minDeposit,
      });
      console.log(`Transaction hash: ${hash}`);
      await wait(hash);
      refetch();
    } catch (error: any) {
      console.log('Error during deposit:', error.message);
    }
  };

  const redeem = async (atomId: Hex, myPosition: string) => {
    if (!currentAccount) {
      throw new Error('No account found');
    }
    try {
      const hash = await multivault.write.redeem([currentAccount, atomId, BigInt(1), BigInt(myPosition), BigInt(0)]);
      console.log(`Transaction hash: ${hash}`);
      await wait(hash);
      refetch();
    } catch (error: any) {
      console.log('Error during redeem:', error.message);
    }
  };

  if (!data?.atoms || data.atoms.length === 0 || showAtomForm) {
    const handleRefetch = () => {
      refetch();
      setShowAtomForm(false);
    };
    return (
      <>
        <AtomForm refetch={handleRefetch} />
        <div className="flex justify-end items-center p-2 space-x-2">
          {showAtomForm && (
            <button
              onClick={() => setShowAtomForm(false)}
              className="p-1 px-4 bg-slate-800 text-slate-300 rounded-full hover:bg-slate-600 text-sm">
              Cancel
            </button>
          )}
          <button
            onClick={() => refetch()}
            className="p-1 px-4 bg-slate-800 text-slate-300 rounded-full hover:bg-slate-600 text-sm">
            {loading ? <Spinner /> : 'Refresh'}
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      {data.atoms.map(atom => (
        <AtomCard
          key={atom.term_id}
          atom={atom as Atom}
          account={currentAccount}
          handleTagSelected={handleTagSelected}
          handleAtomClick={handleAtomClick}
          openAtom={openAtom}
          useClaimsFromFollowing={useClaimsFromFollowing}
          refetch={refetch}
        />
      ))}
      {!showAtomForm && (
        <div className="flex justify-end items-center p-2 space-x-2">
          <button
            onClick={() => setShowAtomForm(true)}
            className="p-1 px-4 bg-slate-800 text-slate-300 rounded-full hover:bg-slate-600 text-sm">
            Add
          </button>
          <button
            onClick={() => refetch()}
            className="p-1 px-4 bg-slate-800 text-slate-300 rounded-full hover:bg-slate-600 text-sm">
            {loading ? <Spinner /> : 'Refresh'}
          </button>
        </div>
      )}
    </>
  );
};
