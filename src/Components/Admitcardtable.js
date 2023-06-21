import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { AppContext } from '../context/AppContext';
import { NavLink } from 'react-router-dom';
import "./admitcardtable.css"
export const Admitcardtable = () => {
    const {item}=useContext(AppContext);
  const navigate=useNavigate();
  function backbutton(){
    navigate(-1);
  }
  return (
    <div>

        <div className="admitcardcontainer">
        
        <div className='aditem'>Title: {item.title}</div>
        <div className='aditem'><a className='link' href={item.link} target='_blank'>Download</a></div>
        <button onClick={backbutton}>Back</button>
        </div>
        
    </div>
    )
}
