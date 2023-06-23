import React, { useContext } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";


export const Cardsection = () => {
    const { result, setItem, admitcardresult } = useContext(AppContext);
    function clickHadler(_id) {
        setItem(result.find((item) => item._id === _id));
      }
      function clickHadleradmitcard(_id) {
        setItem(admitcardresult.find((item) => item._id === _id));
      }
      console.log(result);
      const newresult = [...result];
      const sortedResult = newresult.sort(
        (a, b) =>
          new Date(b.startDate.split("-").reverse().join("-")) -
          new Date(a.startDate.split("-").reverse().join("-"))
      );


      
      const [searchQuery, setSearchQuery] = useState("");
      const handleSearch = (event) => {
        setSearchQuery(event.target.value);
      };
      const filteredResults = sortedResult.slice(0,5).filter((ele) =>
        ele.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
      // second admit card search field
      const [searchQuery2, setSearchQuery2] = useState("");
      const handleSearch2 = (event) => {
        setSearchQuery2(event.target.value);
      };
      const filteredResults2 = admitcardresult.slice(0,6).filter((ele) =>
        ele.title.toLowerCase().includes(searchQuery2.toLowerCase())
      );

  return (
    <div className="maincardcontainer">
          <div class="card">
            <div class="card-content">
              <h3 class="sticky-header">Result</h3>
              {/* <input
              className="input-field"
                type="text"
                placeholder="Search jobs"
                onChange={handleSearch}
              /> */}
              <ul>
                {filteredResults.map((ele) => (
                  <li key={ele.id} onClick={() => clickHadler(ele._id)} >
                    
                    <NavLink 
                      to="/table"
                      style={{ color: "black", textDecoration: "none"}}
                    >
                      <span className="onhover">{ele.title}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h3 class="sticky-header">Admit Card</h3>
              {/* <input
              className="input-field"
                type="text"
                placeholder="Search Admit Card"
                onChange={handleSearch2}
              /> */}
              <ul>
                {filteredResults2.map((ele) => (
                  <li
                    key={ele._id}
                    onClick={() => clickHadleradmitcard(ele._id)}
                    // style={{ paddingLeft: "10px", borderLeft: "2px solid black" }}
                  >
                    <NavLink
                      to="/Admitcardtable"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      <span className="onhover">{ele.title}</span>
                      
                    </NavLink>
                  </li>
                  
                ))}
              </ul>
            </div>
          </div>

          <div class="card">
            <div class="card-content ticker-container">
              <h3 class="sticky-header">Latest Job</h3>
              {/* <input
              className="input-field"
                type="text"
                placeholder="Search jobs"
                onChange={handleSearch}
              /> */}
              <ul>
                {filteredResults.map((ele) => (
                  <li key={ele.id} onClick={() => clickHadler(ele._id)} >
                    
                    <NavLink 
                      to="/table"
                      style={{ color: "black", textDecoration: "none"}}
                    >
                      <div className="onhover testelement">{ele.title}</div>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
  )
}
