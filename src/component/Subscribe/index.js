import React from 'react'
import { BsYoutube,BsTwitter,BsFacebook,BsInstagram } from "react-icons/bs";

const Subscribe = () => {
    return (
        <div class="subscribe">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="section-heading">
                            <h2>
                           Đăng ký nhận để nhận thông báo mới nhất, cơ hội giảm giá 30%</h2>
                            <span>Nhận thông tin sản phẩm mới nhất, tin khuyến mãi và nhiều hơn nữa.</span>
                        </div>
                        <form id="subscribe" action="" method="get">
                            <div class="row">
                                <div class="col-lg-5">
                                    <fieldset>
                                        <input name="name" type="text" id="name" placeholder="Tên" required="" />
                                    </fieldset>
                                </div>
                                <div class="col-lg-5">
                                    <fieldset>
                                        <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Email" required="" />
                                    </fieldset>
                                </div>
                                <div class="col-lg-2">
                                    <fieldset>
                                        <button type="submit" id="form-submit" class="main-dark-button"><i class="fa fa-paper-plane"></i></button>
                                    </fieldset>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-4">
                        <div class="row">
                            <div class="col-6">
                                <ul>
                                    <li>Địa chỉ shop :<br /><span>772 Đào trí, Quận 7, TP HCM</span></li>
                                    <li>Phone:<br /><span>0129002333</span></li>
                                    
                                </ul>
                            </div>
                            <div class="col-6">
                                <ul>
                                    <li>Thời gian làm việc<br /><span>07:30 AM - 9:30 PM</span></li>
                                    <li>Email:<br /><span>sneaker_shop@gmail.com</span></li>
                                    <li>Social Media:<br /><span><a href="#"><BsFacebook/></a> <a href="#"><BsInstagram/></a>  <a href="#"><BsYoutube/></a> <a href="#"><BsTwitter/></a></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe