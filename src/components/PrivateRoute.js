import React from 'react';
import { Route, Redirect } from "react-router-dom"

const PrivateRoute = ({component: Component, ...rest}) => {
    const token = window.localStorage.getItem('token')
    return (
        <div>
           <Route {...rest} render={props =>{
               if (token) {
                   return <Component {...props}/>
               } else {
                   return <Redirect to='/'/>
               }

           }} />   
        </div>
    )
}

export default PrivateRoute;


//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in