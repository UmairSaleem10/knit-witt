import { Outlet, Route, Routes } from "react-router-dom";
import Sidebar from "../sidebar/SSidebar";
import EmployeeForm from "../Forms/EmployeeForm";
import Blank from "../../Pages/Blank";
import CustomerForm from "../Forms/CustomerForm";

const EmpForm = () => {
    return <div style={{
        padding: '0px 0px 0px 0px'
        
    }}>
    <EmployeeForm/>
    </div>;
};
const CustForm = () => {
    return <div style={{
        padding: '0px 0px 0px 0px'
        
    }}>
    <EmployeeForm/>
    </div>;
};
export {EmpForm, CustForm};