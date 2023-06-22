import React, { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from "../context/AppContext";

const PaginationTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const {admitcardresult } = useContext(AppContext);
  const data=[...admitcardresult];
  const itemsPerPage=5;

  
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
      {/* Add search input */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search by name"
      />

      <table>
        {/* Render table headers */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {/* Render table rows */}
          {currentItems.map((item) => (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>{item.link}</td>
              {/* Add more table cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Render pagination buttons */}
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

export default PaginationTable;
