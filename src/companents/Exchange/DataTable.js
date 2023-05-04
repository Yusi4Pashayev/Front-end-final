import React, { useState } from "react";
import {RiArrowDownSLine} from "react-icons/ri";
import "./DataTable.css"


export const DataTable = (props) => {
  return (
    <tr className="data_table" key={props.key} mykey={props.mykey}>
      <td>{props.currency} </td>
      <td>{props.buy} <RiArrowDownSLine/></td>
      <td>{props.sell} <RiArrowDownSLine/></td>
    </tr>
  );
};