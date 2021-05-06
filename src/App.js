import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Book from './Component/Book/Book';
import PrivetRoute from './Component/Login/PrivetRoute';
export const UserContext = createContext()

function App() {
  const [singInUse, setSignInUser] =useState({})
  return (
   
   <UserContext.Provider value= {[singInUse, setSignInUser]} style={{marginTop:"-20px"}}>
     <Router>
      <h2>{singInUse.email}</h2>
     <Header></Header>
     <Switch>
       <Route path = "/home">
       <Home></Home>
       </Route>
       <Route exact path = "/">
       <Home></Home>
       </Route>
       <PrivetRoute path = "/book/:bedType">
         <Book></Book>
       </PrivetRoute>
       <Route path= "/login">
         <Login></Login>
       </Route>
     </Switch>
   </Router>
   </UserContext.Provider>
  );
}

export default App;
