import React from 'react'
import logo from '../../assets/images/Logo-02 .png'
import { Link } from 'react-router-dom';
import { BsFillCaretDownFill } from "react-icons/bs";
import lienhe01 from '../../assets/images/lienhe01.jpg'
import Footer from '../../component/Footer';
import Header from '../../component/Header';


const Contact = () => {
    return (

<>
     <Header/>
        <div class="page-heading about-page-heading" id="top">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="inner-content">
                        <h2>Liên Hệ</h2>
                        <span>Chúng tôi luôn sẳn sàng chấp nhận &amp; mỗi góp ý là 1 phần thành công của SNEAKER_SHOP</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div class="contact-us">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div id="map">
                      <img src ={lienhe01} ></img>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="section-heading">
                        <h2>Say Hello..!</h2>
                        <span>Để lại ý kiến của bạn dưới đây, shop sẻ đọc mọi góp ý.</span>
                    </div>
                    <form id="contact" action="" method="post">
                        <div class="row">
                          <div class="col-lg-6">
                            <fieldset>
                              <input name="name" type="text" id="name" placeholder="Tên của bạn" required=""/>
                            </fieldset>
                          </div>
                          <div class="col-lg-6">
                            <fieldset>
                              <input name="email" type="text" id="email" placeholder="email" required=""/>
                            </fieldset>
                          </div>
                          <div class="col-lg-12">
                            <fieldset>
                              <textarea name="message" rows="6" id="message" placeholder="Lời nhắn &amp; ..." required=""></textarea>
                            </fieldset>
                          </div>
                          <div class="col-lg-12">
                            <fieldset>
                              <button type="submit" id="form-submit" class="main-dark-button"><i class="fa fa-paper-plane"></i></button>
                              </fieldset>
                          </div>
                        </div>
                      </form>
                </div>
            </div>
        </div>
    </div>
   
    <Footer/>
    </>
    )
}

export default Contact