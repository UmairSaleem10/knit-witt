import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";




const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");
  function getData() {
    axios
      .get("https://643f7cdd3dee5b763e1dc55e.mockapi.io/crud")
      .then((res) => {
        setData(res.data);
      });
  }
  function handleDelete(id) {
    axios
      .delete(`https://643f7cdd3dee5b763e1dc55e.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage = (id,Item_Type,Location,Reorder_Point,Quantity,Unit_Cost,selectedDate) => {
    localStorage.setItem("id", id);
    localStorage.setItem("Item_Type", Item_Type);
    localStorage.setItem("Reorder_Point", Reorder_Point);
    localStorage.setItem("Location",Location);
    localStorage.setItem("Unit_Cost",Unit_Cost);
    localStorage.setItem("Quantity",Quantity);
    localStorage.setItem("selectedDate",selectedDate)
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            if (tabledark === "table-dark") setTableDark("");
            else setTableDark("table-dark");
          }}
        />
      </div>
      <div className="d-flex justify-content-between m-2">
        <h2>Read Inventory Data</h2>
        <Link to="/">
          <button className="btn btn-secondary">Create</button>
        </Link>
        <br/>
        <br/>
      </div>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col"># &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th scope="col">Item_Type &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th scope="col">Location &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th scope="col">Reorder_Point &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th scope="col">Quantity &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th scope="col">Unit_Cost &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th scope="col">Restock_Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th scope="col"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </th>
            <th scope="col"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>

          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{ eachData.Item_Type}</td>
                  <td>{eachData.Location}</td>
                  <td>{eachData.Reorder_Point}</td>
                  <td>{eachData.Quantity}</td>
                  <td>{eachData.Unit_Cost}</td>
                  <td>{ eachData.selectedDate}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn-danger"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.Item_Type,
                            eachData.Location,
                            eachData.Reorder_Point,
                            eachData.Quantity,
                            eachData.Unit_Cost,
                            eachData.selectedDate
                          )
                        }
                      >
                        Edit{" "}
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};
export default Read;