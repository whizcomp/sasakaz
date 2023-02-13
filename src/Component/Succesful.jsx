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
    setDatas(data);
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
          {datas.map((data) => (
            <>
              <tr className="pt-3 table-dark">
                <th scope="col">Full Name</th>
                <td scope="col">
                  {data.first_name} {data.last_name}
                </td>
              </tr>
              <tr>
                <th scope="row">Bank Id</th>
                <td>{data.customer_id}</td>
              </tr>
              <tr>
                <th scope="row">Account No</th>
                <td>{data.account_no}</td>
              </tr>
              <tr>
                <th scope="row">Bank Bal</th>
                <td>{data.current_balance}</td>
              </tr>
              <tr>
                <td colSpan="2">
                  <Link to={`/cards/${data.account_no}`}>
                    {" "}
                    <div className="btn btn-info d-grid gap-2">
                      View Credit Cards
                    </div>
                  </Link>
                </td>
              </tr>
              <div className="pt-5"></div>
            </>
          ))}
        </tbody>
      </table>
      <Link to="/">Go Home</Link>
    </div>
  );
}
