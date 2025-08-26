// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';

// import { RouterProvider } from "react-router-dom"; // ✅ FIXED import
// import { router } from './Routes/Routes';
// import AuthProvider from './contexts/AuthContext/AuthProvider';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AuthProvider>
//       <RouterProvider router={router} />
//     </AuthProvider>
//   </StrictMode>
// );



import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProvider from './contexts/AuthContext/AuthProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider
        router={router}
        fallbackElement={
          <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            <p className="ml-3 text-lg">Loading...</p>
          </div>
        }
      />
    </AuthProvider>
  </StrictMode>
);
