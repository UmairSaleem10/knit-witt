import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Select from 'react-select';



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

  const setToLocalStorage = (id,Warehouse_Name,Warehouse_Location,selectedOption) => {
    localStorage.setItem("id", id);
    localStorage.setItem("Warehouse_Name", Warehouse_Name);
    localStorage.setItem("Warehouse_Location",Warehouse_Location);
    localStorage.setItem("selectedOption", setSelectedOption);
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
        <h2>Read Warehouse Data</h2>
        <Link to="/">
          <button className="btn btn-secondary">Create</button>
        </Link>
        <br/>
        <br/>
      </div>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Manager_id  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th scope="col">Warehouse_Name  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th scope="col">Warehouse_Location  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th scope="col"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </th>
            <th scope="col">  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>

          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{ eachData.selectedOption}</td>
                  <td>{ eachData.Warehouse_Name}</td>
                  <td>{eachData.Warehouse_Location}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn-danger"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.selectedOption,
                            eachData.Warehouse_Name,
                            eachData.Warehouse_Location
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