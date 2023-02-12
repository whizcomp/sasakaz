import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { getBalance } from "./api";

export default function Balance() {
  let { acc_no } = useParams();
  useEffect(() => {
    balance();
  }, []);
  const balance = async () => {
    const { data } = await getBalance(acc_no);
    setUser(data[0]);
  };
  const [user, setUser] = useState(null);
  return (
    <div className="container d-flex justify-content-center align-items-center pt-5">
      <div className="card" style={{ width: "28rem" }}>
        <h2 className="text-success">Transaction successful</h2>
        <div className="card-header">Account Details</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Name: {user && user.first_name} {user && user.last_name}
          </li>
          <li className="list-group-item">
            Balance: {user && user.current_balance}
          </li>
          <li className="list-group-item">
            Account No: {user && user.account_no}
          </li>
        </ul>
      </div>
    </div>
  );
}
