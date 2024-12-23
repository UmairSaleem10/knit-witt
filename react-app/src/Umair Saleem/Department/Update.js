import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from 'react-select';




const Update = () => {
  const [id, setId] = useState(0);
  const [Department_Name, Department_Name] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const options = [
  ];

  const navigate = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setDepartment_Name(localStorage.getItem("Department_Name"));
  }, []);


  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...", id);
    axios
      .put(`https://643f7cdd3dee5b763e1dc55e.mockapi.io/crud/${id}`, {
        Department_Name :Department_Name,
        selectedOption : selectedOption,

      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <>
      <h2>Update Department</h2>
      <form>
        <br/>
        <br/>
        <div className="mb-3"> 
          <label className="form-label">Department_Name &nbsp;&nbsp;&nbsp;&nbsp;</label>
          <br/>
          <input style={{ height: '25px', width: '200px' }}
            type="text"
            className="form-control"
            value={Department_Name}
            onChange={(e) => setDepartment_Name(e.target.value)}
          />
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