import {Link } from 'react-router-dom'

import { BugPreview } from "./bug-preview.jsx"

export function BugList({ bugs, onRemoveBug }) {
    return (
        <section className="bug-list">
            <ul className="bug-list">
                {bugs.map(bug =>
                    <li key={bug._id}>
                        <BugPreview bug={bug} />
                        <section>
                            <button><Link to={`/bug/${bug._id}`}>Details</Link></button>
                            <button><Link to={`/bug/edit/${bug._id}`} >Edit</Link></button>
                            <button onClick={() => { onRemoveBug(bug._id) }}>x</button>
                        </section>

                    </li>)}
            </ul>
        </section>
    )
}