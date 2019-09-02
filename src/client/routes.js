// import React from 'react';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import UsersListPage from './pages/UsersListPage';
import App from './App';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...UsersListPage,
        path: '/users',
      },
      {
        ...NotFoundPage
      }
    ],
  },
];
