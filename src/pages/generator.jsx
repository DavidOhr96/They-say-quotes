import { useState, useEffect } from 'react'
import { quoteService } from '../services/quote.service'

export function Generator() {
    const [quote, setQuote] = useState({
        quote: 'Every egg can be a surprise egg if you throw it at someone randomly enough.',
        author: 'me'
    })

    function getQuote() {
        setQuote(quoteService.getNewQuote().contents.quotes[0])
    }
    function onLike() {
        quoteService.addToLiked(quote)
    }
    return (
        <main className='generator'>
            <h2>"{quote.quote}"</h2>
            <div className='panel'>
                <button className='like' onClick={onLike}>Like</button>
                <h3>author: {quote.author}</h3>
            </div>
            <div className='button-container'>
            <button className='new-quote' onClick={getQuote}> new quote</button>
            </div>
       </main>
    )
}