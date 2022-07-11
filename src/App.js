import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (

   
    <>
     
    
      <div
        style={{
          backgroundColor: "lightgray",
          // margin: "20px",
          padding: "20px",
          display: "flex",
          gap: "10px",
        }}
      >
        <NavLink
          to={"login"}
          style={({ isActive }) => ({
            color: isActive ? "red" : "black",
          })}
        >
          Login
        </NavLink>
        <NavLink
          to={"signup"}
          style={({ isActive }) => ({
            color: isActive ? "red" : "black",
          })}
        >
          SignUp
        </NavLink>
      </div>
      <Outlet />
    
      
    </>
  );
}

export default App;
