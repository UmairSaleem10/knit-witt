import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from 'react-select';
import DatePicker from "react-datepicker";

//Order_Details
//Customer_Id
//Order_Date
//Order_Id
//Product_Type
//Quantity


const Update = () => {
  const [id, setId] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [Product_Type, setProduct_Type] = useState("");
  const [Quantity ,setQuantity] =useState("");
  const [Price,setPrice] =useState("");
  const [selectedDate,setSelectedDate] =useState("");

  const navigate = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setSelectedOption(localStorage.getItem("selectedOption"));    
    setProduct_Type(localStorage.getItem("Product_Type"));
    setPrice(localStorage.getItem("Price"));
    setQuantity(localStorage.getItem("Quantity"));
    setSelectedDate(localStorage.getItem("selectedDate"));
  }, []);


  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...", id);
    axios
      .put(`https://643f7cdd3dee5b763e1dc55e.mockapi.io/crud/${id}`, {
        selectedOption:selectedOption,  
        Product_Type: Product_Type,
        Price : Price,
        Quantity : Quantity,
        selectedDate : selectedDate,

      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <>
      <h2>Update Order_Details</h2>
      <form>
        <br/>
        <br/>

        
        <div className="mb-3">
          <td className="form-label">Customer_Id  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td>
          <input style={{ height: '25px', width: '200px' }}
            type="text" 
            className="form-control"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          </td>
        </div>

        <br/>
        <br/>
        
        <div className="mb-3">
          <label className="form-label">Product_Type</label>
          <br/>
          <input
            type="text"
            className="form-control"
            value={Product_Type}
            onChange={(e) => setProduct_Type(e.target.value)}
          />
        </div>
     
        <br/>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <br/>
          <input
            type="text"
            className="form-control"
            value={Price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
  
        <br/>
        <br/>
        <div className="mb-3">
          <label className="form-label">Quantity</label>
          <br/>
          <input
            type="text"
            className="form-control"
            value={Quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
  
        <br/>
        <br/>
    

    
        <div className="mb-3">
          <label className="form-label">Order_Date</label>
          <br/>
          <input
            type="text"
            className="form-control"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
  
        <br/>
        <br/>
        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleUpdate}
        >
          Update
        </button>
        <br/>
        <br/>
        <Link to="/read">
          <button className="btn btn-secondary mx-2"> Back </button>
        </Link>
      </form>
    </>
  );
};
export default Update;