import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <main>
            <Header />
            <Outlet />
        </main>
    );
};

export default Main;