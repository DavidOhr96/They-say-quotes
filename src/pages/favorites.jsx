import { useState, useEffect } from 'react'
import { quoteService } from '../services/quote.service'
export function Favorites() {
    const [favorites, setFavorites] = useState(quoteService.liked)
    useEffect(()=>{
        setFavorites(quoteService.liked)
    },[])
    console.log(favorites)
    if (!favorites.length) return<div className='no-favs'> 'You have no liked quotes. like some quotes and come back to see them'</div>
    return (
        <main className='favorites'>
      {/* {  console.log(favorites)} */}
      <ul>
        { favorites.map(quote =>{
          return <li> {quote.quote} 
          <br/>
          <br/>
          -{quote.author}</li> }) }
          </ul>
        </main>
       
    )
}