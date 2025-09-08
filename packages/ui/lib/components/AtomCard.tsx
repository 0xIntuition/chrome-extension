import React from 'react';
import { Address, formatEther, Hex, useStorage } from '@extension/shared';
import type { Atoms, Triples } from '@extension/shared/lib/queries/generated/graphql.js';
import { AccountImage } from './AccountImage.js';
import { Tag } from './Claim.js';
import { TagSearch } from './TagSearch.js';
import { Spinner } from './Spinner.js';
import { supportedChains } from '@extension/shared';
import { currentChainStorage } from '@extension/storage';

type AtomWithVault = Atoms & {
  term: {
    vault: Array<{
      position_count: number;
      total_shares: string;
      current_share_price: string;
      myPosition: Array<{
        shares: string;
        account_id: string;
      }>;
      positions: Array<{
        shares: string;
        account?: {
          id: string;
          type?: string;
          image?: string;
          label?: string;
        };
      }>;
    }>;
  };
  as_subject_triples: Array<
    Triples & {
      counter_term: {
        vault: Array<{
          term_id: string;
          position_count: number;
          total_shares: string;
          current_share_price: string;
          myPosition: Array<{
            shares: string;
            account_id: string;
          }>;
          positions: Array<{
            shares: string;
            account_id: string;
          }>;
        }>;
      };
      term: {
        vault: Array<{
          term_id: string;
          position_count: number;
          total_shares: string;
          current_share_price: string;
          myPosition: Array<{
            shares: string;
            account_id: string;
          }>;
          positions: Array<{
            shares: string;
            account_id: string;
          }>;
        }>;
      };
    }
  >;
};

export type Atom = AtomWithVault;

interface AtomCardProps {
  atom: Atom;
  account?: Address;
  handleTagSelected: (tag: any, atomId: Hex) => void;
  handleAtomClick: (atomId: Hex, myPosition: string | undefined) => void;
  openAtom: (id: Hex) => void;
  useClaimsFromFollowing: (address: string | undefined, subjectId: Hex) => any[];
  refetch: () => void;
}

