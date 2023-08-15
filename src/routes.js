import {HomePage} from './pages/home-page.jsx'
import {About} from './pages/about.jsx'
import {Index} from './pages/index.jsx'

export default[
    {
        path:'/',
        componenet: <HomePage/>,
    },
    {
        path:'/about',
        componenet:<About />,
    },
    {
        path:'/index',
        componenet:<Index />,
    },
    //    {/* <Route path="/" element={<Home />} />
    //             <Route path="/about" element={<About />} >
    //                 <Route path="/about/team" element={<Teams />} />
    //                 <Route path="/about/vision" element={<Vision />} />
    //             </Route> */}
]