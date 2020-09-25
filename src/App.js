import React, { createContext, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import FoodDetails from "./Components/FoodDetails/FoodDetails";
import Login from "./Components/Login/Login";
import DeliveryDetails from "./Components/DeliveryDetails/DeliveryDetails";
import OrderPlaced from "./Components/OrderPlaced/OrderPlaced";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [addfoodItems, setAddFoodItems] = useState([]);
  return (
    <UserContext.Provider
      value={{
        value: [loggedInUser, setLoggedInUser],
        value2: [addfoodItems, setAddFoodItems],
      }}
    >
      <Router>
        <Navbar className=""></Navbar>

        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/foodDetails/:foodName">
            <FoodDetails></FoodDetails>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/deliveryDetails">
            <DeliveryDetails></DeliveryDetails>
          </PrivateRoute>

          <Route path="/orderPlaced">
            <OrderPlaced></OrderPlaced>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="*"></Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
