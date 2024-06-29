import React from 'react'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Banner from '../../component/Banner'
import Explore from '../../component/Explore'
import Section from '../../component/section'
import Social from '../../component/Social'
import Subscribe from '../../component/Subscribe'

const Home = () => {
    return (

        // <div id="preloader">
        //     <div class="jumper">
        //         <div></div>
        //         <div></div>
        //         <div></div>
        //     </div>
        // </div>

        <>
            <Header />
            <Banner></Banner>
            <Section></Section>
            <Explore></Explore>
            <Social>
            </Social>
            <Subscribe></Subscribe>
            <Footer />
        </>

    )
}

export default Home