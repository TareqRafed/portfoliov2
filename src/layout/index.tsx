import { ReactNode } from 'react';

import Body from './Body';
import Footer from './Footer';
import Header from './Header';

interface props {
  children: ReactNode;
}

const Layout = ({ children }: props) => {
  return (
    <div>
      <Body>
        <Header />
        {children}
      </Body>
      <Footer />
    </div>
  );
};

export default Layout;
