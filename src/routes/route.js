import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/home'));
const UserList = lazy(() => import('pages/user/list'));

const AppRoute = () => {
  return (
    <Routes>
      <Route index element={<Home />} />

      <Route path="users">
        <Route path="" element={<UserList />} />
        <Route path=":id" element={<UserList />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
