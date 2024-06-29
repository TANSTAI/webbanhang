import React from 'react'
import logo from '../../assets/images/Logo-02 .png'
import { Link } from 'react-router-dom';
import { BsFillCaretDownFill,BsFacebook } from "react-icons/bs";

import { AiFillAndroid, AiFillAliwangwang } from "react-icons/ai";

const Header = () => {
    return (



        <header class="header-area header-sticky">
            <div class="container">
            <nav class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
              <div class="container text-light">
                  <div class="w-100 d-flex justify-content-between">
                <div>
                    <i class="fa fa-envelope mx-2"></i>
                    <a class="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">sneaker@gmail.com</a>
                    <i class="fa fa-phone mx-2"></i>
                    <a class="navbar-sm-brand text-light text-decoration-none" href="tel:010-020-0340">0123-020-0902</a>
                </div>
                <div>
                <button  type="button" class="btn btn-info"><a><BsFacebook/></a></button>
                <button  type="button" class="btn btn-info"><Link to = "/loginpage">Login</Link></button>
                </div>
            </div>
        </div>
             </nav>
                <div class="row">
                    <div class="col-12">
                        <nav class="main-nav">
                            {/* <!-- ***** Logo Start ***** --> */}
                            <Link to="/">

                                <img src={logo} />

                            </Link>
                            {/* <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** --> */}
                            <ul class="nav">
                                <li class="scroll-to-section "><Link to="/" class="active">Trang chủ</Link></li>
                                <li class="scroll-to-section"><a href="#men">Top Sale</a></li>
                                <li class="scroll-to-section"><a href="#women">Hàng mới nhập</a></li>
                                
                                <li class="submenu">
                                    <a href="javascript:;">Trang<BsFillCaretDownFill /></a>
                                    <ul>
                                        <li> <Link to="/about">About</Link></li>
                                        <li><Link to="/product">Product</Link></li>
                                        <li><Link to="/mota">Mô tả</Link></li>
                                        <li><Link to="/lienhe">Liên hệ</Link></li>
                                    </ul>
                                </li>
                               
                                <li class="scroll-to-section"><a href="#explore">Khám phá</a></li>
                                
                            </ul>
                            <a class='menu-trigger'>
                                <span>Menu</span>
                            </a>
                            {/* <!-- ***** Menu End ***** --> */}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header