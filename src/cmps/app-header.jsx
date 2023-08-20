import { NavLink } from 'react-router-dom'
import { Fragment } from 'react'

export function AppHeader() {

    return (
        <Fragment>
            <header>
                <ul>
                    <li>   <NavLink to="/">Generator</NavLink></li>
                    <li> <NavLink to="/favorites">Favorites</NavLink></li>
                </ul>
            </header>
            <div className='title'>
                <h1>welcome to our quote site</h1>
            </div>
        </Fragment>
    )

}