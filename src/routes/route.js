import { ErrorFallback, Main } from 'layouts';
import NotFound404 from 'pages/404';
import Example from 'pages/example';
import Home from 'pages/home';
import Login from 'pages/login';
import { UserCreate, UserDetail, UserList } from 'pages/user';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom';

const AppRoute = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Main />}>
          <Route index element={<Home />} />

          <Route path="users">
            <Route path="" element={<UserList />} />
            <Route path="create" element={<UserCreate />} />
            <Route path="edit/:id" element={<UserCreate />} />
            <Route path="detail/:id/*" element={<UserDetail />} />
          </Route>

          <Route element={<Example />} path="page-level-3b" />
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
};

export default AppRoute;
