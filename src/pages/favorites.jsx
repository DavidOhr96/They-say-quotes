import { useState, useEffect } from 'react'
import { quoteService } from '../services/quote.service'
import { storageService } from '../services/storage.service'

import { Filter } from '../cmps/filter'

export function Favorites() {
    const [favorites, setFavorites] = useState()
    const [filterBy, setFilterBy] = useState('')

    useEffect(() => {
        loadFavorites()
    }, [filterBy])

    function loadFavorites() {
        setFavorites(quoteService.query(filterBy))
    }

    function onSetFilter(filterBy) {
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, ...filterBy }))
    }
    if (!favorites) return <div className='no-favs'> 'You have no liked quotes. like some quotes and come back to see them'</div>
    return (
        <main className='favorites'>
            <Filter onSetFilter={onSetFilter} filterBy={filterBy} />
            <ul>
                {favorites.map(quote => {
                    return <li> {quote.quote}
                        <br />
                        <br />
                        -{quote.author}</li>
                })}
            </ul>
        </main>

    )
}