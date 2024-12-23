import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Select from 'react-select';
import DatePicker from "react-datepicker";



const Create = () => {
  const [ Company_Name, setCompany_Name] = useState("");
  const [ Contact, setContact] = useState("");

  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clciekd");
    axios
      .post("https://643f7cdd3dee5b763e1dc55e.mockapi.io/crud", {
        Company_Name : Company_Name,
        Contact : Contact ,
      })
      .then(() => {
        history("/read");
      });
  };
  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <h2>Create Customer_Company</h2>
        <br/>
        <br/>
        <Link to="/read">
          <button className="btn btn-primary">Show Customer_Company</button>
        </Link>
      </div>
      <br/>
      <br/>

      <form>

       
        <div className="mb-3">
          <td className="form-label"> Company_Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>
          <td>
          <input style={{ height: '25px', width: '200px' }}
            type="text"
            className="form-control"
            onChange={(e) => setCompany_Name(e.target.value)}
          />
          </td>
          
        </div>
        <br/>
        <br/>

        <div className="mb-3">
          <td className="form-label">Contact &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>
          <td>
          <input style={{ height: '25px', width: '200px' }}
            type="text"
            className="form-control"
            onChange={(e) => setContact(e.target.value)}
          />
          </td>
          
        </div>
        <br/>
        <br/>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};
export default Create;
