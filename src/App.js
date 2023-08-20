import routes from './routes.js'
import React from 'react';
import './App.scss';

import { HashRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import {AppHeader} from './cmps/app-header.jsx'
import {UserMsg}from './cmps/user-msg.jsx'


function App() {

    return (
        <Router>
            <AppHeader />
            <Routes>
                {routes.map(route=> <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
            </Routes>
            <UserMsg />
        </Router>
    )
}
export default App