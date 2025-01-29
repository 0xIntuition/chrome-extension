import { withErrorBoundary, withSuspense } from '@extension/shared';
import { Home } from '@extension/ui';
import './Popup.css';
const Popup = () => {
  return (
    <div className="p-2">
      <Home />
    </div>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);
