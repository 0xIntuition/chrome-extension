import '@src/SidePanel.css';
import { useStorage, withErrorBoundary, withSuspense, useQuery, searchAtomsByUriQuery } from '@extension/shared';
import { exampleThemeStorage, currentAccountStorage, currentUrlStorage } from '@extension/storage';

const SidePanel = () => {
  const theme = useStorage(exampleThemeStorage);
  const account = useStorage(currentAccountStorage);
  const currentUrl = useStorage(currentUrlStorage);

  const { data, error, refetch } = useQuery(searchAtomsByUriQuery, {
    variables: {
      uri: currentUrl,
      address: account?.toLocaleLowerCase() || '',
    },
    skip: !currentUrl,
  });

  const isLight = theme === 'light';

  return (
    <div className={`p-4 ${isLight ? 'bg-slate-50 text-black' : 'bg-gray-800 text-white'}`}>
      <div>
        <h1>Intuition</h1>
      </div>
      <div>
        {account && <div>Account: {account}</div>}
        {currentUrl && <div>Current URL: {currentUrl}</div>}
      </div>
      {data &&
        data.atoms.map(atom => (
          <div key={atom.id}>
            <h2>{atom.label}</h2>
            {atom.image && <img src={atom.image} style={{ width: '100px', height: '100px' }} />}
          </div>
        ))}
    </div>
  );
};

export default withErrorBoundary(withSuspense(SidePanel, <div> Loading ... </div>), <div> Error Occur </div>);
