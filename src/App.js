import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Navbar from "./Navbar";
import CreateUser from "./Component/CreateUser";
import CreateAccount from "./Component/CreateAccount";
import CreateCard from "./Component/CreateCard";
import Created from "./Component/Created";
import Statement from "./Component/Statement";
import Succesful from "./Component/Succesful";
import CardDetails from "./Component/CardDetails";
import Home from "./Component/Home";
import Withdraw from "./Component/Withdraw";
import Balance from "./Component/Balance";
import Deposit from "./Component/Deposit";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/bal/:acc_no" element={<Balance />}></Route>
        <Route path="/success/:id" element={<Succesful />}></Route>
        <Route path="/cards/:acc_no" element={<CardDetails />}></Route>
        <Route path="/new" element={<CreateUser />}></Route>
        <Route path="/account" element={<CreateAccount />}></Route>
        <Route path="/card" element={<CreateCard />}></Route>
        <Route path="/success" element={<Created />}></Route>
        <Route path="/statement" element={<Statement />}></Route>
        <Route path="/withdraw" element={<Withdraw />}></Route>
        <Route path="/deposit" element={<Deposit />}></Route>

        <Route path="/" element={<Home />}></Route>
      </Switch>
    </Router>
  );
}
