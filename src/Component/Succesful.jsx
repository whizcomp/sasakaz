import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAccountDetails } from "./api";

export default function Succesful() {
  let { id } = useParams();
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    const { data } = await getAccountDetails(id);
    console.log(data);
    setDatas(data[0]);
  };
  const [datas, setDatas] = useState([]);
  return (
    <div className="container justify-content-center">
      <h1>Account Created succefully</h1>
      <table class="table">
        <thead>
          <tr>
            <th colspan={2}>
              <p className="text-center text-text-success">
                Customer Bank Account details
              </p>{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="col">Full Name</th>
            <td scope="col">
              {datas.first_name} {datas && datas.last_name}
            </td>
          </tr>
          <tr>
            <th scope="row">Bank Id</th>
            <td>{datas.customer_id}</td>
          </tr>
          <tr>
            <th scope="row">Account No</th>
            <td>{datas.account_no}</td>
          </tr>
          <tr>
            <th scope="row">Bank Bal</th>
            <td>{datas.current_balance}</td>
          </tr>
        </tbody>
      </table>
      <Link to="/">Go Home</Link>
    </div>
  );
}
