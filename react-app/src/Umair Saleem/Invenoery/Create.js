import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";

const Create = () => {
  const [Item_Type, setItem_type] = useState("");
  const [Location, setLocation] = useState("");
  const [Reorder_Point, setReorder_Point] = useState("");
  const [Unit_Cost, setUnit_Cost] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clciekd");
    axios
      .post("https://643f7cdd3dee5b763e1dc55e.mockapi.io/crud", {
        Item_Type: Item_Type,
        Location : Location,
        Reorder_Point: Reorder_Point,
        Unit_Cost :Unit_Cost,
        Quantity : Quantity,
        selectedDate : selectedDate,

      })
      .then(() => {
        history("/read");
      });
  };
  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <h2>Create Inventory</h2>
        <br/>
        <br/>
        <Link to="/read">
          <button className="btn btn-primary">Show Inventory Data</button>
        </Link>
      </div>
      <br/>
      <br/>

      <form>
        <div className="mb-3">
          <td className="form-label">Item_Type  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td>
          <input style={{ height: '25px', width: '200px' }}
            type="text"
            className="form-control"
            onChange={(e) => setItem_type(e.target.value)}
          />
          </td>
          <br/>
        </div>

        <div className="mb-3">
          <td className="form-label">Location &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td>
          <input style={{ height: '25px', width: '200px' }}
            type="text"
            className="form-control"
            onChange={(e) => setLocation(e.target.value)}
          />
          </td>
          <br/>
        </div>
        <div className="mb-3">
          <td className="form-label">Reorder_Point &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td>
          <input style={{ height: '25px', width: '200px' }}
            type="text"
            className="form-control"
            onChange={(e) => setReorder_Point(e.target.value)}
          />
          </td>
          <br/>
        </div>

        <div className="mb-3">
          <td className="form-label">Unit_Cost &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td>
          <input style={{ height: '25px', width: '200px' }}
            type="Unit_Cost"
            className="form-control"
            onChange={(e) => setUnit_Cost(e.target.value)}
          />
          </td>
          <br/>
        </div>


        <div className="mb-3">
          <td className="form-label">Quantity &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td>
          <input style={{ height: '25px', width: '200px' }}
            type="Quantity"
            className="form-control"
            onChange={(e) => setQuantity(e.target.value)}
          />
          </td>
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