export const AtomCard: React.FC<AtomCardProps> = ({
  atom,
  account,
  handleTagSelected,
  handleAtomClick,
  openAtom,
  useClaimsFromFollowing,
  refetch,
}) => {
  const [showTagSearch, setShowTagSearch] = React.useState(false);
  const [selectedTag, setSelectedTag] = React.useState<any>(null);
  const [showGlobalClaims, setShowGlobalClaims] = React.useState(true);

  const chainId = useStorage(currentChainStorage);
  const claims = useClaimsFromFollowing(account?.toLocaleLowerCase(), atom.term_id as Hex);

  const triples: Array<{
    triple: Triples;
    claimsForCount: number;
    claimsAgainstCount: number;
  }> = [];

  // Group claims by triple ID
  const tripleGroups = claims.reduce((acc: { [key: string]: any[] }, claim: any) => {
    const tripleId = claim.triple.term_id;
    if (!acc[tripleId]) {
      acc[tripleId] = [];
    }
    acc[tripleId].push(claim);
    return acc;
  }, {});

  // Process each unique triple
  Object.entries(tripleGroups).forEach(([tripleId, claims]) => {
    const claimsFor = claims.filter(claim => claim.shares > 0);
    const claimsAgainst = claims.filter(claim => claim.counterShares > 0);

    triples.push({
      triple: claims[0].triple,
      claimsForCount: claimsFor.length,
      claimsAgainstCount: claimsAgainst.length,
    });
  });

  const vault = atom.term?.vault?.[0];
  const myPosition = vault?.myPosition[0]?.shares;
  const myPositionInEth =
    parseFloat(formatEther(BigInt(myPosition || 0))) * parseFloat(formatEther(BigInt(vault?.current_share_price || 0)));
  const totalStaked =
    parseFloat(formatEther(BigInt(vault?.total_shares || 0))) *
    parseFloat(formatEther(BigInt(vault?.current_share_price || 0)));

  const tags =
    atom.as_subject_triples?.filter(
      item => item.predicate?.term_id === '0x49487b1d5bf2734d497d6d9cfcd72cdfbaefb4d4f03ddc310398b24639173c9d',
    ) || [];
  const numberOfRemainingPositions =
    !vault?.position_count || vault?.position_count <= 5 ? '' : `+${vault?.position_count - 5}`;

  const handleLocalTagSelected = async (tag: any, atomId: Hex) => {
    setSelectedTag(tag);
    setShowTagSearch(false);
    handleTagSelected(tag, atomId);
    setTimeout(() => setSelectedTag(null), 1000);
  };

  let description =
    atom.value?.thing?.description || atom.value?.person?.description || atom.value?.organization?.description;

  let isCaip10 = false;
  if (atom.type === 'Unknown' && atom.data?.startsWith('caip10:eip155:')) {
    isCaip10 = true;
    const chainId = atom.data.split(':')[2];
    const address = atom.data.split(':')[3];
    const chain = supportedChains.find(c => c.id === parseInt(chainId));
    if (chain) {
      description = `${chain.name} contract`;
    }
  }

  return (
    <div className="bg-slate-700 p-2">
      <div className="flex flex-col p-4 bg-slate-800 rounded-lg">
        <div className="flex items-center space-x-4 mb-3">
          {atom.image && <img src={atom.image} className="w-16 h-16 rounded-full object-cover object-center" />}
          <div>
            <h2 className="text-xl font-bold text-slate-200">
              {isCaip10 && atom.data
                ? `${atom.data.split(':')[3].slice(0, 6)}...${atom.data.split(':')[3].slice(-4)}`
                : atom.label}
            </h2>
            <p>
              <button
                onClick={() => openAtom(atom.term_id as Hex)}
                className="text-xs text-slate-600 hover:text-slate-400">
                did:i7n:{chainId}:{atom.term_id.slice(0, 8)}
              </button>
            </p>
          </div>
        </div>
        <p className="text-sm text-slate-300 mt-2">{description}</p>
        <div className="flex flex-row mt-3 space-x-1">
          <button
            title={`Total staked: ${totalStaked.toFixed(6)} tTRUST  by ${vault?.position_count || 0} accounts \n My position: ${myPositionInEth.toFixed(6)} tTRUST `}
            onClick={() => handleAtomClick(atom.term_id as Hex, myPosition)}
            className={`space-x-1 flex flex-row items-center border border-sky-800 hover:bg-sky-700 text-green-100 text-xs p-1 px-2 rounded-full ${myPosition ? 'bg-sky-800' : 'bg-transparent'}`}>
            <span className="text-sm">✓</span>
            <div className="flex flex-row mr-3">
              {vault?.positions
                ?.filter(position => position.account?.type === 'Default')
                .map(position => (
                  <div style={{ marginRight: '-6px' }} key={position.account?.id}>
                    <AccountImage id={position.account?.id as `0x${string}`} image={position.account?.image} />
                  </div>
                ))}
            </div>
            <span className="pl-2">{numberOfRemainingPositions}</span>
          </button>
        </div>
        <div className="flex flex-row flex-wrap gap-2 mt-3 space-x-1 border-t border-slate-600 pt-3">
          {/*<button
            onClick={() => setShowGlobalClaims(!showGlobalClaims)}
            className="flex items-center border border-slate-600 text-slate-100 hover:border-slate-700 hover:bg-slate-700 hover:text-slate-200 text-xs rounded-full space-x-2 px-2 h-7 bg-transparent">
            <span>{showGlobalClaims ? '🌐' : '👥'}</span>
          </button>*/}

          {showGlobalClaims &&
            tags?.length > 0 &&
            tags.map((tag, index) => <Tag key={index} tag={tag} account={account} refetch={refetch} />)}

          {/*!showGlobalClaims &&
            triples?.length > 0 &&
            triples.map((triple, index) => (
              <Tag
                key={index}
                tag={triple.triple}
                account={account}
                refetch={refetch}
                claimsForCount={triple.claimsForCount}
                claimsAgainstCount={triple.claimsAgainstCount}
              />
            ))*/}
          <button
            onClick={() => setShowTagSearch(!showTagSearch)}
            className="flex items-center border border-slate-600 text-slate-100 hover:border-slate-700 hover:bg-slate-700 hover:text-slate-200 text-xs rounded-full space-x-2 px-2 h-7 bg-transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
            </svg>
          </button>
          {showTagSearch && <TagSearch onSelected={handleLocalTagSelected} atomId={atom.term_id as Hex} />}
          {selectedTag && (
            <div className="flex items-center bg-sky-800 border-slate-600 border text-slate-100 hover:border-slate-700 hover:bg-slate-700 hover:text-slate-200 text-xs rounded-full space-x-2 px-2 h-7">
              <Spinner />
              <span>{selectedTag.label}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
