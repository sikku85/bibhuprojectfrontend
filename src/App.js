import logo from "./logo.svg";
import "./App.css";
// import { result } from './data';
import { Route, Routes } from "react-router-dom";
import { Table } from "./Components/Table";
import { useContext, useEffect, useState } from "react";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { AppContext } from "./context/AppContext";
import { Spinner } from "./Components/Spinner";
import { Eligible } from "./Components/Eligible";
import { Admin } from "./Components/Admin";
import { Admitcardtable } from "./Components/Admitcardtable";

function App() {
  const {fetchdata,loading}=useContext(AppContext);
  
  useEffect(() => {
    fetchdata();
  }, []);

  // ok
  return (
    <div className="App">

      <Navbar></Navbar>
      {/* <Spinner></Spinner> */}
      <Routes>
        <Route
          path="/"
          element={ 
          loading?(<Spinner></Spinner>):(<Home></Home>)
        
        }
        ></Route>
        <Route path="/table" element={<Table></Table>}></Route>
        <Route path="/eligible" element={<Eligible></Eligible>}></Route>
        <Route path="/admin" element={<Admin></Admin>}></Route>
        <Route path="/Admitcardtable" element={<Admitcardtable></Admitcardtable>}></Route>
        


      </Routes>
    </div>
  );
}

export default App;
