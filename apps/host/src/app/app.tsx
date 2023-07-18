import * as React from 'react';

import { TestPage } from './TestPage';

import { Link, Route, Routes } from 'react-router-dom';

const RemoteA = React.lazy(() => import('remote-a/Module'));

const RemoteB = React.lazy(() => import('remote-b/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <TestPage />
              <RemoteA />
              <RemoteB />
            </>
          }
        />
      </Routes>
    </React.Suspense>
  );
}

export default App;
