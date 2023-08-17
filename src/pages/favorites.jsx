import { useState, useEffect } from 'react'
import { quoteService } from '../services/quote.service'
export function Favorites() {
    const [favorites, setFavorites] = useState(quoteService.liked)
    useEffect(()=>{
        setFavorites(quoteService.liked)
    },[])
    console.log(favorites)
    if (!favorites) return 'You have no liked quotes. like some quotes and come back to see them'
    return (
        <div>
      {  console.log(favorites)}
        { favorites.map(quote => quote.quote) }
        </div>
        // <h1>
        //    {favorites[0].quote}
        // </h1>
    )
}