import React from 'react'

import { BsYoutube,BsTwitter } from "react-icons/bs";
import social01 from '../../assets/images/social01.jpg'
import social02 from '../../assets/images/social02.jpg'
import social03 from '../../assets/images/social03.jpg'
import social04 from '../../assets/images/social04.jpg'
import social05 from '../../assets/images/social05.jpg'
import social06 from '../../assets/images/social06.jpg'
const Social = () => {
    return (
        <section class="section" id="social">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-heading">
                            <h2>Mạng xã hội</h2>
                            <span>Details to details in social media</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row images">
                    <div class="col-2">
                        <div class="thumb">
                            <div class="icon">
                                <a href="http://instagram.com">
                                    <h6>Fashion</h6>
                                  <i> <BsYoutube/></i>
                                </a>
                            </div>
                            <img src={social01} alt="" />
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="thumb">
                            <div class="icon">
                                <a href="http://instagram.com">
                                    <h6>New</h6>
                                    <i class="fa fa-instagram"></i>
                                </a>
                            </div>
                            <img src={social02} alt="" />
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="thumb">
                            <div class="icon">
                                <a href="http://instagram.com">
                                    <h6>Brand</h6>
                                    <i><BsTwitter/></i>
                                </a>
                            </div>
                            <img src={social03} alt="" />
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="thumb">
                            <div class="icon">
                                <a href="http://instagram.com">
                                    <h6>Makeup</h6>
                                    <i><BsTwitter/></i>
                                </a>
                            </div>
                            <img src={social04} alt="" />
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="thumb">
                            <div class="icon">
                                <a href="http://instagram.com">
                                    <h6>Leather</h6>
                                    <i class="fa fa-instagram"></i>
                                </a>
                            </div>
                            <img src={social05} alt="" />
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="thumb">
                            <div class="icon">
                                <a href="http://instagram.com">
                                    <h6>Bag</h6>
                                    <i><BsYoutube/></i>
                                </a>
                            </div>
                            <img src={social06} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Social