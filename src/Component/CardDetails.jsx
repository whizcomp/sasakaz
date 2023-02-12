import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { cardDetails, getBalance } from "./api";
import Card from "./Card";

export default function CardDetails() {
  let { acc_no } = useParams();
  useEffect(() => {
    getCard();
    balance();
  }, []);
  const getCard = async () => {
    const { data } = await cardDetails(acc_no);
    setDatas(data);
  };
  const balance = async () => {
    const { data } = await getBalance(acc_no);
    console.log(data);
    setUser(data[0]);
  };
  const [datas, setDatas] = useState([]);
  const [user, setUser] = useState([]);

  return (
    <div className=" container">
      <div className="row">
        <div className=" card col-3 pt-4">
          <h5>
            Balance:{" "}
            <span class="badge bg-secondary">
              {user && user.current_balance}
            </span>
          </h5>
          <h5>
            Name: {user && user.first_name} {user && user.last_name}
          </h5>
          <h5>
            Credit Cards: <span class="badge bg-secondary">{datas.length}</span>
          </h5>
        </div>
        <div className="col-9">
          {" "}
          {datas.map((card) => (
            <Card data={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
