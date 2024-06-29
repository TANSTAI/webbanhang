import React, { useState } from 'react';
import Swal from 'sweetalert2';
import {Link} from "react-router-dom"
import "../../assets/css/css_ad.css";


const Register = ({ setIsAuthenticated }) => {
    


  return (

       
         
   
    <div className="small-container">
   
      <form>
        <h1>Register</h1>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="admin@example.com"
          
          
        />
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="email"
          name="username"
          placeholder="YourName"
          
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="YourPassword"
          
        />
        
      
       <button class="btn btn-outline-info"><Link to="/login">Login</Link></button>
    
         
      </form>
    </div>
  );
};

export default Register;
