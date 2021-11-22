import React, {useContext} from 'react'
import {Route, Routes} from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';
const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
    console.log(isAuth);
    if(isLoading){
        return <Loader/>
    }
    return (
        <Routes>
            {isAuth
                ?
                privateRoutes.map(route => 
                    <Route 
                        exact={route.exact} 
                        path={route.path} 
                        element={route.element}
                        key={route.path}
                    />
                )
                :
                publicRoutes.map(route => 
                    <Route 
                        exact={route.exact} 
                        path={route.path} 
                        element={route.element}
                        key={route.path}
                    />
                )
            }
            {/* <Route path="/about" element={<About/>}/>
            <Route exact path="/posts" element={<Posts/>}/>
            <Route exact path="/posts/:id" element={<PostIdPage/>}/>
            <Route path="/" element={<Posts/>}/>
            <Route path="*" element={<Error/>}/> */}
      </Routes>
    )
}

export default AppRouter
