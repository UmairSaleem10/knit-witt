import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Update = () => {
  const [id, setId] = useState(0);
  const [name, setfName] = useState("");
  const [lastName,setlastName] =useState("");
  const [email, setEmail] = useState("");
  const [contact ,setContact] =useState("");
  const [gender,setGender] =useState("");
  const [selectedDate,setSelectedDate] =useState("");

  const navigate = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setfName(localStorage.getItem("name"));
    setlastName(localStorage.getItem("lastname"));            
    setEmail(localStorage.getItem("email"));
    setContact(localStorage.getItem("contact"));
    setGender(localStorage.getItem("gender"));
    setSelectedDate(localStorage.getItem("selectedDate"));
  }, []);


  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...", id);
    axios
      .put(`https://643f7cdd3dee5b763e1dc55e.mockapi.io/crud/${id}`, {
        name: name,
        //lastname : lastname,
        email: email,
        gender :gender,
        contact : contact,
        selectedDate : selectedDate,

      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <>

  
      <h2>Update</h2>
      <form>
        <br/>
        <br/>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <br/>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setfName(e.target.value)}
          />
        </div>

        <br/>
        <br/>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <br/>
          <input
            type="text"
            className="form-control"
           // value={lastname}
            onChange={(e) => setlastName(e.target.value)}
          />
        </div>
  
        <br/>
        <br/>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <br/>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <br/>
        <br/>
        <div className="mb-3">
          <label className="form-label">Contact</label>
          <br/>
          <input
            type="text"
            className="form-control"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
  
        <br/>
        <br/>
    
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <br/>
          <input
            type="text"
            className="form-control"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
  
        <br/>
        <br/>

    
        <div className="mb-3">
          <label className="form-label">Date Of Birth</label>
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