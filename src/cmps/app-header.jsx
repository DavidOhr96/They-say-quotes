import {NavLink}from 'react-router-dom'
import{ useEffect, Fragment } from 'react'
import { UserMsg } from './user-msg.jsx'


export function AppHeader(){

    return(
        <Fragment>
        <header>
            {/* <UserMsg /> */}
             <ul>
                 <li>   <NavLink to="/generator">Generator</NavLink></li>
                 <li> <NavLink to="/favorites">Favorites</NavLink></li>
                    </ul>
        </header>
        <div className='title'>
            <h1>welcome to our quote site</h1>
        </div>
        </Fragment>
    )

}