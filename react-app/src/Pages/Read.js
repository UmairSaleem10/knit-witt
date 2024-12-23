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
  const setToLocalStorage = (id,name,lastname,email,contact,gender,selectedDate) => {
    localStorage.setItem("id", id);
    localStorage.setItem("fname", name);
    localStorage.setItem("email", email);
    localStorage.setItem("lastname",lastname);
    localStorage.setItem("gender",gender);
    localStorage.setItem("contact",contact);
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
        <h2>Read Operation</h2>
        <Link to="/">
          <button className="btn btn-secondary">Create</button>
        </Link>
      </div>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
            <th scope="col">Gender</th>
            <th scope="col">Date Of Birth </th>
            <th scope="col"> </th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{ eachData.name}</td>
                  <td>{eachData.lastname}</td>
                  <td>{eachData.email}</td>
                  <td>{eachData.contact}</td>
                  <td>{eachData.gender}</td>
                  <td>{ eachData.selectedDate}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn-danger"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.lastname,
                            eachData.email,
                            eachData.contact,
                            eachData.gender,
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