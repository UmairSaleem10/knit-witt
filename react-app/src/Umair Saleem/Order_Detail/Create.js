import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Select from 'react-select';
import DatePicker from "react-datepicker";



const Create = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [ Product_Type, setProduct_Type] = useState("");
  const [ Quantity, setQuantity] = useState("");
  const [ Price, setPrice] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const options = [];


  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clciekd");
    axios
      .post("https://643f7cdd3dee5b763e1dc55e.mockapi.io/crud", {
         
        selectedOption : selectedOption,
        Product_Type : Product_Type,
        Quantity : Quantity ,
        Price : Price ,
        selectedDate : selectedDate,
      })
      .then(() => {
        history("/read");
      });
  };
  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <h2>Create Order_Details </h2>
        <br/>
        <br/>
        <Link to="/read">
          <button className="btn btn-primary">Show Order_Details Data</button>
        </Link>
      </div>
      <br/>
      <br/>

      <form>

      <td className="form-label">Customer_Id &nbsp;&nbsp;&nbsp;&nbsp;</td>
       <td>
        <Select  style={{ height: '25px', width: '200px' }}
  value={selectedOption}
  onChange={setSelectedOption}
  options={options}
    />
    </td>
        <div className="mb-3">
          <td className="form-label">  Product_Type  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>
          <td>
          <input style={{ height: '25px', width: '200px' }}
            type="text"
            className="form-control"
            onChange={(e) => setProduct_Type(e.target.value)}
          />
          </td>
          
        </div>

        <br/>
        <br/>
        
 
       
        <div className="mb-3">
          <td className="form-label"> Quantity  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>
          <td>
          <input style={{ height: '25px', width: '200px' }}
            type="text"
            className="form-control"
            onChange={(e) => setQuantity(e.target.value)}
          />
          </td>
          
        </div>
        <br/>
        <br/>
        
        <div className="mb-3">
          <td className="form-label"> Price  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>
          <td>
          <input style={{ height: '25px', width: '200px' }}
            type="text"
            className="form-control"
            onChange={(e) => setPrice(e.target.value)}
          />
          </td>
          
        </div>
        <br/>
        <br/>


        <div className="mb-3">
        <td className="form-label">Order_Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
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
