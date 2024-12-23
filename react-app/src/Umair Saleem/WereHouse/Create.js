import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Select from 'react-select';




const Create = () => {
  const [Warehouse_Location, setWarehouse_Location] = useState("");
  const [ Warehouse_Name, setWarehouse_Name] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const options = [
  ];

  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clciekd");
    axios
      .post("https://643f7cdd3dee5b763e1dc55e.mockapi.io/crud", {
        Warehouse_Location: Warehouse_Location,
        Warehouse_Name :  Warehouse_Name,
        selectedOption :selectedOption,

      })
      .then(() => {
        history("/read");
      });
  };
  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <h2>Create Warehouse</h2>
        <br/>
        <br/>
        <Link to="/read">
          <button className="btn btn-primary">Show Warehouse Data</button>
        </Link>
      </div>
      <br/>
      <br/>

      <form>
        <div className="mb-3">
          <td className="form-label">Warehouse_Location  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>
          <td>
          <input style={{ height: '25px', width: '200px' }}
            type="text"
            className="form-control"
            onChange={(e) => setWarehouse_Location(e.target.value)}
          />
          </td>
        </div>
        <br/>
        <br/>
        <div className="mb-3">
          <td className="form-label"> Warehouse_Name  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>
          <td>
          <input style={{ height: '25px', width: '200px' }}
            type="text"
            className="form-control"
            onChange={(e) => setWarehouse_Name(e.target.value)}
          />
          </td>
          <br/>
          <br/>
        </div>
      

        <td className="form-label">Manager_id  &nbsp;&nbsp;&nbsp;&nbsp;</td>
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
