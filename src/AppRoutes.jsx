import { Route, Routes } from 'react-router-dom';

import ActionsNotebook from './pages/NotebookActions';
import MainLayout from './components/Layout/MainLayout';
import Root from './pages/Root';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

const AppRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route path="/notebook/" element={<ActionsNotebook />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </MainLayout>
  );
};

export default AppRoutes;
