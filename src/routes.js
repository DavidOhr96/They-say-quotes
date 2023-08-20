
import {Generator} from './pages/generator.jsx'
import {Favorites} from './pages/favorites.jsx'

export default[
  
    {
        path:'/',
        component:<Generator />,
    },
    {
        path:'/favorites',
        component:<Favorites />
    }
]