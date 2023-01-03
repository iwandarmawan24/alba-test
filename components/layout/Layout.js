import React from 'react';
import Navbar from 'components/layout/Navbar';
import { element, bool } from 'prop-types';
import MENU_DATA from 'utils/MENU_DATA';
import Footer from 'components/layout/Footer';

const Layout = ({ children, withFooter }) => (
    <>
        <Navbar menuData={MENU_DATA} />
        {children}
        {
          withFooter ? <Footer /> : ''
        }
    </>
);

Layout.propTypes = {
  children: element.isRequired,
  withFooter: bool,
};

Layout.defaultProps = {
  withFooter: true,
};

export default Layout;
