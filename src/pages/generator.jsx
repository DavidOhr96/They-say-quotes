import { useState, useEffect } from 'react'
import { quoteService } from '../services/quote.service'
import { storageService } from '../services/storage.service'
import { showSuccessMsg } from '../services/event-bus.service'

export function Generator() {
    const [quote, setQuote] = useState({
        quote: 'Every egg can be a surprise egg if you throw it at someone randomly enough.',
        author: 'me'
    })

    function getQuote() {
        quoteService.getNewQuote().then(data => setQuote(data))
    }
    function onLike() {
        let liked = []
        const fromStorage = storageService.loadFromStorage('quotesDB')
        if (fromStorage) liked = fromStorage
        liked.unshift(quote)
        storageService.saveToStorage('quotesDB', liked)
       showSuccessMsg('Quote added to favorites ')
    }
    return (
        <main className='generator'>
            <h2 className='quote'>"{quote.quote}"</h2>
            <div className='panel'>
                <button className='like' onClick={onLike}>Add to favorites</button>
                <h3 className='quote'>-{quote.author}</h3>
            </div>
            <div className='button-container'>
                <button className='new-quote' onClick={getQuote}> new quote</button>
            </div>
        </main>
    )
}