import React, { useState } from "react";

export default function CreateCard() {
  const [idNumber, setIdNumber] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`ID Number: ${idNumber}`);
  };
  return (
    <div>
      <h1 className="text-center">Card</h1>

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
        <div className="form-group">
          <label htmlFor="accountNo">Account no For Card</label>
          <input
            type="text"
            className="form-control"
            id="accountNo"
            value={accountNo}
            onChange={(event) => setAccountNo(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
}
