import React from 'react'
import men01 from '../../assets/images/instagram-05.jpg'
import men07 from '../../assets/images/top-sale09.jpg'

import { BsFillTelephonePlusFill } from "react-icons/bs";
import Header from '../../component/Header';
import Footer from '../../component/Footer';
const Brand = () => {
    return (
        <>
        <Header/>
        <div className="brand">
        <div class="page-heading about-page-heading" id="top">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="inner-content">
                        <h2>Thương Hiệu</h2>
                        <span>Các mặt hàng của shop đều đến từ các thương hiệu nổi tiếng &amp; bao gồm cả chất lượng</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        <section class="section" id="explore">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="left-content">
                            <h2>Thương Hiệu</h2>
                            <span>Toàn bộ sản phẩm của SNEAKER_SHOP đều được thiết kế và sản xuất từ các nghệ nhân đóng giày dày dạn kinh nghiệm nhất.
                             Kiểu giày thể thao nhưng được SNEAKER_SHOP thiết kế theo chuẩn phom chân của các quý ông Việt.
                              </span>
                            <div class="quote">
                                <i class="fa fa-quote-left"></i><p>Với châm ngôn “Giày thể thao dành cho Ta” SNEAKER_SHOP mong muốn tạo nên những chiếc giày Tây mang nét Việt riêng,
                             nâng tầm đẳng cấp cho giày Việt và thêm nét mạnh mẽ lịch lãm riêng biệt dành cho các quý ông.</p>
                            </div>
                            <p>Cột mốc đánh dấu hành trình 5 năm bước vào thị trường giày thẻ thao. Đây là cơ hội để SNEAKER_SHOP nhìn lại hành trình của mình, 
                            cũng là cơ hội để tri ân khách hàng, gửi đến bạn nhiều quà tặng hấp dẫn nhất.
                            </p>
                            <p>Đặc biệt, mừng sinh nhật tưng bừng trọn tháng 10, SNEAKER_SHOP tiếp tục gửi đến bạn ưu đãi:

                            Giảm 25% Phụ kiện: Thắt Lưng, Ví, Tất... khi mua kèm giày. Áp dụng khi mua trực tiếp tại cửa hàng. 
                            <a rel="nofollow" href="https://paypal.me/templatemo" target="_blank">_ <BsFillTelephonePlusFill/> liên hệ tại đây_ </a> 
                            </p>
                            <div class="main-border-button">
                                <a href="products.html">Khám phá ngay</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="right-content">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="leather">
                                        <h4>Giày thể thao</h4>
                                        <span>Với bộ sưu tập mới nhất</span>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="first-image">
                                        <img src={men01} alt="" />
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="second-image">
                                        <img src={men07} alt="" />
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="types">
                                        <h4>Các loại sản phẩm</h4>
                                        <span>với hơn 201 loại sản phẩm khác nhau</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        <Footer/>
        </>
    )
}

export default Brand