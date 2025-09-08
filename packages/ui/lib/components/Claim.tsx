import React, { useState } from 'react';
import { Address, formatEther, Hex, useStorage } from '@extension/shared';
import { useMultiVault, useWaitForTransactionEvents } from '@extension/shared';
import { Spinner } from './Spinner';
import { currentAccountStorage } from '@extension/storage';

interface TagProps {
  refetch: () => void;
  account?: Address;
  claimsForCount?: number;
  claimsAgainstCount?: number;
  tag: any;
}

export const Tag: React.FC<TagProps> = ({ tag, account, refetch, claimsForCount, claimsAgainstCount }) => {
  const vault = tag.term.vault[0];
  const counter_vault = tag.counter_term.vault[0];
  const wait = useWaitForTransactionEvents();
  const { multivault } = useMultiVault();
  const currentAccount = useStorage(currentAccountStorage);
  const [bgClass, setBgClass] = useState('bg-transparent border-slate-900');
  const [loading, setLoading] = useState(false);
  const myPosition = vault?.myPosition[0]?.shares;
  const myCounterPosition = counter_vault?.myPosition[0]?.shares;

  const myPositionInEth =
    parseFloat(formatEther(BigInt(myPosition || 0))) * parseFloat(formatEther(BigInt(vault?.current_share_price || 0)));
  const totalStaked =
    parseFloat(formatEther(BigInt(vault?.total_shares || 0))) *
      parseFloat(formatEther(BigInt(vault?.current_share_price || 0))) +
    parseFloat(formatEther(BigInt(counter_vault?.total_shares || 0))) *
      parseFloat(formatEther(BigInt(counter_vault?.current_share_price || 0)));
  const totalPositionCount = (vault?.position_count || 0) + (counter_vault?.position_count || 0);

  const handleTagClick = (isCounterVault: boolean) => {
    if (!account) {
      // open options page
      chrome.runtime.openOptionsPage();
      return;
    }
    if (myPosition) {
      setBgClass('bg-sky-800 border-slate-900');
      if (vault?.term_id) {
        redeemTriple(vault.term_id as Hex, myPosition);
      }
    } else if (myCounterPosition) {
      setBgClass('bg-rose-900 border-rose-900');
      if (counter_vault?.term_id) {
        redeemTriple(counter_vault.term_id as Hex, myCounterPosition);
      }
    } else if (isCounterVault) {
      setBgClass('bg-rose-900 border-rose-900');
      if (counter_vault?.term_id) {
        depositTriple(counter_vault.term_id as Hex);
      }
    } else {
      setBgClass('bg-sky-800 border-slate-900');
      if (vault?.term_id) {
        depositTriple(vault.term_id as Hex);
      }
    }
  };

  const redeemTriple = async (termId: Hex, amount: string) => {
    if (!currentAccount) return;
    setLoading(true);
    const hash = await multivault.write.redeem([currentAccount, termId, BigInt(1), BigInt(amount), BigInt(0)], {});
    console.log(hash);
    await wait(hash);
    setLoading(false);
    refetch();
  };

  const depositTriple = async (termId: Hex) => {
    if (!currentAccount) return;
    setLoading(true);
    const config = await multivault.read.getGeneralConfig();
    const hash = await multivault.write.deposit([currentAccount, termId, BigInt(1), BigInt(0)], {
      value: config.minDeposit,
    });
    console.log(hash);
    await wait(hash);
    setLoading(false);
    refetch();
  };

  const finalBgClass =
    myPosition && myCounterPosition
      ? 'bg-sky-800 border-slate-900'
      : myPosition
        ? 'bg-sky-800 border-slate-900'
        : myCounterPosition
          ? 'bg-rose-900 border-rose-900'
          : bgClass;

  return (
    <div
      className={`flex items-center border rounded-full  ${finalBgClass} `}
      title={`Total Staked: ${totalStaked.toFixed(6)} tTRUST by ${totalPositionCount} accounts \n My Position: ${myPositionInEth.toFixed(6)} tTRUST`}>
      <button
        disabled={loading}
        onClick={() => handleTagClick(false)}
        onMouseEnter={() => setBgClass('bg-sky-800 border-slate-900')}
        onMouseLeave={() => setBgClass('bg-transparent border-slate-900')}
        className="flex items-center  text-slate-100  text-xs rounded-l-full space-x-3 px-2 h-7 ">
        {loading && <Spinner />}
        {!loading && tag.object?.image && (
          <img src={tag.object?.image} alt={tag.object?.label || ''} className="w-6 h-6 rounded-full object-cover " />
        )}
        <span className="text-xs text-slate-200 ml-2 ">
          {tag.predicate?.term_id === '0x49487b1d5bf2734d497d6d9cfcd72cdfbaefb4d4f03ddc310398b24639173c9d'
            ? ''
            : tag.predicate?.label}{' '}
          {tag.object?.label}
        </span>
        <span className="text-xs text-slate-200 ">{claimsForCount || vault?.position_count}</span>
      </button>
      <button
        disabled={loading}
        onClick={() => handleTagClick(true)}
        onMouseEnter={() => setBgClass('bg-rose-900 border-rose-900')}
        onMouseLeave={() => setBgClass('bg-transparent border-slate-900')}
        className="text-rose-400 hover:text-rose-200 text-xs px-2 flex h-7 items-center space-x-2 ">
        {claimsAgainstCount || counter_vault?.position_count}
      </button>
    </div>
  );
};
