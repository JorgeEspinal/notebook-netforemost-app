import { Outlet } from 'react-router-dom';
import HeaderApp from './../components/UI/HeaderApp';

const Root = () => {
  return (
    <>
      <HeaderApp>Notebook Application</HeaderApp>
      <Outlet />
    </>
  );
};

export default Root;
