import {HomePage} from './pages/home-page.jsx'
import {About} from './pages/about.jsx'
import {Index} from './pages/index.jsx'
import {Generator} from './pages/generator.jsx'
import {Favorites} from './pages/favorites.jsx'

export default[
    {
        path:'/',
        component: <HomePage/>,
    },
    {
        path:'/about',
        component:<About />,
    },
    {
        path:'/index',
        component:<Index />,
    },
    {
        path:'/generator',
        component:<Generator />,
    },
    {
        path:'/favorites',
        component:<Favorites />
    }
    //    {/* <Route path="/" element={<Home />} />
    //             <Route path="/about" element={<About />} >
    //                 <Route path="/about/team" element={<Teams />} />
    //                 <Route path="/about/vision" element={<Vision />} />
    //             </Route> */}
]