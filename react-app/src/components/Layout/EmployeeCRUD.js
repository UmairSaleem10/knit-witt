import React, {useState, useEffect, Fragment} from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap-5.0.2-dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import axios from 'axios'
import 'react-toastify'

const Employee_CRUD=()=>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const personData=[
        {
        person_Id: 1,
        first_Name:'Syed',
        last_Name:'Fraz',
        email:'frazpk15@gmail.com',
        contact:'03316666033',
        dob:'2003-03-22',
        gender:true,
        cnic:'35201-3825806-1'
        }
    ]
    
    const[first_Name, setFirstName]=useState('');
    const[last_Name, setLastName]=useState('');
    const[email, setEmail]=useState('');
    const[contact, setContact]=useState('');
    const[dob, setDOB]=useState('');
    const[gender, setGender]=useState('');
    const[cnic, setCNIC]=useState('');

    const[editFirst_Name, setEditFirstName]=useState('');
    const[editLast_Name, setEditLastName]=useState('');
    const[editEmail, setEditEmail]=useState('');
    const[editContact, setEditContact]=useState('');
    const[editDOB, setEditDOB]=useState('');
    const[editGender, setEditGender]=useState('');
    const[editCNIC, setEditCNIC]=useState('');


    const [data, setData]=useState([]);
    //const [data, getData]=useState([]);

    
    useEffect(()=>{
        getData();
    },[])
    
    const getData=()=>{
        axios.get("http://localhost:5234/api/Employee")
        .then((result)=>{
            setData(result.data)
            console.log(result.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    const handleDelete=(Person_Id)=>{
        if(window.confirm("Are you sure you want to delete this employee")==true){
            alert(Person_Id);
        }
    }
    const handleEdit=(Person_Id)=>{
        handleShow();
    }
    const handleSave=()=>{
        const url='http://localhost:5234/api/Employee';
        const data={
            "first_Name":first_Name,
            "last_Name":last_Name,
            "email":email,
            "gender":gender,
            "contact":contact,
            "dob":dob,
            "cnic":cnic
        }

        axios.post(url, data)
        .then((result)=>{
            getData();
            clear();
        })
    }

    const clear=()=>{
        setFirstName('');
        setLastName('');
        setEmail('');
        setGender(true);
        setContact('');
        setDOB('');
        setCNIC('');
        setEditFirstName('');
        setEditLastName('');
        setEditEmail('');
        setEditGender(true);
        setEditContact('');
        setEditDOB('');
        setCNIC('');
    }
    return (
        <Fragment>
            <Container>
                 <Row>
        <Col xs={6}>
            <input type="text" className="form-control" placeholder="Enter First Name " value={first_Name} onChange={(e)=> setFirstName(e.target.value)}/>
        </Col>
        <Col xs={6}>
            <input type="text" className="form-control" placeholder="Enter Last Name " value={last_Name} onChange={(e)=> setLastName(e.target.value)}/>
        </Col>
    </Row>
        <br></br>
    <Row>
        <Col xs={6}>
            <input type="text" className="form-control" placeholder="Enter Email Address " value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </Col>
        <Col xs={6}>
            <input type="text" className="form-control" placeholder="Enter Contact " value={contact} onChange={(e)=> setContact(e.target.value)}/>
        </Col>
    </Row>    
        <br></br>
    <Row>
        <Col xs={6}>
            <input type="date" className="form-control" placeholder="Enter DOB " value={dob} onChange={(e)=> setDOB(e.target.value)}/>
        </Col>
        <br></br>
        <Col md='auto'>
            <input type="radio" value={gender === 1 ? true : false} onChange={(e)=> setGender(e.target.value)}/>
            <label>Male</label>
        </Col>
        <Col>
            <input type="radio" value={gender === 0 ? true : false} onChange={(e)=> setGender(e.target.value)}/>
            <label>Female</label>
        </Col>
    </Row>
        <br></br>
    <Row>
        <Col xs={6}>
            <input type="text" className="form-control" placeholder="Enter CNIC " value={cnic} onChange={(e)=> setCNIC(e.target.value)}/>
        </Col>
    <Row/>
        <br></br>
    <Row></Row>
        <Col>
            <button className="btn btn-primary" onClick={()=>handleSave()}>Add Employee</button>
        </Col>
      </Row>
    </Container>
<br></br>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Person_Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Contact</th>
                <th>DOB</th>
                <th>CNIC</th>
                </tr>
            </thead>
            <tbody>

                
                {
                    data && data.length > 0 ?
                        data.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.person_Id}</td>
                                    <td>{item.first_Name}</td>
                                    <td>{item.last_Name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.gender}.ToString()</td>
                                    <td>{item.contact}</td>
                                    <td>{item.dob}</td>
                                    <td>{item.cnic}</td>
                                    <td colSpan={2}>
                                        <button className="btn btn-primary" onClick={()=> handleEdit(item.Person_Id)}>Edit</button> &nbsp;
                                        <button className="btn btn-danger" onClick={()=> handleDelete(item.Person_Id)}>Delete</button> &nbsp;

                                    </td>
                                </tr>
                            ) 
                    }):
                    'Loading....'
                    


                }
                
                
            </tbody>
            </Table>

    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Row>
        <Col xs={6}>
            <input type="text" className="form-control" placeholder="Enter First Name " value={editFirst_Name} onChange={(e)=> setEditFirstName(e.target.value)}/>
        </Col>
        <Col xs={6}>
            <input type="text" className="form-control" placeholder="Enter Last Name " value={editLast_Name} onChange={(e)=> setEditLastName(e.target.value)}/>
        </Col>
    </Row>
        <br></br>
    <Row>
        <Col xs={6}>
            <input type="text" className="form-control" placeholder="Enter Email Address " value={editDOB} onChange={(e)=> setEditEmail(e.target.value)}/>
        </Col>
        <Col xs={6}>
            <input type="text" className="form-control" placeholder="Enter Contact " value={editContact} onChange={(e)=> setEditContact(e.target.value)}/>
        </Col>
    </Row>    
        <br></br>
    <Row>
        <Col xs={6}>
            <input type="date" className="form-control" placeholder="Enter DOB " value={editDOB} onChange={(e)=> setEditDOB(e.target.value)}/>
        </Col>
        <br></br>
        <Col md='auto'>
            <input type="radio" value={editGender === 1 ? true : false} onChange={(e)=> setEditGender(e.target.value)}/>
            <label>Male</label>
        </Col>
        <Col>
            <input type="radio" value={editGender === 0 ? true : false} onChange={(e)=> setEditGender(e.target.value)}/>
            <label>Female</label>
        </Col>
    </Row>
        <br></br>
    <Row>
        <Col xs={6}>
            <input type="text" className="form-control" placeholder="Enter CNIC " value={editCNIC} onChange={(e)=> setEditCNIC(e.target.value)}/>
        </Col>
    <Row/>
        <br></br>
    <Row></Row>
        <Col>
            <button className="btn btn-primary">Add Employee</button>
        </Col>
      </Row>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    </Fragment>
    )
}

export default Employee_CRUD;