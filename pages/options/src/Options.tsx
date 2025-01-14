import '@src/Options.css';
import React, { useEffect, useState } from 'react';
import { useStorage, withErrorBoundary, withSuspense } from '@extension/shared';
import { exampleThemeStorage } from '@extension/storage';
import { Button } from '@extension/ui';
import { useMultiVault, base } from '@extension/shared';

const Options = () => {
  const [account, setAccount] = useState<string | undefined>(undefined);
  const [chain, setChain] = useState<string | undefined>(undefined);
  const theme = useStorage(exampleThemeStorage);
  const { client } = useMultiVault();
  const isLight = theme === 'light';

  const handleLogin = async () => {
    const accounts = await client?.requestAddresses();
    if (accounts) {
      setAccount(accounts[0]);
    }
    await client?.switchChain({ id: base.id });
  };

  useEffect(() => {
    const getAccount = async () => {
      const accounts = await client?.getAddresses();
      if (accounts) {
        setAccount(accounts[0]);
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
