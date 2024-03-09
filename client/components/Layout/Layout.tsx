import React from 'react';
import Menu from '../Menu/menu';
import Footer from '../footer/Footer';
import { Button }  from '../ui/button';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  const scrollToTop = () => window.scrollTo({ top: 0 });

  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden">
      <Menu  />
      {children}
      <Button onClick={scrollToTop} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Voltar ao Topo</Button>
      < Footer />
    </div>
  );
};

export default Layout;
