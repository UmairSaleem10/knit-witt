import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Select from 'react-select';
import DatePicker from "react-datepicker";



const Create = () => {

  const [selectedOption, setSelectedOption] = useState("");
  const [ From_Location, setFrom_Location] = useState("");
  const [ To_Location, setTo_Location] = useState("");
  const [ Total_Cost, setTotal_Cost] = useState("");
  const [ Total_Quantity, setTotal_Quantity] = useState("");
  const [ Transport_Company, setTransport_Company] = useState("");
  const [ Transport_Name, setTransport_Name] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const options = [];

  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clciekd");
    axios
      .post("https://643f7cdd3dee5b763e1dc55e.mockapi.io/crud", {
         
        selectedOption : selectedOption,
        From_Location : From_Location,
        To_Location : To_Location,
        Total_Cost : Total_Cost ,
        Total_Quantity : Total_Quantity ,
        Transport_Company : Transport_Company ,
        Transport_Name : Transport_Name,
        selectedDate : selectedDate,


      })
      .then(() => {
        history("/read");
      });
  };
  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <h2>Create Courier_Service Information</h2>
        <br/>
        <br/>
        <Link to="/read">
          <button className="btn btn-primary">Show Courier_Service Data</button>
        </Link>
      </div>
      <br/>
      <br/>

      <form>
        <div className="mb-3">
          <td className="form-label"> From_Location  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>
          <td>
          <input style={{ height: '25px', width: '200px' }}
            type="text"
            className="form-control"
            onChange={(e) => setFrom_Location(e.target.value)}
          />
          </td>
          
        </div>
        <br/>
        <br/>

        <div className="mb-3">
          <td className="form-label"> To_Location  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>
          <td>
          <input style={{ height: '25px', width: '200px' }}
            type="text"
            className="form-control"
            onChange={(e) => setTo_Location(e.target.value)}
          />
          </td>
          
        </div>
        <br/>
        <br/>
        
        <div className="mb-3">
          <td className="form-label"> Total_Cost  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>
          <td>
          <input style={{ height: '25px', width: '200px' }}
            type="text"
            className="form-control"
            onChange={(e) => setTotal_Cost(e.target.value)}
          />
          </td>
          
        </div>
        <br/>
        <br/>
        
        <div className="mb-3">
          <td className="form-label"> Total_Quantity  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>
          <td>
          <input style={{ height: '25px', width: '200px' }}
            type="text"
            className="form-control"
            onChange={(e) => setTotal_Quantity(e.target.value)}
          />
          </td>
          
        </div>
        <br/>
        <br/>
        
        <div className="mb-3">
          <td className="form-label"> Transport_Company  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>
          <td>
          <input style={{ height: '25px', width: '200px' }}
            type="text"
            className="form-control"
            onChange={(e) => setTransport_Company(e.target.value)}
          />
          </td>
          
        </div>
        <br/>
        <br/>
        
        <div className="mb-3">
          <td className="form-label"> Transport_Name  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>
          <td>
          <input style={{ height: '25px', width: '200px' }}
            type="text"
            className="form-control"
            onChange={(e) => setTransport_Name(e.target.value)}
          />
          </td>
          
        </div>
        <br/>
        <br/>
        
        <div className="mb-3">
        <td className="form-label">Transport_Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td>      
        <DatePicker style={{ height: '70px', width: '200px' }}
        onChange={(date) => setSelectedDate(date)}
      />
      </td>
        </div>

        <br/>
        <br/>

        <td className="form-label">Machine_id  &nbsp;&nbsp;&nbsp;&nbsp;</td>
       <td>
        <Select  style={{ height: '25px', width: '200px' }}
  value={selectedOption}
  onChange={setSelectedOption}
  options={options}
    />
    </td>

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
