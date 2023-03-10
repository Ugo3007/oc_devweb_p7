import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./views/MainLayout";
import ErrorPage from "./views/ErrorPage";
import Homepage from "./views/Homepage";
import About from "./views/About";
import HousingDetails from "./views/HousingDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Homepage/>
            },
            {
                path: '/a-propos',
                element: <About/>
            },
            {
                path: '/logement/:id',
                element: <HousingDetails/>
            }
        ]
    },
    {
        path: '/error-page',
        element: <ErrorPage/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
