import '@src/Options.css';
import React, { useEffect, useState } from 'react';
import { useStorage, withErrorBoundary, withSuspense } from '@extension/shared';
import { exampleThemeStorage, currentAccountStorage } from '@extension/storage';
import { Button } from '@extension/ui';
import { useMultiVault, base } from '@extension/shared';

const Options = () => {
  const theme = useStorage(exampleThemeStorage);
  const account = useStorage(currentAccountStorage);
  const { client } = useMultiVault();
  const isLight = theme === 'light';

  const handleLogin = async () => {
    const accounts = await client?.requestAddresses();
    if (accounts && accounts.length > 0) {
      currentAccountStorage.set(accounts[0]);
    } else {
      console.log('No account');
      currentAccountStorage.set(null);
    }
    await client?.switchChain({ id: base.id });
  };

  useEffect(() => {
    const getAccount = async () => {
      const accounts = await client?.getAddresses();
      if (accounts && accounts.length > 0) {
        currentAccountStorage.set(accounts[0]);
      } else {
        console.log('No account');
        currentAccountStorage.set(null);
      }
    };
    getAccount();
  }, [client]);

  return (
    <div className={`App ${isLight ? 'bg-slate-50 text-gray-900' : 'bg-gray-800 text-gray-100'}`}>
      <Button className="mt-4" onClick={exampleThemeStorage.toggle} theme={theme}>
        Toggle theme
      </Button>
      {account && <div>Account: {account}</div>}
      {!account && (
        <Button className="mt-4" onClick={handleLogin} theme={theme}>
          Login
        </Button>
      )}
    </div>
  );
};

export default withErrorBoundary(withSuspense(Options, <div> Loading ... </div>), <div> Error Occur </div>);
