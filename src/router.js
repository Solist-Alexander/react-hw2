import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import UsersPage from "./pages/UsersPage";
import {userServices} from "./services/userServices";
import UsersDetailsPage from "./pages/UsersDetailsPage";
import PostsPage from "./pages/PostsPage";
import PostDetailsPage from "./pages/postDetailsPage";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children:[
            {
                index: true, element:<Navigate to={'users'}/>
            },
            {
                path:'users', element:<UsersPage/>, loader: ()=> userServices.getAll(), children:[
                    {
                        path:':id', element:<UsersDetailsPage/>, children:[
                            {
                                path:'posts', element: <PostsPage/>
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        path:'postDetails/:id', element:<PostDetailsPage/>
    }
])

export {
    router
}