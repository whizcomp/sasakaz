import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand ms-auto" href="#">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/new"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                New User
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/account"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                New Account
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/card"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Create Card
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/statement"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                View statement
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
