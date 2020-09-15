import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login.js";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders";


const promise = loadStripe(
	'pk_test_51HQ1t1Kx2kSeoV7K3TVk8V20a4is8g6aILQVqymJkxbJ6pmLI5MsXhIZTyoyigE26SbmZFVwSVY2QVCP8D0poNMm000n0oTYow'
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the app component runs
    auth.onAuthStateChanged((authUser) => {
      console.log("The useer is--- ", authUser);
      if (authUser) {
        //the user just loggedin / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
           <Route path="/orders">
           <Header />
             <Orders />
           </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/Checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/Payment">
            <Header /> 
             <Elements stripe={promise}>
              <Payment />
             </Elements>
            
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
