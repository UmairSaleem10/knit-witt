import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/SSidebar";
import EmployeeForm from "../Forms/EmployeeForm";
import Blank from "../../Pages/Blank";
import Employee_CRUD from "./EmployeeCRUD";
import Read from "../Customer_company/Read";

//import { EmpForm } from "./FormLayout";

var method;
const href=window.location.href;
if(href==="http://localhost:3000/AppLayout/employees"){
    method = <Employee_CRUD/>;
}
else {
    method=<Blank/>;
}
const AppLayout = () => {
    return <div style={{
        padding: '50px 0px 0px 370px'
    }}>
        <Sidebar />
        <Employee_CRUD/>
    </div>;
};

export default AppLayout;