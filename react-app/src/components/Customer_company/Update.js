import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from 'react-select';
import DatePicker from "react-datepicker";


const Update = () => {
  const [id, setId] = useState(0);
  const [Company_Name, setCompany_Name] = useState("");
  const [Contact ,setContact] =useState("");

  const navigate = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));     
    setCompany_Name(localStorage.getItem("Company_Name"));
    setContact(localStorage.getItem("Contact"));

  }, []);


  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...", id);
    axios
      .put(`https://643f7cdd3dee5b763e1dc55e.mockapi.io/crud/${id}`, {
        Company_Name: Company_Name,
        Contact:Contact,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <>
      <h2>Update Customer_Company</h2>
      <form>

        <div className="mb-3">
          <label className="form-label">Company_Name</label>
          <br/>
          <input
            type="text"
            className="form-control"
            value={Company_Name}
            onChange={(e) => setCompany_Name(e.target.value)}
          />
        </div>
     
        <br/>

        <div className="mb-3">
          <label className="form-label">Contact</label>
          <br/>
          <input
            type="text"
            className="form-control"
            value={Contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
     
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