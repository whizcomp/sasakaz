import React, { useState } from "react";
import { createAccount, createUser } from "./api";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { firstName, lastName, idNumber };
    const { data: result } = await createUser(data);
    console.log(result);
    if (result.affectedRows > 0) {
      const { insertId } = result;
      const { data: new_acc } = await createAccount(insertId);
      if (new_acc.affectedRows > 0) {
        const { insertId: id } = new_acc;
        navigate(`/success/${id}`);
      }
    }
  };
  return (
    <div>
      <h1 className="text-center">Create user</h1>
      <form onSubmit={handleSubmit} className="mx-auto w-50">
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="idNumber">ID Number:</label>
          <input
            type="text"
            className="form-control"
            id="idNumber"
            value={idNumber}
            onChange={(event) => setIdNumber(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
}
