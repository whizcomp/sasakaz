import { useState } from "react";

export default function Withdraw() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`amount is ${amount}`);
    console.log(`Account No is ${accountNo}`);
  };
  const [amount, setAmount] = useState("");
  const [accountNo, setAccountNo] = useState("");
  return (
    <div>
      <h1 className="text-center pt-3 pb-4">Withdraw</h1>
      <form onSubmit={handleSubmit} className="mx-auto w-50">
        <div className="form-group">
          <label htmlFor="amount">Enter amount</label>
          <input
            type="text"
            className="form-control"
            id="amount"
            required
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="accountNo">Account no For Card</label>
          <input
            type="text"
            className="form-control"
            id="accountNo"
            required
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
