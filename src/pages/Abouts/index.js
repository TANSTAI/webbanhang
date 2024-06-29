import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-lime.png'
import {  BsFillCaretDownFill } from "react-icons/bs";


import aboutl from '../../assets/images/about-left-image.jpg'

import team1 from '../../assets/images/team-member-01.jpg'
import team2 from '../../assets/images/team-member-02.jpg'
import team3 from '../../assets/images/team-member-03.jpg'

import sv1 from '../../assets/images/service-01.jpg'
import sv2 from '../../assets/images/service-02.jpg'
import sv3 from '../../assets/images/service-03.jpg'

import Footer from '../../component/Footer';
import Header from '../../component/Header';
const About = () => {
    return (
        <>
           <Header/>
            <div class="page-heading about-page-heading" id="top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="inner-content">
                                <h2>SNEAKER_SHOP của chúng tôi</h2>
                                <span>Chất lượng sản phẩm &amp; uy tính thị trường</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ***** Main Banner Area End ***** -->

    <!-- ***** About Area Starts ***** --> */}
            <div class="about-us">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="left-image">
                                <img src={aboutl} alt="" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="right-content">
                                <h4>Về chúng tôi</h4>
                                <span>Toàn bộ sản phẩm của SNEAKER_SHOP đều được thiết kế và sản xuất từ các nghệ nhân đóng giày dày dạn kinh nghiệm nhất. </span>
                                <div class="quote">
                                    <i class="fa fa-quote-left"></i><p>  Luôn hướng đến nhu cầu của khách hàng . Uy tín cao khiến chúng tôi là lựa chọn hàng đầu của họ !
                                  
                                    </p>
                                </div>
                                <p>Kiểu giày Tây nhưng được SNEAKER_SHOP thiết kế theo chuẩn phom chân của các quý ông Việt. Với châm ngôn “Giày thể thao dành cho Ta”, SNEAKER_SHOP mong muốn tạo nên những chiếc giày Tây mang nét Việt riêng, nâng tầm đẳng cấp cho giày Việt và thêm nét mạnh mẽ lịch lãm riêng biệt dành cho các quý ông.</p>
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
            </div>
            {/* <!-- ***** About Area Ends ***** -->

    <!-- ***** Our Team Area Starts ***** --> */}
            <section class="our-team">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-heading">
                                <h2>Thành viên chính của chúng tôi</h2>
                                <span>Cách liên hệ với học qua :</span>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="team-item">
                                <div class="thumb">
                                    <div class="hover-effect">
                                        <div class="inner-content">
                                            <ul>
                                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                                <li><a href="#"><i class="fa fa-behance"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <img src={team1} />
                                </div>
                                <div class="down-content">
                                    <h4>Nguyễn Trần Khánh Vân</h4>
                                    <span>Product Caretaker</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="team-item">
                                <div class="thumb">
                                    <div class="hover-effect">
                                        <div class="inner-content">
                                            <ul>
                                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                                <li><a href="#"><i class="fa fa-behance"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <img src={team2} />
                                </div>
                                <div class="down-content">
                                    <h4>Trịnh Đinh Khải</h4>
                                    <span>Product Caretaker</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="team-item">
                                <div class="thumb">
                                    <div class="hover-effect">
                                        <div class="inner-content">
                                            <ul>
                                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                                <li><a href="#"><i class="fa fa-behance"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <img src={team3} />
                                </div>
                                <div class="down-content">
                                    <h4>Nguyễn Tấn Tài</h4>
                                    <span>CEO</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ***** Our Team Area Ends ***** -->

    <!-- ***** Services Area Starts ***** --> */}
            <section class="our-services">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-heading">
                                <h2>Dịch vụ</h2>
                                <span>Dịch vụ đa dạng, thay đổi theo từng thời kỳ !</span>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="service-item">
                                <h4>SNEAKER_SHOP CHÍNH THỨC ÁP DỤNG "MUA GIÀY TRƯỚC - TRẢ SAU"</h4>
                                <p>Khi mua sắm trực tiếp tại cửa hàng, bạn cần tải app Fundiin trước để đỡ mất thời gian hoặc nhờ nhân viên tư vấn tải app. 
                                Thanh toán trực tiếp kỳ 1 tại cửa hàng và sau đó trả kỳ 2, kỳ 3 qua Fundiin (mỗi kỳ cách nhau 1 tháng). </p>
                                <img src={sv1} alt="" />
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="service-item">
                                <h4>BIRTHDAY OFFER | ƯU ĐÃI COMBO QUÀ TẶNG</h4>
                                <p>Nếu như đã từng chọn sản phẩm của Be Classy, một lượt review về Be Classy trên Google,
                                 khi đến mua hàng bạn sẽ được tặng 2 đôi Tất (trị giá 170.000). Áp dụng khi mua tại cửa hàng. Đặc biệt, giảm 25% Phụ kiện: Thắt Lưng, Ví, Tất... khi mua kèm giày</p>
                                <img src={sv2} alt="" />
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="service-item">
                                <h4>SNEAKER_SHOP CHÍNH THỨC ÁP DỤNG HỆ THỐNG TÍCH ĐIỂM</h4>
                                <p>Mong muốn gửi lời cảm ơn chân thành đến các Quý khách hàng đã tin tưởng lựa chọn thương hiệu. 
                                SNEAKER_SHOP chính thức áp dụng hệ thống tích điểm dành cho những Quý Ông là khách hàng trung thành của mình.
                               

                                </p>
                                <img src={sv3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About