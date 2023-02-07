import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/home'));
const Example = lazy(() => import('pages/example'));

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="example">
          <Route path="" element={<Example />} />
          <Route path=":id" element={<Example />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
