import { useState, useEffect } from 'react'
import { quoteService } from '../services/quote.service'

export function Generator(){
const [quote,setQuote]=useState('lala')

function getQuote(){


console.log(quoteService.getNewQuote().contents.quotes[0].quote)
}
    return(
        <main>
            <button onClick={getQuote}> print quote</button>
            {quote}
            blbala
            <h1>Im generator</h1>
        </main>
    )
}