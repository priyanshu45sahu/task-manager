import React from 'react';
import Header from './Header';
import '../../style/Layout.css';
import Filter from './Filter';
import Search from '../Search';

const Layout = ({ children }) => {
    return (
        <>
            <div className="container">
                <div className="red-bar">
                    <Header />
                </div>
                <div className="content">
                    <div className="sidebar">
                        <Filter />
                    </div>
                    <div className="main-content">
                        <Search />
                        <div className="scrollable-content">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;
