import React from "react";

export default function Card({ data }) {
  let exp = data && data.expiry_date;
  exp = new Date(exp).getFullYear();
  return (
    <div className="container pt-4 ">
      <div className="card">
        <div className="d-flex flex-row card-header bg-info">
          <h3 className="me-auto">Credit Card</h3>
          <h3 className="ms-auto text-success">
            {data && data.first_name} {data && data.last_name}
          </h3>
        </div>
        <div className="card-body">
          <h6>Account Number: {data && data.account_no}</h6>
          <br />

          <div className="d-flex flex-row">
            <h5 className=" card-title">{data && data.card_no}</h5>

            <h5 className="ms-auto"> cvv: {data && data.cvv}</h5>
          </div>
          <br />
          <p>Expiry Date: {exp}</p>
        </div>
      </div>
    </div>
  );
}
