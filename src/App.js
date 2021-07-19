import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import { axiosWithAuth } from "./helpers/axiosWithAuth";
import "./styles.scss";
import axios from "axios";

function App() {

  const handleLogOut = (e) => {
    e.preventDefault();
    axiosWithAuth().post("/logout",{})
    .then((res) => {
      console.log(res); 
      localStorage.clear();
      window.location.href='/';
    })
    .catch((err)=>{      
      console.log({err})
    })
  };


  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="#"onClick={handleLogOut} >logout</a>
        </header> 
        <PrivateRoute path="/bubblePage" component={BubblePage}/>    
        <Route exact path="/" component={Login}/>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.