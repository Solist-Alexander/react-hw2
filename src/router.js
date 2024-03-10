import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";
import EpisodesPage from "./pages/EpisodesPage";
import CharactersPage from "./pages/CharactersPage";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayouts/>,children:[
            {
                index:true, element:<Navigate to={'episodes'}/>
            },
            {
                path:'episodes', element:<EpisodesPage/>
            }
        ]
    },
    {
        path:'characters', element:<CharactersPage/>
    }
])

export {
router
}