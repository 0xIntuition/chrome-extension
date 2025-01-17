import React, { useState } from 'react';
import { Address, formatEther, parseEther } from '@extension/shared';
import { useMultiVault } from '@extension/shared';
import { Spinner } from './Spinner';

interface TagProps {
  refetch: () => void;
  account?: Address;
  tag: {
    object?: {
      emoji?: string | null;
      image?: string | null;
      label?: string | null;
    } | null;
    vault?: {
      id: string;
      position_count: number;
      total_shares: string;
      current_share_price: string;
      myPosition: {
        shares: string;
      }[];
    } | null;
    counter_vault?: {
      id: string;
      position_count: number;
      total_shares: string;
      current_share_price: string;
      myPosition: {
        shares: string;
      }[];
    } | null;
  };
}

export const Tag: React.FC<TagProps> = ({ tag, account, refetch }) => {
  const { multivault } = useMultiVault(account);
  const [bgClass, setBgClass] = useState('bg-transparent border-slate-900');
  const [loading, setLoading] = useState(false);
  const myPosition = tag.vault?.myPosition[0]?.shares;
  const myCounterPosition = tag.counter_vault?.myPosition[0]?.shares;

  const myPositionInEth =
    parseFloat(formatEther(BigInt(myPosition || 0))) *
    parseFloat(formatEther(BigInt(tag.vault?.current_share_price || 0)));
  const totalStaked =
    parseFloat(formatEther(BigInt(tag.vault?.total_shares || 0))) *
      parseFloat(formatEther(BigInt(tag.vault?.current_share_price || 0))) +
    parseFloat(formatEther(BigInt(tag.counter_vault?.total_shares || 0))) *
      parseFloat(formatEther(BigInt(tag.counter_vault?.current_share_price || 0)));
  const totalPositionCount = (tag.vault?.position_count || 0) + (tag.counter_vault?.position_count || 0);

  const handleTagClick = (isCounterVault: boolean) => {
    if (myPosition) {
      setBgClass('bg-sky-800 border-slate-900');
      if (tag.vault?.id) {
        redeemTriple(tag.vault?.id, myPosition);
      }
    } else if (myCounterPosition) {
      setBgClass('bg-rose-900 border-rose-900');
      if (tag.counter_vault?.id) {
        redeemTriple(tag.counter_vault.id, myCounterPosition);
      }
    } else if (isCounterVault) {
      setBgClass('bg-rose-900 border-rose-900');
      if (tag.counter_vault?.id) {
        depositTriple(tag.counter_vault.id);
      }
    } else {
      setBgClass('bg-sky-800 border-slate-900');
      if (tag.vault?.id) {
        depositTriple(tag.vault.id);
      }
    }
  };

  const redeemTriple = async (vaultId: string, amount: string) => {
    setLoading(true);
    const tx = await multivault.redeemTriple(BigInt(vaultId), BigInt(amount));
    console.log(tx);
    setLoading(false);
    refetch();
  };

  const depositTriple = async (vaultId: string) => {
    setLoading(true);
    const tx = await multivault.depositTriple(BigInt(vaultId), parseEther('0.00042'));
    console.log(tx);
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
      title={`Total Staked: ${totalStaked.toFixed(6)} ETH by ${totalPositionCount} accounts \n My Position: ${myPositionInEth.toFixed(6)} ETH`}>
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
        <span className="text-xs text-slate-200 ml-2 ">{tag.object?.label}</span>
        <span className="text-xs text-slate-200 ">{tag.vault?.position_count}</span>
      </button>
      <button
        disabled={loading}
        onClick={() => handleTagClick(true)}
        onMouseEnter={() => setBgClass('bg-rose-900 border-rose-900')}
        onMouseLeave={() => setBgClass('bg-transparent border-slate-900')}
        className="text-rose-400 hover:text-rose-200 text-xs px-2 flex h-7 items-center space-x-2 ">
        {tag.counter_vault?.position_count}
      </button>
    </div>
  );
};
