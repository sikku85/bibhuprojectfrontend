import React, { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../context/AppContext";
import { NavLink } from "react-router-dom";


export const AdmitcardHomeTable = () => {
    const { admitcardresult } = useContext(AppContext);
    const mapingdata = [...admitcardresult];
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
      };
      const filteredResults = mapingdata.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <div>
      <input
        className="searchPost  input-field"
        type="text"
        placeholder="Search Post"
        value={searchQuery}
        onChange={handleSearch}
      />
      <div className="scrool">
        <table className="rounded-table">
          <thead>
            <tr>
              <th
                style={{ backgroundColor: "#3B82FC", borderRadius: "5px" }}
                class="sticky-header"
              >
                Post Name
              </th>
            
              <th
                style={{ backgroundColor: "#3B82FC", borderRadius: "5px" }}
                class="sticky-header"
              >
                Download Now
              </th>
            </tr>
          </thead>
          <tbody className="tablecontainer">
            {filteredResults.map((item, index) => (
              <tr key={index}>
                <td key={item._id} >
                  {/* <NavLink to="/table" className="no-underline" > */}
                    <span className="onhover" >{item.title}</span>
                  {/* </NavLink> */}
                </td>

                {/* <td>{item.title}</td> */}
                <td>
                  <button data-label="Register" class="rainbow-hover">
                    <span class="sp">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download Now
                      </a>
                    </span>
                  </button>
                  {/* <a className="register" href={item.apply} target="_blank" rel="noopener noreferrer">
                    Click Now
                  </a> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
