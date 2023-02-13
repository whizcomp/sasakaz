import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { withdrawal } from "./api";

export default function Withdraw() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data } = await withdrawal(accountNo, amount);

    const bal = data[0];
    if (bal.affectedRows > 0) {
      navigate(`/bal/${accountNo}`);
    }
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
          <label htmlFor="accountNo">Account No</label>
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
