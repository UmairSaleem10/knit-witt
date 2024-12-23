import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Select from 'react-select';
import DatePicker from "react-datepicker";



const Create = () => {

  const [ Machine_Name, setMachine_Name] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clciekd");
    axios
      .post("https://643f7cdd3dee5b763e1dc55e.mockapi.io/crud", {
        
        Machine_Name : Machine_Name,
        selectedDate : selectedDate,

      })
      .then(() => {
        history("/read");
      });
  };
  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <h2>Create Machine Information</h2>
        <br/>
        <br/>
        <Link to="/read">
          <button className="btn btn-primary">Show Machine Data</button>
        </Link>
      </div>
      <br/>
      <br/>

      <form>
        <div className="mb-3">
          <td className="form-label"> Machine_Name  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>
          <td>
          <input style={{ height: '25px', width: '200px' }}
            type="text"
            className="form-control"
            onChange={(e) => setMachine_Name(e.target.value)}
          />
          </td>
          <br/>
          <br/>
        </div>

        <div className="mb-3">
        <td className="form-label">Restock_Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td>      
        <DatePicker style={{ height: '70px', width: '200px' }}
        onChange={(date) => setSelectedDate(date)}
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
