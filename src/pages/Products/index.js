import React from 'react'

import logo from '../../assets/images/Logo-02 .png'
import { Link } from 'react-router-dom';
import { BsFillCaretDownFill,BsFacebook } from "react-icons/bs";


import Footer from '../../component/Footer';


import men04 from '../../assets/images/top-sale04.jpg'
import men05 from '../../assets/images/top-sale05.jpg'

import men07 from '../../assets/images/top-sale07.jpg'
import men08 from '../../assets/images/top-sale08.jpg'
import pro01 from '../../assets/images/pro01.jpg'
import pro02 from '../../assets/images/pro02.jpg'
import pro03 from '../../assets/images/pro03.jpg'
import pro04 from '../../assets/images/pro04.jpg'
import pro05 from '../../assets/images/pro05.jpg'

import women02 from '../../assets/images/top-sale09.jpg'
import women03 from '../../assets/images/top-new01.jpg'


const Product = () => {
    return (
        <>
           
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
                                <li class="scroll-to-section "><Link to="/" >Trang chủ</Link></li>
                                <li class="scroll-to-section"><a href="/">Top Sale</a></li>
                                <li class="scroll-to-section"><a href="/">Hàng mới nhập</a></li>
                                
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



            <div class="page-heading" id="top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="inner-content">
                                <h2>Cửa hàng_shop</h2>
                                <span>Mới &amp; đa dạng</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="section" id="products">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-heading">
                                <h2>Cửa hàng</h2>
                                <span>Toàn bộ sản phẩm của chúng tôi !</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="item">
                                <div class="thumb">
                                    <div class="hover-content">
                                        <ul>
                                            
                                            <li><Link to="/mota"><i class="fa fa-eye"></i></Link></li>
                                            <li><Link to="/mota"><i class="fa fa-star"></i></Link></li>
                                            <li><Link to="/mota"><i class="fa fa-shopping-cart"></i></Link></li>
                                            
                                        </ul>
                                    </div>
                                    <img src={men04} alt="" />
                                </div>
                                <div class="down-content">
                                    <h4>Classic Spring</h4>
                                    <span>$120.00</span>
                                    <ul class="stars">
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="item">
                                <div class="thumb">
                                    <div class="hover-content">
                                        <ul>
                                            <li><Link to="/mota/2"><i class="fa fa-eye"></i></Link></li>
                                            <li><Link to="/mota/2"><i class="fa fa-star"></i></Link></li>
                                            <li><Link to="/mota/2"><i class="fa fa-shopping-cart"></i></Link></li>
                                        </ul>
                                    </div>
                                    <img src={men05} alt="" />
                                </div>
                                <div class="down-content">
                                    <h4>Air Force 1 X</h4>
                                    <span>$90.00</span>
                                    <ul class="stars">
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="item">
                                <div class="thumb">
                                    <div class="hover-content">
                                         <ul>
                                            <li><Link to="/mota/2"><i class="fa fa-eye"></i></Link></li>
                                            <li><Link to="/mota/2"><i class="fa fa-star"></i></Link></li>
                                            <li><Link to="/mota/2"><i class="fa fa-shopping-cart"></i></Link></li>
                                        </ul>
                                    </div>
                                    <img src={pro01} alt="" />
                                </div>
                                <div class="down-content">
                                    <h4>Love Nana ‘20</h4>
                                    <span>$150.00</span>
                                    <ul class="stars">
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="item">
                                <div class="thumb">
                                    <div class="hover-content">
                                    <ul>
                                            <li><Link to="/mota"><i class="fa fa-eye"></i></Link></li>
                                            <li><Link to="/mota"><i class="fa fa-star"></i></Link></li>
                                            <li><Link to="/mota"><i class="fa fa-shopping-cart"></i></Link></li>
                                        </ul>
                                    </div>
                                    <img src={pro04} alt="" />
                                </div>
                                <div class="down-content">
                                    <h4>New Green Jacket</h4>
                                    <span>$75.00</span>
                                    <ul class="stars">
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="item">
                                <div class="thumb">
                                    <div class="hover-content">
                                        <ul>
                                            <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                            <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                            <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <img src={men07} alt="" />
                                </div>
                                <div class="down-content">
                                    <h4>Classic Dress</h4>
                                    <span>$45.00</span>
                                    <ul class="stars">
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="item">
                                <div class="thumb">
                                    <div class="hover-content">
                                        <ul>
                                            <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                            <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                            <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <img src={men08} alt="" />
                                </div>
                                <div class="down-content">
                                    <h4>Spring Collection</h4>
                                    <span>$130.00</span>
                                    <ul class="stars">
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="item">
                                <div class="thumb">
                                    <div class="hover-content">
                                        <ul>
                                            <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                            <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                            <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <img src={women02} alt="" />
                                </div>
                                <div class="down-content">
                                    <h4>School Collection</h4>
                                    <span>$80.00</span>
                                    <ul class="stars">
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="item">
                                <div class="thumb">
                                    <div class="hover-content">
                                        <ul>
                                            <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                            <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                            <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <img src={women03} alt="" />
                                </div>
                                <div class="down-content">
                                    <h4>Summer Cap</h4>
                                    <span>$12.00</span>
                                    <ul class="stars">
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="item">
                                <div class="thumb">
                                    <div class="hover-content">
                                        <ul>
                                            <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                            <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                            <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <img src={pro02} alt="" />
                                </div>
                                <div class="down-content">
                                    <h4>Classic Kid</h4>
                                    <span>$30.00</span>
                                    <ul class="stars">
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="pagination">
                                <ul>
                                    <li class="active">
                                        <a href="#">1</a>
                                    </li>
                                    <li >
                                        <a href="/product/2">2</a>
                                    </li>
                                    <li>
                                        <a href="#">3</a>
                                    </li>
                                    <li>
                                        <a href="#">4</a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Product