import React, { useState } from "react";

export default function CreateAccount() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`ID Number: ${idNumber}`);
  };
  const [idNumber, setIdNumber] = useState("");
  return (
    <div>
      <h1 className="text-center">Create Account</h1>
      <form onSubmit={handleSubmit} className="mx-auto w-50">
        <div className="form-group">
          <label htmlFor="idNumber">User bank Number</label>
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
