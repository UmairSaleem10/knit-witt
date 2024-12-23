import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";





const Create = () => {
  const [name, setfName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();   
  
    console.log("clciekd");
    axios
      .post("https://643f7cdd3dee5b763e1dc55e.mockapi.io/crud", {
        name: name,
        lastname : lastname,
        email: email,
        gender :gender,
        contact : contact,
        selectedDate : selectedDate,

      })
      .then(() => {
        history("/read");
      });
  };
  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <h2>Create</h2>
        <br/>
        <br/>
        <Link to="/read">
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>
      <br/>
      <br/>

      <form>
        <div className="mb-3">
          <label className="form-label">fName</label>
          <br/>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setfName(e.target.value)}
          />
          <br/>
        </div>

        <div className="mb-3">
          <label className="form-label">lastName</label>
          <br/>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setlastName(e.target.value)}
          />
          <br/>
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <br/>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br/>
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <br/>
          <input
            type="gender"
            className="form-control"
            onChange={(e) => setGender(e.target.value)}
          />
          <br/>
        </div>


        <div className="mb-3">
          <label className="form-label">Contact</label>
          <br/>
          <input
            type="contact"
            className="form-control"
            onChange={(e) => setContact(e.target.value)}
          />
          <br/>
        </div>

      
        <div className="mb-3">
        <label className="form-label">Date Of Birth</label>
                
        <DatePicker
  //selected={selectedDate}
  onChange={(date) => setSelectedDate(date)}
/>
          <br/>
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
