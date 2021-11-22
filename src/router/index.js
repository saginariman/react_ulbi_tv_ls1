import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import PostsDynamicLoad from "../pages/PostsDynamicLoad";

export const privateRoutes = [
    {path: '/about', element: <About/>, exact:true},
    {path: '/posts', element: <Posts/>, exact:true},
    {path: '/postsDynamic', element: <PostsDynamicLoad/>, exact:true},
    {path: '/posts/:id', element: <PostIdPage/>, exact:true},
    {path: '/login', element: <Posts/>, exact:true},
    {path: '/', element: <Posts/>, exact:true},
    {path: '*', element: <Error/>, exact:true},
]

export const publicRoutes = [
    {path: '/login', element: <Login/>, exact:true},
    {path: '/', element: <Login/>, exact:true},
    {path: '*', element: <Login/>, exact:true},
]