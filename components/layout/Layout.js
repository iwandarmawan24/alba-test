import React from 'react';
import Navbar from 'components/layout/Navbar';
import { element } from 'prop-types';
import MENU_DATA from 'utils/MENU_DATA';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar menuData={MENU_DATA}/>
            {children}
        </div>
    )
};

Layout.propTypes = {
    children: element.isRequired
};

export default Layout;