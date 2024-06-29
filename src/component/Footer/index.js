import React from 'react'
import whitelogo from '../../assets/images/Logo-02 .png'

const Footer = () => {
    return (
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="first-item">
                            <div class="logo">
                                <img src={whitelogo} alt="hexashop ecommerce templatemo" />
                            </div>
                            <ul>
                                <li><a href="#">772 Đào trí, Quận 7, TP HCM</a></li>
                                <li><a href="#">sneaker_shop@gmail@company.com</a></li>
                                <li><a href="#">0123005001</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <h4>Shopping &amp; Categories</h4>
                        <ul>
                            <li><a href="#">Top sales</a></li>
                            <li><a href="#">Hàng mơi nhập</a></li>
                            
                        </ul>
                    </div>
                    <div class="col-lg-3">
                        <h4>các trang</h4>
                        <ul>
                            <li><a href="#">Trang chủ</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3">
                        <h4>Help &amp; Information</h4>
                        <ul>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">FAQ's</a></li>
                            <li><a href="#">Shipping</a></li>
                            <li><a href="#">Tracking ID</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-12">
                        <div class="under-footer">
                            <p>Copyright © 2022 HexaShop Co., Ltd. All Rights Reserved.

                                <br />Design: <a href="https://templatemo.com" target="_parent" title="free css templates">Tan Tai</a></p>
                            <ul>
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i class="fa fa-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer