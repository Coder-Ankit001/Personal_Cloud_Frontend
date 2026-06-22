import { createBrowserRouter } from 'react-router';
import { Navigate } from 'react-router';

import RootLayout from './layouts/RootLayout';
import MainLayout from './layouts/MainLayout';
import ProtectedLayout from './layouts/ProtectedLayout';
import Content from './components/Content';
import AuthForm from './layouts/AuthForm';
import Login from './components/Login';
import Register from './components/Register';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <ProtectedLayout />,
        children: [
          {
            path: '/',
            element: <MainLayout />,
            children: [
              { index: true, Component: Content },
              { path: 'folder/:uid', Component: Content },
            ],
          },
        ],
      },
      {
        path: '/auth',
        Component: AuthForm,
        children: [
          { index: true, element: <Navigate to="login" replace /> },
          { path: 'login', Component: Login },
          { path: 'register', Component: Register },
        ],
      },
    ],
  },
]);

export default router;
