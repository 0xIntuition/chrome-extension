import React, { useState } from 'react';
import { parseEther, useQuery } from '@extension/shared';
import { getClaimsFromFollowingAboutSubject, searchAtomsByUriQuery } from '@extension/shared';
import { useMultiVault } from '@extension/shared';
import { Spinner } from './Spinner.js';
import { AtomForm } from './AtomForm.js';
import { Atom, AtomCard } from './AtomCard.js';
import { currentTabStorage, currentAccountStorage } from '@extension/storage';

import { useStorage } from '@extension/shared';

export const Home: React.FC = () => {
  const currentTab = useStorage(currentTabStorage);
  const currentAccount = useStorage(currentAccountStorage);
  const [showAtomForm, setShowAtomForm] = useState(false);
  const { multivault, client } = useMultiVault(currentAccount);
  const [showTagSearch, setShowTagSearch] = useState(false);
  const [selectedTag, setSelectedTag] = useState<any>(null);

  const { data, error, refetch } = useQuery(searchAtomsByUriQuery, {
    variables: {
      uri: currentTab?.url || '',
      address: currentAccount?.toLocaleLowerCase() || '',
    },
    skip: !currentTab?.url,
    fetchPolicy: 'cache-and-network',
  });
  const openAtom = (id: number) => {
    chrome.tabs.create({ url: `https://i7n.app/a/${id}` });
  };

  const handleTagSelected = async (tag: any, atomId: number) => {
    console.log('tag selected', tag);
    setSelectedTag(tag);
    setShowTagSearch(false);
    const subjectId = BigInt(atomId);
    const predicateId = BigInt(4);
    const objectId = BigInt(tag.id);

    // check if triple exists
    const tripleExists = await multivault.getTripleIdFromAtoms(subjectId, predicateId, objectId);
    if (tripleExists) {
      console.log('Triple exists');
      await multivault.depositTriple(tripleExists, parseEther('0.00042'));
    } else {
      console.log('Triple does not exist');
      await multivault.createTriple({ subjectId, predicateId, objectId, initialDeposit: parseEther('0.00042') });
    }

    setTimeout(() => {
      setSelectedTag(null);
      refetch();
    }, 1000);
  };

  const useClaimsFromFollowing = (address: string | undefined, subjectId: number) => {
    const { data } = useQuery(getClaimsFromFollowingAboutSubject, {
      variables: {
        address: address as string,
        subjectId,
      },
      skip: !subjectId || !address,
    });
    return data?.claims_from_following || [];
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
  const handleAtomClick = (atomId: number, myPosition: string | undefined) => {
    if (myPosition) {
      redeem(atomId, myPosition);
    } else {
      deposit(atomId);
    }
  };

  const deposit = async (atomId: number) => {
    try {
      if (!currentAccount) {
        throw new Error('No account found');
      }

      console.log(`Depositing for atom ${atomId} from account ${currentAccount}`);

      const { hash } = await multivault.depositAtom(BigInt(atomId), parseEther('0.00042'));
      console.log(`Transaction hash: ${hash}`);

      // wait 1 second before refetching and updating the UI
      setTimeout(() => {
        refetch();
      }, 1000);
    } catch (error: any) {
      console.log('Error during deposit:', error.message);
    }
  };

  const redeem = async (atomId: number, myPosition: string) => {
    try {
      const { hash } = await multivault.redeemAtom(BigInt(atomId), BigInt(myPosition));
      console.log(`Transaction hash: ${hash}`);
      setTimeout(() => {
        refetch();
      }, 1000);
    } catch (error: any) {
      console.log('Error during redeem:', error.message);
    }
  };

  if (!data?.atoms || data.atoms.length === 0 || showAtomForm) {
    return <AtomForm />;
  }
  // const usd = data.chainLinkPrices[0].usd;
  const usd = 3302.34864192; // hardcoded for now:w

  return (
    <>
      {data.atoms.map(atom => (
        <AtomCard
          key={atom.id}
          atom={atom as Atom}
          account={currentAccount}
          usd={usd}
          handleTagSelected={handleTagSelected}
          handleAtomClick={handleAtomClick}
          openAtom={openAtom}
          useClaimsFromFollowing={useClaimsFromFollowing}
        />
      ))}
      {!showAtomForm && (
        <div className="flex justify-end items-center p-2">
          <button
            onClick={() => setShowAtomForm(true)}
            className="p-1 px-4 bg-slate-800 text-slate-300 rounded-full hover:bg-slate-600 text-xs">
            Add
          </button>
        </div>
      )}
    </>
  );
};
