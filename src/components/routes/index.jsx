import { Route, Routes } from 'react-router-dom';
import ActionsNotebook from './NotebookActions';
import App from './App';
import Home from './home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/notebook/" element={<ActionsNotebook />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
