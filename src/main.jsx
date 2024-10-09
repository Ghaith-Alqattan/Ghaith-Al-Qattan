import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './loading.css';
import { BrowserRouter } from 'react-router-dom';

const LazyApp = lazy(() => import('./App.jsx'));

const Loading = () => (
  <div className="spinner-container">
    <div className="loading-spinner"></div>
  </div>
);

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Suspense fallback={<Loading />}>
        <LazyApp />
      </Suspense>
    </StrictMode>
  </BrowserRouter>
);
