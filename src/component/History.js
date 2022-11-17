import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import React from "react";
import Card from "./Card";

function History() {
  const [show, setShow] = useState(false);
  const [initdata, setInitdata] = useState([]);
  let { history } = useSelector((res) => res);
  useEffect(() => {
    let alldata = JSON.parse(localStorage.getItem("allemidata")) || [];
    setInitdata(alldata);
  }, []);
  return !show ? (
    <Button variant="contained" color="success" onClick={() => setShow(true)}>
      Show History
    </Button>
  ) : (
    <div>
      <Button variant="contained" onClick={() => setShow(false)}>
        Hide History
      </Button>
      <div className="alldata">
        {!history.length
          ? initdata.map((data) => {
              return <Card history={data} />;
            })
          : history.map((data) => {
              return <Card history={data} />;
            })}
      </div>
    </div>
  );
}

export default History;
