import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "./api";

export default function Users() {
  useEffect(() => {
    users();
  }, []);
  const users = async () => {
    const { data } = await getUsers();
    console.log(data);
    setCustomers(data);
  };
  const [customers, setCustomers] = useState([]);
  return (
    <div className="container">
      <h1 className="text-center">Customers List</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Bank ID</th>

            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">National Id</th>
            <th scope="col">View</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr key={customer.customer_id}>
              <td>{customer.customer_id}</td>
              <td>{customer.first_name}</td>
              <td>{customer.last_name}</td>
              <td>{customer.national_ID}</td>
              <td>
                <Link to={`/success/${customer.customer_id}`}>
                  <div className="btn btn-info">View Details</div>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
