import React from "react";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  const logoutBtn = e => {
    e.preventDefault()
    navigate('/login')
   
  }

  return (
    <div className="App">
    <h1>User Details</h1>
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Contact</th>
        <th>Country</th>
        <th>State</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>{localStorage.getItem('name')}</td>
          <td>{localStorage.getItem('email')}</td>
          <td>{localStorage.getItem('contact')}</td>
          <td>{localStorage.getItem('country')}</td>
          <td>{localStorage.getItem('state')}</td>
        </tr>
        </tbody>
    </table>
    <button onClick={logoutBtn}>Logout</button>
  </div>
  );
}

export default Home;
