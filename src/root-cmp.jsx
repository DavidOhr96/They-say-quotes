import routes from './routes.js'
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import {AppHeader} from './cmps/app-header.jsx'
import {UserMsg}from './cmps/user-msg.jsx'

// const Router = ReactRouterDOM.HashRouter
// const { Routes, Route } = ReactRouterDOM

 export function App() {

    return (
        <Router>
            <AppHeader />
            <Routes>
                {routes.map(route=>
                <Route key={route.path} element={<route.componenet />} path={route.path} />
                )}
                {/* <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} >
                    <Route path="/about/team" element={<Teams />} />
                    <Route path="/about/vision" element={<Vision />} />
                </Route> */}
            </Routes>
            <UserMsg />
        </Router>
    )
}
