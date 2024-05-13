import React from 'react';
import './App.css';
import klijentiData from './klijentiData';

function Klijenti() {
  return (
    <div className="container">
      <h1>Users</h1>
      <table className="table">
        <thead>
          <tr className='table tr'>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {klijentiData.map((klijent, index) => (
            <tr key={index}>
              <td>{klijent.name}</td>
              <td>{klijent.email}</td>
              <td>{klijent.company}</td>
              <td>{klijent.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Klijenti;
