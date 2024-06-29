import React from 'react'

import { Link } from 'react-router-dom';
import { BsFillCaretDownFill } from "react-icons/bs";


import product01 from '../../assets/images/single-product-01.jpg'
import product02 from '../../assets/images/single-product-02.jpg'
import Footer from '../../component/Footer';
import Header from '../../component/Header';

const Mota = () => {
    return (
        <>
          <Header/>
            <div class="page-heading" id="top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="inner-content">
                                <h2>Mô Tả Sản Phẩm</h2>
                                <span>Chi tiết &amp; Chất lượng</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="section" id="product">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="left-images">
                                <img src={product01} />
                                <img src={product02} />
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="right-content">
                                <h4>Sneacker thanh lịch</h4>
                                <span class="price">1.200.000.đ</span>
                                <ul class="stars">
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                </ul>
                                <span>Với màu trắng đen chủ đạo, tuy đơn giản nhưng mang tính thanh lịch. Phù hợp cho cả dân văn phòng, sinh viên, học sinh.</span>
                                <div class="quote">
                                    <i class="fa fa-quote-left"></i><p>Sản phẩm đến từ thương hiệu NightA nổi tiếng</p>
                                </div>
                                <div class="quantity-content">
                                    <div class="left-content">
                                        <h6>Số lượng Orders</h6>
                                    </div>
                                    <div class="right-content">
                                        <div class="quantity buttons_added">
                                            <input type="button" value="-" class="minus" />
                                            <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" />
                                            <input type="button" value="+" class="plus" />
                                        </div>
                                    </div>
                                </div>
                                <div class="total">
                                    <h4>Giá: 1.200.000.đ</h4>
                                    <div class="main-border-button"><a href="#">Add To Cart</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Footer/>
        </>
    )
}

export default Mota