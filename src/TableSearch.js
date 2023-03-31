import React, { useState } from 'react';

const TableSearch = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(item => {
    return (
      item.id.toString().includes(searchTerm) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phone.toString().includes(searchTerm) ||
      item.age.toString().includes(searchTerm) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
      
        
    </div>
  );
};

export default TableSearch;
