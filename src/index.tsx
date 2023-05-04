import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {store} from "./store";
import Login from "./pages/Login";
import Event from "./pages/Event";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/">
        <Route index element={<Login />}/>
        <Route path="event" element={<Event />} />
    </Route>
));


root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);