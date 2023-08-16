import { useState, useEffect } from 'react'
import { quoteService } from '../services/quote.service'

export function Generator() {
    const [quote, setQuote] = useState({
        quote: 'yes',
        author: 'me'
    })

    function getQuote() {
        setQuote(quoteService.getNewQuote().contents.quotes[0])
    }
    function onLike() {
        quoteService.addToLiked(quote)
    }
    return (
        <main>
            <h2>{quote.quote}</h2>
            <div className='panel'>
                <h3> {quote.author}</h3>
                <button onClick={onLike}>Like</button>
            </div>
            <button onClick={getQuote}> print quote</button>
            <h1>Im generator</h1>
        </main>
    )
}