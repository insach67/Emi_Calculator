import { useSelector } from "react-redux";
import * as React from "react";
import Tablesdata from "./Tablesdata";
function Showtable() {
  const { tableData } = useSelector((res) => res);
  return (
    <div style={{ width: "45%" }}>
      <Tablesdata tableData={tableData} />
    </div>
  );
}
export default Showtable;
