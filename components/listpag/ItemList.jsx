'use client'
import React, { useState } from 'react';
import Item from './Item';
import Pagination from './Pagination';

const ITEMS_PER_PAGE = 5; // Number of items to display per page

const ItemList = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  // Calculate the index range of the items to display on the current page
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Handle changing the current page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset current page when the search query changes
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const currentItems2 = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  return (<>
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <label >Total: {filteredItems.length}</label>
    </div>
    <div className="item-list">
      {/* Render the items for the current page */}
      {currentItems2.map((item, index) => (
        <Item key={index} item={item} />
      ))}

      {/* Render the pagination component */}
      <Pagination
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={items.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  </>
  );
};

export default ItemList;