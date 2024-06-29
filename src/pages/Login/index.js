import React, { useState } from 'react';
import Swal from 'sweetalert2';
import {Link} from "react-router-dom"
import "../../assets/css/css_ad.css";
const Login = ({ setIsAuthenticated }) => {
  const adminEmail = 'admin@gmail.com';
  const adminPassword = 'admin';

  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('admin');

  const handleLogin = e => {
    e.preventDefault();

    if (email === adminEmail && password === adminPassword) {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          localStorage.setItem('is_authenticated', true);
          setIsAuthenticated(true);

          Swal.fire({
            icon: 'success',
            title: 'Successfully logged in!',
            showConfirmButton: false,
            timer: 1500,
          });
        },
      });
    } else {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Incorrect email or password.',
            showConfirmButton: true,
          });
        },
      });
    }
  };

  return (
    
    <div className="small-container">
   
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="admin@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="qwerty"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        
       <input style={{ marginTop: '12px' }} type="submit" value="Login" ></input>
       <span class="in_reg"><Link to="/register">Register ?</Link></span>
       <span class ="return"><Link to = "/">Return to Home</Link></span>
      </form>
    </div>
    
  );
};

export default Login;
