import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;