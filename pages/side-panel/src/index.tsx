import { createRoot } from 'react-dom/client';
import '@extension/ui/dist/global.css';
import SidePanel from '@src/SidePanel';
import { ApolloProviderWrapper } from '@extension/shared';
function init() {
  const appContainer = document.querySelector('#app-container');
  if (!appContainer) {
    throw new Error('Can not find #app-container');
  }
  const root = createRoot(appContainer);
  root.render(
    <ApolloProviderWrapper>
      <SidePanel />
    </ApolloProviderWrapper>,
  );
}

init();
