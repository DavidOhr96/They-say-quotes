import { useState, useEffect } from 'react'
import { quoteService } from '../services/quote.service'
import { storageService } from '../services/storage.service'
export function Favorites() {
    const [favorites, setFavorites] = useState(quoteService.liked)
    useEffect(()=>{
        setFavorites(storageService.loadFromStorage('quotesDB'))
    },[])
    console.log(favorites)
    if (!favorites) return<div className='no-favs'> 'You have no liked quotes. like some quotes and come back to see them'</div>
    return (
        <main className='favorites'>
      {/* {  console.log(favorites)} */}
      <ul>
        {/* {favorites.quote} */}
        { favorites.map(quote =>{
          return <li> {quote.quote} 
          <br/>
          <br/>
          -{quote.author}</li> }) }
          </ul>
        </main>
       
    )
}