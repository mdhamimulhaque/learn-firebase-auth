import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import EmailPasswordAuth from '../components/EmailPasswordAuth/EmailPasswordAuth';
import Github from '../components/Github/Github';
import Google from '../components/Google/Google';
import Login from '../components/Login/Login';
import Main from '../Layout/Main';


const router = createBrowserRouter([{
    path: "/",
    element: <Main />,
    children: [
        {
            path: '/',
            element: <EmailPasswordAuth />
        },
        {
            path: '/register',
            element: <EmailPasswordAuth />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/google',
            element: <Google />
        },
        {
            path: '/github',
            element: <Github />
        }
    ]
}])

export default router;