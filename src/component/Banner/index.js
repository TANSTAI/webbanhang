import React from 'react'
import lbanner from '../../assets/images/lbaner01.jpg'
import rbaner1 from '../../assets/images/rbanner01.jpg'
import rbaner2 from '../../assets/images/baner-right-image-02.jpg'
import rbaner3 from '../../assets/images/baner-right-image-03.jpg'
import rbaner4 from '../../assets/images/baner-right-image-04.jpg'
import {Link} from "react-router-dom"
import { BsFillCartCheckFill } from "react-icons/bs";

const Banner = () => {
    return (
        <div class="main-banner" id="top">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="left-content">
                            <div class="thumb">
                                <div class="inner-content">
                                    <h4>WE ARE SNEAKER_SHOP <BsFillCartCheckFill/> </h4>
                                    <span>Your choice &amp;  your style</span>
                                    <Link to="/product">
                                    <div class="main-border-button">
                                     <a>Shop Now!</a>
                                    </div>
                                    </Link>
                                </div>
                                <img src={lbanner} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="right-content">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="right-first-image">
                                        <div class="thumb">
                                            <div class="inner-content">
                                                <h4>About us</h4>
                                                <span>Chúng tôi luôn đồng hành cùng bạn</span>
                                            </div>
                                            <div class="hover-content">
                                                <div class="inner">
                                                    <h4>About us</h4>
                                                    <p>Chúng tôi luôn mang đến các sản phẩm mà bạn mong muốn</p>
                                                     <Link to="/about">
                                                    <div class="main-border-button">
                                                        <a href="#">Khám phá ngay !?</a>
                                                    </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <img src={rbaner3} />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="right-first-image">
                                        <div class="thumb">
                                            <div class="inner-content">
                                                <h4>Products</h4>
                                                <span>Bản lĩnh quý ông !</span>
                                            </div>
                                            <div class="hover-content">
                                                <div class="inner">
                                                    <h4>Giày & dép</h4>
                                                    <p>Sản phẩm chất lượng & .. </p>
                                                    <Link to="/product">
                                                    <div class="main-border-button">
                                                        <a href="#">Khám phá ngay !?</a>
                                                    </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <img src={rbaner2} />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="right-first-image">
                                        <div class="thumb">
                                            <div class="inner-content">
                                                <h4>Thương hiệu</h4>
                                                <span>Thương Hiệu vàng ?</span>
                                            </div>
                                            <div class="hover-content">
                                                <div class="inner">
                                                    <h4>Thương hiệu</h4>
                                                    <p>Sản phẩm từ các nhà nông nổi tiếng, kể cả nước ngoài</p>
                                                    <Link to="/brand">
                                                    <div class="main-border-button">
                                                        <a href="#">Khám phá ngay !?</a>
                                                    </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <img src={rbaner1} />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="right-first-image">
                                        <div class="thumb">
                                            <div class="inner-content">
                                                <h4>Nhà sáng lập</h4>
                                                <span>Doanh nhân trẻ thành đạt</span>
                                            </div>
                                            <div class="hover-content">
                                                <div class="inner">
                                                    <h4>Nhà sáng lập</h4>
                                                    <p>Trái tim chúng tôi luôn hướng đến khách hàng</p>
                                                    <Link to="/About">
                                                    <div class="main-border-button">
                                                        <a href="#">Khám phá ngay !?</a>
                                                    </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <img src={rbaner4} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner