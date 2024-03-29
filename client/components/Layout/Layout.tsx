import React from 'react';
import Menu from '../Menu/menu';
import Footer from '../footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden">
      <Menu />
      {children}
      < Footer />
    </div>
  );
};

export default Layout;
