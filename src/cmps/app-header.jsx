import {NavLink}from 'react-router-dom'
import{ useEffect } from 'react'
import { UserMsg } from './user-msg.jsx'


export function AppHeader(){

    return(
        <header>
            {/* <UserMsg /> */}
             
                    <NavLink to="/"> Home </NavLink>
                    <NavLink to="/about"> About </NavLink>
            
        </header>
    )

}