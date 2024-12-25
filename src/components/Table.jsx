import React from "react";
import "./Table.css";

function Table({ data }) {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            {Object.keys(data[0] || {}).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
