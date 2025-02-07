import { withErrorBoundary, withSuspense } from '@extension/shared';
import { Home } from '@extension/ui';

const SidePanel = () => {
  return (
    <div className="p-2">
      <Home />
    </div>
  );
};

export default withErrorBoundary(withSuspense(SidePanel, <div> Loading ... </div>), <div> Error Occur </div>);
