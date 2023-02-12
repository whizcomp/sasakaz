import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container pt-4 pb-5 mt-5 justify-content-center">
      <div className="row">
        <div className="col-4">
          <Link to="/new" className="btn btn-lg btn-primary p-4">
            Create User
          </Link>
        </div>
        <div className="col-4">
          <Link to="/account" className="btn btn-lg btn-primary p-4">
            Add account
          </Link>
        </div>
        <div className="col-4">
          <Link to="/card" className="btn btn-lg btn-primary p-4">
            Create Card
          </Link>
        </div>
      </div>
      <div className="row mt-5  pt-4">
        <div className="col-4">
          <Link to="/withdraw" className="btn btn-lg btn-primary p-4">
            Withdraw
          </Link>
        </div>
        <div className="col-4">
          <Link to="/deposit" className="btn btn-lg btn-primary p-4">
            Deposit
          </Link>
        </div>
        <div className="col-4">
          <Link to="/users" className="btn btn-lg btn-primary p-4">
            View Customers
          </Link>
        </div>
      </div>
    </div>
  );
}
