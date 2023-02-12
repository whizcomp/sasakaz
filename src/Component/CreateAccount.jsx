import React, { useState } from "react";
import { createAccount } from "./api";
import { useNavigate } from "react-router-dom";

export default function CreateAccount() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data } = await createAccount(idNumber);
    if (data.affectedRows > 0) {
      const { insertId: id } = data;
      navigate(`/success/${id}`);
    }
  };
  const [idNumber, setIdNumber] = useState("");
  return (
    <div>
      <h1 className="text-center">Create Account</h1>
      <form onSubmit={handleSubmit} className="mx-auto w-50">
        <div className="form-group">
          <label htmlFor="idNumber" className="pb-4">
            Enter the Customer Bank Id
          </label>
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
