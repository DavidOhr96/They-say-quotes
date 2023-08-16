import { useState, useEffect } from 'react'
import { quoteService } from '../services/quote.service'

export function Generator(){
const [quote,setQuote]=useState({quote:'yes',
author:'me'})

function getQuote(){
setQuote(quoteService.getNewQuote().contents.quotes[0])
}
function onLike(){

}
    return(
        <main>
            <button onClick={getQuote}> print quote</button>
            {quote.quote}
            {quote.author}
            {/* <button onClick={onLike}>Like</button> */}
            <h1>Im generator</h1>
        </main>
    )
}