import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      {/* 
        อนาคตสามารถครอบ Redux Provider ได้ที่นี่:
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      */}
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
