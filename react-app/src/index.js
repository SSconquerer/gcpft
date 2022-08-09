import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CrudTable from './components/CrudTable'; 
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tabmenu from "./components/tabmenu";
import Navbar from "./components/navbar";
import Login from './components/Login';
import Update from "./components/update";
import Trade_surv from "./components/trade_surv";
import Security_surv from "./components/security_surv";
import "primereact/resources/themes/md-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";  
import  SimpleSecurityTable  from './components/SimpleSecurityTable';
import UpdateSecurityForm from './components/UpdateSecurityForm';
                                  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
          
    <div>
        <div className = "div1" style={{height : "20vh",width : "100%",position : "relative",marginBottom : "0px"}} >
            <div>
              <Navbar />
              <Tabmenu />
            </div>
        </div>
        <div className = "div2" style={{height : "80vh"}}>
                <Routes> 
                    <Route exact path="/update" element={<CrudTable />} /> 
                    <Route exact path="/login" element={<Login />} />  
                    <Route exact path="/home" element = {<SimpleSecurityTable />} /> 
                    <Route path="/trade_surv/:id" element = {<Trade_surv/>} />
                    <Route path="/update/security/:id" element = {<UpdateSecurityForm/>} />
                </Routes>
        </div>
    </div>
 
          {/* <div className="App flex flex-col w-full h-full bg-blue-900 p-3 min-w-max overflow-auto">
            <Navbar />
            <Tabmenu />
            <div className=" bg-white flex-1 min-w-max overflow-auto">
                <Routes> 
                    <Route exact path="/table" element={<Table />} /> 
                    <Route exact path="/login" element={<Login />} />  
                    <Route exact path="/" element = {<App />}>  </Route>
                    <Route path="/trade_surv" element = {<Trade_surv />}> </Route>
                    <Route path="/update" element = {<Update />}> </Route> 
                </Routes>
            </div>
         </div> */}
    </BrowserRouter> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
