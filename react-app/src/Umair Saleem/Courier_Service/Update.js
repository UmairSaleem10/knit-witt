import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";




const Update = () => {
  const [id, setId] = useState(0);
  const [Item_Type, setItem_Type] = useState("");
  const [Location,setLocation] =useState("");
  const [Reorder_Point, setReorder_Point] = useState("");
  const [Quantity ,setQuantity] =useState("");
  const [Unit_Cost,setUnit_Cost] =useState("");
  const [selectedDate,setSelectedDate] =useState("");

  const navigate = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setItem_Type(localStorage.getItem("Item_Type"));
    setLocation(localStorage.getItem("Location"));            
    setReorder_Point(localStorage.getItem("Reorder_Point"));
    setQuantity(localStorage.getItem("Quantity"));
    setUnit_Cost(localStorage.getItem("Unit_Cost"));
    setSelectedDate(localStorage.getItem("selectedDate"));
  }, []);


  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...", id);
    axios
      .put(`https://643f7cdd3dee5b763e1dc55e.mockapi.io/crud/${id}`, {
        Item_Type: Item_Type,
        Location : Location,
        Reorder_Point:Reorder_Point,
        Unit_Cost :Unit_Cost,
        Quantity : Quantity,
        selectedDate : selectedDate,

      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <>
      <h2>Update Inventory</h2>
      <form>
        <br/>
        <br/>
        <div className="mb-3">
          <label className="form-label">Item_Type</label>
          <br/>
          <input
            type="text"
            className="form-control"
            value={Item_Type}
            onChange={(e) => setItem_Type(e.target.value)}
          />
        </div>
     
        <br/>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <br/>
          <input
            type="text"
            className="form-control"
            value={Location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
  
        <br/>
        <br/>
        <div className="mb-3">
          <label className="form-label">Reorder_Point</label>
          <br/>
          <input
            type="text"
            className="form-control"
            value={Reorder_Point}
            onChange={(e) => setReorder_Point(e.target.value)}
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
          <label className="form-label">Unit_Cost</label>
          <br/>
          <input
            type="text"
            className="form-control"
            value={Unit_Cost}
            onChange={(e) => setUnit_Cost(e.target.value)}
          />
        </div>
  
        <br/>
        <br/>

    
        <div className="mb-3">
          <label className="form-label">Restock_Date</label>
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