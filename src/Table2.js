import { Link } from "react-router-dom";
import "./Table.css"
import React, { useState } from 'react';
const initialData =[
    { "id": "1", "name": "John Doe", "age": "30", "email": "john.doe@example.com'","phone": "123-456-7890", "address": "123 Main St" },
    { "id": "2", "name": " Smith", "age": "25", "email": "jane@example.com", "phone": "234-567-8901", "address": "456 Elm St" },
    { "id": "3", "name": "Jane ", "age": "23", "email": "jasmith@example.com", "phone": "234-567-8901", "address": "456 Elm St" },
    { "id": "4", "name": "Jmith", "age": "28", "email": "mith@example.com", "phone": "234-567-8901", "address": "456 Elm St" },
    { "id": "5", "name": "Janmith", "age": "21", "email": "janth@example.com", "phone": "234-567-8901", "address": " 456 Elm St" },
    { "id": "6", "name": "anemith", "age": "31", "email": "smith@example.com", "phone": "234-567-8901", "address": "456 Elm St" },
    { "id": "7", "name": "John ", "age": "30", "email": "john.doe@example.com'","phone": "123-456-7890", "address": "123 Main St" },
    { "id": "8", "name": " S", "age": "25", "email": "jane@example.com", "phone": "234-567-8901", "address": "456 Elm St" },
    { "id": "9", "name": "Ja ", "age": "23", "email": "jasmith@example.com", "phone": "234-567-8901", "address": "456 Elm St" },
    { "id": "10", "name": "mith", "age": "28", "email": "mith@example.com", "phone": "234-567-8901", "address": "456 Elm St" },
    { "id": "11", "name": "anmith", "age": "21", "email": "janth@example.com", "phone": "234-567-8901", "address": " 456 Elm St" },
    { "id": "12", "name": "itha", "age": "31", "email": "smith@example.com", "phone": "234-567-8901", "address": "456 Elm St" }
  
  ]

const Table2 = () => {

  const [data, setData] = useState(initialData);
  
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const sortedData = sortColumn
    ? data.sort((a, b) => {
        const valueA = a[sortColumn];
        const valueB = b[sortColumn];
        if (sortDirection === 'asc') {
          return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
        } else {
          return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
        }
      })
    : data;

 

  return (
    <>

    <h2 className="h2">Screen2 Sorting </h2>
    <h4>Click the Heading to see Sorting</h4>
    <div className="re">
    <button   style={{background:"gray"}} onClick={() => window.location.reload()}>Refresh</button>
    
    <Link to ="/"><button style={{background:"gray"}}>back</button></Link>

    </div>

      <table>
        <thead>
          <tr>
          <th onClick={() => handleSort('address')}>
              ID {sortColumn === 'id' && sortDirection === 'asc' && '↑'}
              {sortColumn === 'id' && sortDirection === 'desc' && '↓'}
            </th>
            <th onClick={() => handleSort('name')}>
              Name {sortColumn === 'name' && sortDirection === 'asc' && '↑'}
              {sortColumn === 'name' && sortDirection === 'desc' && '↓'}
            </th>
            <th onClick={() => handleSort('age')}>
              Age {sortColumn === 'age' && sortDirection === 'asc' && '↑'}
              {sortColumn === 'age' && sortDirection === 'desc' && '↓'}
            </th>
            <th onClick={() => handleSort('email')}>
              Email {sortColumn === 'email' && sortDirection === 'asc' && '↑'}
              {sortColumn === 'email' && sortDirection === 'desc' && '↓'}
            </th>
            
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index}>
             <td>{item.id}</td>

              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
  

  
};

export default Table2;
