import { Route, Routes } from 'react-router-dom';

import Layout from '../layout';
import routes from './routes';

const RoutesProvider = () => {
  return (
    <Layout>
      <Routes>
        {routes().map((route) => (
          <Route key={route.path} path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </Layout>
  );
};

export default RoutesProvider;
