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

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/new" element={<CreateUser />}></Route>
        <Route path="/account" element={<CreateAccount />}></Route>
        <Route path="/card" element={<CreateCard />}></Route>
        <Route path="/success" element={<Created />}></Route>
        <Route path="/statement" element={<Statement />}></Route>
      </Switch>
    </Router>
  );
}
