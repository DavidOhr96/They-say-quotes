import axios from 'axios'
import KEY from '../KEY/KEY'
import { storageService } from './storage.service'


let liked = [

]
export const quoteService = {
  getNewQuote,
  addToLiked,
  liked,
  query

}
async function getNewQuote() {
  return await axios.get('https://api.api-ninjas.com/v1/quotes', {
    params: {
      'category': '',
    },
    headers: {
      'X-Api-Key': KEY
    }
  }).then(res => res.data[0]);
}

function addToLiked(quote) {
  console.log(liked)
  liked.push(quote)
  console.log('liked sucssesfuly!')
  console.log(liked)
}

function query(filterBy = '', sort = '') {
  let favorites = storageService.loadFromStorage('quotesDB')
  if (filterBy.quote) {
    const regExp = new RegExp(filterBy.quote, 'i')
    favorites = favorites.filter(quote => regExp.test(quote.quote))
  }
  if (filterBy.categorys) {
    favorites=favorites.filter(favorite=>favorite.category===filterBy.categorys)
    console.log(filterBy.categorys, 'from Sort')

  }
  return favorites
}


