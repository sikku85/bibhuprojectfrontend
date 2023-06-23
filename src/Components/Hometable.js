import React, { useContext } from "react";
import "./Hometable.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AppContext } from "../context/AppContext";
import { Searchsbar } from "./Searchsbar";
export const Hometable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const {admitcardresult,result,setItem } = useContext(AppContext);
  const data=[...result];
  const itemsPerPage=6;


  function clickHadler(_id) {
    setItem(result.find((item) => item._id === _id));
  }
  
  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  // Calculate the index of the last item in the current page
  const lastIndex = currentPage * itemsPerPage;
  // Calculate the index of the first item in the current page
  const firstIndex = lastIndex - itemsPerPage;

  // Filter the data based on the search query
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get the current items to display
  const currentItems = filteredData.slice(firstIndex, lastIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div>
      <input
        className="searchPost  input-field"
        type="text"
        placeholder="Search post"
        value={searchQuery}
        onChange={handleSearchChange}
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
                StartDate
              </th>
              <th
                style={{ backgroundColor: "#3B82FC", borderRadius: "5px" }}
                class="sticky-header"
              >
                LastDate
              </th>
              <th
                style={{ backgroundColor: "#3B82FC", borderRadius: "5px" }}
                class="sticky-header"
              >
                ApplyNow
              </th>
            </tr>
          </thead>
          <tbody className="tablecontainer">
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td key={item._id} onClick={() => clickHadler(item._id)}>
                  <NavLink to="/table" className="no-underline" >
                    <span className="onhover" >{item.title}</span>
                  </NavLink>
                </td>

                {/* <td>{item.title}</td> */}
                <td>{item.startDate}</td>
                <td>{item.lastDate}</td>
                <td>
                  <button data-label="Register" class="rainbow-hover">
                    <span class="sp">
                    <td key={item._id} onClick={() => clickHadler(item._id)}>
                  <NavLink to="/table" className="no-underline" >
                    apply
                  </NavLink>
                </td>

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
          {/* Render pagination buttons */}
    
      </div>
      <div>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              disabled={pageNumber === currentPage}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    </div>
  );
};
