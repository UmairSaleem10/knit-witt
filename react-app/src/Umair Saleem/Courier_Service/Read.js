import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Select from 'react-select';
import DatePicker from "react-datepicker";



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

  const setToLocalStorage = (id,selectedOption,From_Location,To_Location,Total_Cost,Total_Quantity,Transport_Company,Transport_Name,selectedDate) => {
    localStorage.setItem("id", id);
    localStorage.setItem("selectedOption",selectedOption);
    localStorage.setItem("From_Location", From_Location);
    localStorage.setItem("To_Location", To_Location);
    localStorage.setItem("Total_Cost", Total_Cost);
    localStorage.setItem("Total_Quantity", Total_Quantity);
    localStorage.setItem("Transport_Company", Transport_Company);
    localStorage.setItem("Transport_Name", Transport_Name);
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
        <h2>Read Courier_Service Data</h2>
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
            <th scope="col">Product_Id  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th scope="col">From_Location  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th scope="col">To_Location  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th scope="col">Total_Cost  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th scope="col">Total_Quantity  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th scope="col">Transport_Company  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th scope="col">Transport_Name  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
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
                  <td>{eachData.selectedOption}</td>
                  <td>{ eachData.From_Location}</td>
                  <td>{ eachData.To_Location}</td>
                  <td>{ eachData.Total_Cost}</td>
                  <td>{ eachData.Total_Quantity}</td>
                  <td>{ eachData.Transport_Company}</td>            
                  <td>{ eachData.Transport_Name}</td>
                  <td>{ eachData.selectedDate}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn-danger"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.selectedOption,
                            eachData.From_Location,
                            eachData.To_Location,
                            eachData.Total_Cost,
                            eachData.Total_Quantity,
                            eachData.Transport_Company,
                            eachData.Transport_Name,
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