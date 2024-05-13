// App.js

import React, { useState } from 'react';
import './App.css';
import Loader from './Loader';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Klijenti from './10 - 10 has/App';
import Todo from './Boogie Woogie/App';

function App() {
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true); 
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <NavBar fetchData={fetchData} />
      {loading && <Loader />} {}
    </div>
  );
}

const NavBar = ({ fetchData }) => {
  return (
    <Router>
      <div className="navbar">
        <Link to="/users" className="nav-item" id="users" onClick={fetchData}>
          Users
        </Link>
        <Link to="/todo" className="nav-item" id="todos" onClick={fetchData}>
          Todos
        </Link>
        <Link to="/calc" className="nav-item" id="calc" onClick={fetchData}>
          Calculator
        </Link>
      </div>

      <Routes>
        <Route index element={<Klijenti />} />
        <Route path="/calc" element={<Page />} />
        <Route path="/users" element={<Klijenti />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Router>
  );
};

const Page = () => 
  {
  return (
    <div>
      <h1>Calculator</h1>
      <div id="calcBody" style={{ textAlign: 'center' }}>
        <form id="formid">
          <input type="number" id="inputMargin1" className="inputStyle" />
          <p id="error1"></p>
          <br />
          <input type="number" id="inputMargin2" className="inputStyle" />
          <p id="error2"></p>
          <br />
          <input type="button" id="btnStyle" value={'TOTAL'} onClick={calcFun} />
          <p id="result"></p>
        </form>
      </div>
    </div>
  );
};

function calcFun() {
  let val1 = document.getElementById('inputMargin1').value;
  let val2 = document.getElementById('inputMargin2').value;

  let num1 = parseInt(val1);
  let num2 = parseInt(val2);

  let num1Valid;
  let num2Valid;

  if (!isNaN(num1)) {
    num1Valid = true;

    document.getElementById('inputMargin1').style.backgroundColor = 'white';
    document.getElementById('inputMargin1').style.borderColor = 'black';
    document.getElementById('error1').textContent = '';
  } else {
    document.getElementById('inputMargin1').style.backgroundColor = 'rgb(255, 190, 190)';
    document.getElementById('inputMargin1').style.borderColor = 'red';
    document.getElementById('error1').textContent = 'Please enter a number';

    document.getElementById('result').textContent = 'Error';
  }

  if (!isNaN(num2)) {
    num2Valid = true;

    document.getElementById('inputMargin2').style.backgroundColor = 'white';
    document.getElementById('inputMargin2').style.borderColor = 'black';
    document.getElementById('error2').textContent = '';
  } else {
    document.getElementById('inputMargin2').style.backgroundColor = 'rgb(255, 190, 190)';
    document.getElementById('inputMargin2').style.borderColor = 'red';
    document.getElementById('error2').textContent = 'Please enter a number';

    document.getElementById('result').textContent = 'Error';
  }

  if (num1Valid && num2Valid) {
    let result = num1 + num2;
    document.getElementById('result').textContent = result;
  }
}

export default App;
