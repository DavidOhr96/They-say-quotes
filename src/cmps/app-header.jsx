import {NavLink}from 'react-router-dom'
import{ useEffect, Fragment } from 'react'
import { UserMsg } from './user-msg.jsx'


export function AppHeader(){

    return(
        <Fragment>
        <header>
            {/* <UserMsg /> */}
             
                    <NavLink to="/"> Home </NavLink>
                    <NavLink to="/about"> About </NavLink>
                    <NavLink to="/index">index</NavLink>
                    <NavLink to="/generator">Generator</NavLink>
                    <NavLink to="/favorites">Favorites</NavLink>
        </header>
        <div className='title'>
            <h1>welcome to our quote site</h1>
        </div>
        </Fragment>
    )

}