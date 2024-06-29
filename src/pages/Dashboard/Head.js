import React from 'react';

import Logout from '../Logout';
import Logo from "../../assets/images/Logo-02 .png"
import {Link} from "react-router-dom"
const Head = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header>
<div class="row g-0 text-center">
  <div class="col-sm-6 col-md-8 pt-5 ">    <h1>Quản lý Nhân viên</h1></div>
  <div class="col-6 col-md-4"><Link to="/"> <img src ={Logo} alt=""/></Link></div>
</div>
  
      
     
      <div style={{ marginTop: '30px', marginBottom: '18px' }}>
        <button onClick={() => setIsAdding(true)}>Add</button>
        <Logout setIsAuthenticated={setIsAuthenticated} />
      </div>
      
    </header>
  );
};

export default Head;
