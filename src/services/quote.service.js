import axios from 'axios'
import KEY from '../KEY/KEY'


 let liked=[

 ]
export const quoteService={
    getNewQuote,
    addToLiked,
    liked

}
async function getNewQuote(){
    return await  axios.get('https://api.api-ninjas.com/v1/quotes', {
        params: {
          'category': 'happiness',
        },
        headers: {
          'X-Api-Key': KEY
        }
      }).then (res=>res.data[0]);
}

function addToLiked(quote){
    console.log(liked)
liked.push(quote)
console.log('liked sucssesfuly!')
console.log(liked)
}



