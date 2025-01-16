import React, { useMemo } from 'react';
import { blo } from 'blo';
import { Address } from '@extension/shared';

interface AccountImageProps {
  id: Address;
  image?: string | null;
}

export const AccountImage: React.FC<AccountImageProps> = ({ id, image }) => {
  return (
    <img src={image || blo(id)} alt={id} width={18} height={18} className="rounded-full object-cover object-center" />
  );
};
