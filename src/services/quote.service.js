import axios from 'axios'
// import KEY from '../KEY'


 let liked=[

 ]
export const quoteService={
    getNewQuote,
    addToLiked

}
function getNewQuote(){
    // axios request got error switched to manual responce/////////////////
    // return await  axios.get('https://quotes.rest/quote/random', {
    //     params: {
    //       'language': 'en',
    //       'limit': '1'
    //     },
    //     headers: {
    //       'accept': 'application/json',
    //       'Authorization': 'Bearer 23SqOlr9z2ixnLb1QQwARtToRCcH3NYFnRgpFHTY'
    //     }
    //   }).then (res=>res.data);
    return{
        "success": {
          "total": 1
        },
        "contents": {
          "quotes": [
            {
              "quote": "The day soldiers stop bringing you their problems is the day you have stopped leading them. They have either lost confidence that you can help them or concluded that you do not care. Either case is a failure of leadership.",
              "length": "222",
              "author": "Colin Powell",
              "tags": [
                "confidence",
                "leadership",
                "management"
              ],
              "category": "management",
              "id": "XLa1AmylKv1XF_dXcyhvdweF"
            }
          ]
        }
      }
}

function addToLiked(quote){
    console.log(liked)
liked.push(quote)
console.log('liked sucssesfuly!')
console.log(liked)
}



