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

  const setToLocalStorage = (id,selectedOption,Product_Type,Price,Quantity,selectedDate) => {
    localStorage.setItem("id", id);
    localStorage.setItem("selectedOption",selectedOption);
    localStorage.setItem("Product_Type", Product_Type);
    localStorage.setItem("Price", Price);
    localStorage.setItem("Quantity", Quantity);
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
        <h2>Read Order_Details Data</h2>
        <Link to="/update">
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
            <th scope="col">Product_Type  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th scope="col">Price  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th scope="col">Quantity  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th scope="col">Order_Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
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
                  <td>{ eachData.Product_Type}</td>
                  <td>{ eachData.Price}</td>
                  <td>{ eachData.Quantity}</td>
                  <td>{ eachData.selectedDate}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn-danger"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.selectedOption,
                            eachData.Product_Type,
                            eachData.Price,
                            eachData.Quantity,
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