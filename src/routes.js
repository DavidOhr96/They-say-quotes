
import {Generator} from './pages/generator.jsx'
import {Favorites} from './pages/favorites.jsx'

export default[
  
    {
        path:'/generator',
        component:<Generator />,
    },
    {
        path:'/favorites',
        component:<Favorites />
    }
]