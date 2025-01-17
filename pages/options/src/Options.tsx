import React, { useEffect, useState } from 'react';
import {
  useStorage,
  withErrorBoundary,
  withSuspense,
  type Address,
  type Chain,
  base,
  baseSepolia,
} from '@extension/shared';
import { currentAccountStorage, currentChainStorage } from '@extension/storage';
import { useMultiVault, shortId } from '@extension/shared';

import { Button } from '@extension/ui';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@extension/ui';
import { Input } from '@extension/ui';
import { Label } from '@extension/ui';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@extension/ui';

const Options = () => {
  const [availableCains, setAvailableCains] = useState<Chain[]>([base, baseSepolia]);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const account = useStorage(currentAccountStorage);
  const chainId = useStorage(currentChainStorage);
  const { client } = useMultiVault();

  const handleLogin = async () => {
    const availableAddresses = await client?.requestAddresses();
    if (availableAddresses && availableAddresses.length > 0) {
      setAddresses(availableAddresses);
      handleSetAccount(availableAddresses[0]);
    } else {
      handleSetAccount(undefined);
    }
  };

  const handleSetAccount = (value?: Address) => {
    currentAccountStorage.set(value);
  };

  const handleSetChain = (value?: number) => {
    const chain = availableCains.find(chain => chain.id === value);
    if (chain) {
      currentChainStorage.set(chain.id);
      client?.addChain({ chain });
      client?.switchChain({ id: chain.id });
    }
  };

  useEffect(() => {
    const getAccount = async () => {
      const availableAddresses = await client?.getAddresses();
      if (availableAddresses && availableAddresses.length > 0) {
        setAddresses(availableAddresses);
        if (!account || !availableAddresses.includes(account)) {
          handleSetAccount(availableAddresses[0]);
        }
      } else {
        handleSetAccount(undefined);
      }
    };
    if (client) {
      getAccount();
    }
  }, [client]);

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Options</CardTitle>
          <CardDescription>Manage your account and network.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              {account && (
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="account">Account</Label>
                  <Select value={account} onValueChange={(value: Address) => currentAccountStorage.set(value)}>
                    <SelectTrigger id="account">
                      <SelectValue placeholder={shortId(account) || 'Select'} />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      {addresses.map(address => (
                        <SelectItem key={address} value={address}>
                          {shortId(address)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
              {!account && (
                <Button className="mt-4" onClick={handleLogin}>
                  Login
                </Button>
              )}

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="chain">Network</Label>
                <Select value={chainId.toString()} onValueChange={(value: string) => handleSetChain(Number(value))}>
                  <SelectTrigger id="chain">
                    <SelectValue placeholder={chainId || 'Select'} />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {availableCains.map(chain => (
                      <SelectItem key={chain.id} value={chain.id.toString()}>
                        {chain.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center items-center">
          Powered by{' '}
          <a href="https://intuition.systems" target="_blank" className="p-1">
            Intuition
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Options, <div> Loading ... </div>), <div> Error Occur </div>);
