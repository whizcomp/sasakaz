import axios from "axios";
import { useState } from "react";
export default function Statement() {
  const handleSubmit = (event) => {};
  const [data, setData] = useState([]);
  const [acc_no, setAcc_no] = useState("");
  return (
    <div>
      <h1 className="text-center">View Statement</h1>
      <form onSubmit={handleSubmit} className="mx-auto w-50">
        <div className="form-group">
          <label htmlFor="acc_no">User Account No</label>
          <input
            type="text"
            className="form-control"
            id="acc_no"
            value={acc_no}
            onChange={(event) => setAcc_no(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
}
