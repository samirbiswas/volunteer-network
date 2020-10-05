import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import RegisterHere from './components/RegisterHere/RegisterHere';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import YourEvents from './components/YourEvents/YourEvents';
export const UserContext = createContext()

function App() {
  const [loggesinUser, setLoggedInUser] = useState({})
  
  return (
    <UserContext.Provider value={[loggesinUser, setLoggedInUser]}>
      <Header></Header>
      
      <Router>
        <Switch>
          <Route exact path='/'>
          <Home></Home>
          </Route>
          <Route path="/yourevents">
           <YourEvents></YourEvents>
           </Route>
          <Route path="/login">
           <Login></Login>
           </Route>
          <PrivateRoute path='/register/:id'>
            <RegisterHere></RegisterHere>
          </PrivateRoute>
          
        </Switch>
      </Router>


     
      </UserContext.Provider>
  );
}

export default App;
