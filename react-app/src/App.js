import './App.scss';
//import Sidebar from './components/sidebar/SSidebar';
// import { store } from "./actions/store";
// import { Provider } from 'react-redux';
// import DCustomer from './components/DCustomer';
//import DCustomerForm from "./components/DCustomerForm";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/Layout/AppLayout';
import Blank from './Pages/Blank';
import 'boxicons/css/boxicons.min.css';
import SignInSide from './components/SignIn';
import SignUp from './components/SignUp';
import EmployeeForm from './components/Forms/EmployeeForm';

function App() {
  return (
      <BrowserRouter>
          <Routes>
                <Route path='/' element={<SignInSide />} />
                <Route path='/SignUp' element={<SignUp/>}/>
                <Route path='/AppLayout' element={<AppLayout />}>
                    <Route path='/AppLayout/employees' element={<AppLayout />} />
                    <Route path='/AppLayout/orders' element={<Blank />} />
                    <Route path='/AppLayout/employeeRoles' element={<Blank />} />
                    <Route path='/AppLayout/warehouse' element={<Blank />} />
                    <Route path='/AppLayout/inventory' element={<Blank />} />
                    <Route path='/AppLayout/courier' element={<Blank />} />
                    <Route path='/AppLayout/rawMaterial' element={<Blank />} />
                    <Route path='/AppLayout/product' element={<Blank />} />
                    <Route path='/AppLayout/empRoles' element={<Blank />} />
                </Route>
               
          </Routes> 
      </BrowserRouter>
  );
}

export default App;
