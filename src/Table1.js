import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap/Table';
import data from "./data.json"
import './Table.css';
import { Link } from 'react-router-dom';


const Table1 = ({ data}) => {
 


  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [column, setColumn] = useState('name');

  
  

  
  
  //////
  const handleSearch = (e) => {
    setQuery(e.target.value);
 
  };

  const handleSearc = (e) => {
    setQuery(e.target.value);


  }
  
  const handleColumnChange = (e) => {
    setColumn(e.target.value);
  };

  const handlePageChange = (e) => {
    setCurrentPage(Number(e.target.value));
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
  };
  
  const filteredData = data.filter((item) =>
    item[column].toLowerCase().includes(query.toLowerCase())
  );

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const renderData = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    return filteredData.slice(start, end).map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.phone}</td>
        <td>{item.email}</td>
        <td>{item.address}</td>

      </tr>
    ));
  };

  

  const renderPagination = () => {
    const pageNumbers = [];

    for (let i = 1; i <= pageCount; i++) {
      pageNumbers.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return (
      <div  className='fix'>
        
        <span>Page:</span>
        <select onChange={handlePageChange} value={currentPage}>
          {pageNumbers}
        </select>
        <span>Items per page:</span>
        <select onChange={handleItemsPerPageChange} value={itemsPerPage}>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
      </div>
    );
  };

  return (<div>
      <div className='gs1'>
      <h1>SCREEN1</h1>
      <label for="gs">  Search</label>
      <input type="text" onChange={handleSearc}  name="gs" placeholder="Search" />
      <Link to ="/"><button style={{background:"gray"}}>back</button></Link>

      </div>

      <div>
        
       <br></br>
       <div className='cs1'>
       <label for="cs">  Column Search</label>

        <input type="text" onChange={handleSearch} name ="cs" value={query} placeholder="Search" />
        
        <select onChange={handleColumnChange} value={column}        
>
      
         <option value="id">ID</option>

          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="age">age</option>
          <option value="phone">phone</option>
          <option value="address">address</option>

        </select>
        </div>
      </div>

      <table striped bordered hover varient="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>age</th>
            <th>phone</th>
            <th>Email</th>
            <th>Address</th>

          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </table>

      {renderPagination()}
    </div>
  );
};

export default Table1;
