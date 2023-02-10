import Home from 'pages/home';
import { UserList } from 'pages/user';
import { Route, Routes } from 'react-router-dom';

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
