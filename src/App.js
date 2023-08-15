import routes from './routes.js'
import React from 'react';
import {HomePage} from './pages/home-page.jsx'
import {About} from './pages/about.jsx'
import { HashRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import {AppHeader} from './cmps/app-header.jsx'
import {UserMsg}from './cmps/user-msg.jsx'

// const Router = ReactRouterDOM.HashRouter
// const { Routes, Route } = ReactRouterDOM

function App() {

    return (
        <Router>
            <AppHeader />
            <Routes>
                {routes.map(route=> <Route key={route.path} exact={true} element={route.componenet} path={route.path} />)}
                {/* <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} > */}
                    {/* <Route path="/about/team" element={<Teams />} />
                    <Route path="/about/vision" element={<Vision />} /> */}
                {/* </Route> */}
            </Routes>
            {/* <UserMsg /> */}
        </Router>
    )
}
export default App