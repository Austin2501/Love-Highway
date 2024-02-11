import React from 'react'
import { Fade, Slide } from "react-awesome-reveal";
// css

import '../css/home.css'
import '../css/about.css'
import '../css/menu.css'
import '../css/chef.css'
import '../css/contact.css'
import '../css/contact_us.css'

// images
import floral from '../media/floral.png'
import sign from '../media/dark-sign.png'
import RTJ1 from '../media/collection.jpg'
import RTJ2 from '../media/foodie.jpg'
import RTJ3 from '../media/mock-beef.jpg'
import RTJ4 from '../media/tiramisu.jpg'
import menu1 from '../media/rare-beef.jpg'
import menu2 from '../media/salmon.jpg'
import menu3 from '../media/berries.jpg'
import menu4 from '../media/another-beef.jpg'
import table from '../media/table-crowd.jpg'
import chef3 from '../media/chef-right.jpg'
import chef2 from '../media/cheffie-v.jpg'
import chef1 from '../media/women-right.jpg'
import insta1 from '../media/insta1.jpg'
import insta2 from '../media/insta2.jpg'
import insta3 from '../media/insta3.jpg'
import insta4 from '../media/insta4.jpg'
import insta5 from '../media/insta5.jpg'
import insta6 from '../media/insta6.jpg'
import insta7 from '../media/insta7.jpg'
import insta8 from '../media/insta8.jpg'
import insta9 from '../media/insta9.jpg'
import insta10 from '../media/insta10.jpg'
import insta11 from '../media/insta11.jpg'
import insta12 from '../media/insta12.jpg'
import toast from '../media/couple-toast.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Home = () => {






    const showOrHideDiv1 = () => {
        var x = document.getElementById("showOrHide1");

        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    const showOrHideDiv2 = () => {
        var x = document.getElementById("showOrHide2");

        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    const showOrHideDiv3 = () => {
        var x = document.getElementById("showOrHide3");

        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    const showOrHideDiv4 = () => {
        var x = document.getElementById("showOrHide4");

        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    const showOrHideDiv5 = () => {
        var x = document.getElementById("showOrHide5");

        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    const showOrHideDiv6 = () => {
        var x = document.getElementById("showOrHide6");

        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    const showOrHideDiv7 = () => {
        var x = document.getElementById("showOrHide7");

        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }


    return (

        <div>
            <div className='main' id='home'>

                <div className="container-fluid">
                    <div className="d-flex justify-content-center align-items-center vh-100">

                        <div>
                            <Fade direction='up' cascade triggerOnce><p className="text-white tagline mt-5"  >A Fancy & Vibrant Dining Experience</p>
                                <p className="text-white head pt-0 mt-0">Love Highway</p></Fade>
                        </div>



                    </div>

                    <div className="d-flex justify-content-center">
                        <Fade direction='up' delay={1000} triggerOnce><AnchorLink href="#about" ><i class="mb-3 fa-solid fa-angle-down home-to-about" ></i></AnchorLink></Fade>
                    </div>
                </div>

            </div>

            <div className='about-bg' id='about' >

                <div className="container-fluid pt-4">

                    <div className="d-flex justify-content-center align-items-center pt-5 ">
                        <img src={floral} alt="" className='floral' />
                    </div >

                    <div className="d-flex justify-content-center align-items-center mt-4 ">
                        <div>
                            <Fade triggerOnce><div className="d-flex">
                                <p className='dash'>___________</p>
                                <p className='simply-the-best mx-2'>Simply The Best</p>
                                <p className='dash'>___________</p>
                            </div></Fade>

                        </div>



                    </div>

                    <div className="d-flex justify-content-center align-items-center">
                        <Fade triggerOnce><p className="head-about">WELCOME TO Love Highway</p></Fade>
                    </div>

                    <div className="container-fluid text-center">
                        <div className="px-lg-4">
                            <span className='the'>W</span>
                            <span className='about-text' >elcome to Love Highway, indulge in culinary perfection at our place. Our menu invites you on a flavorful journey, from tantalizing starters to mouthwatering main courses. Discover exquisite flavors that define our culinary identity. Experience Love Highway, where every dish is a masterpiece. Savor culinary excellence at Love Highway, where each dish is a masterpiece of flavor and passion. Indulge in our chef's specialties and delightful desserts, and elevate your dining experience to new heights. Join us for a symphony of flavors and embark on a journey of culinary bliss.</span>
                        </div>
                    </div>


                    <div className='d-flex justify-content-center align-items-center pt-5 pb-5'>
                        <Fade triggerOnce>  <img src={sign} alt="" className='sign' /></Fade>
                    </div>

                    <div className="row">
                        <div className="col-md-7">
                            <img src={RTJ1} alt="" className='rtj1' />
                        </div>
                        <div className="col-md-5 bg-dark">
                            <Fade direction='right' triggerOnce><div className="container-fluid p-lg-5">
                                <h4 className='rtj px-5 pt-5 mt-4'>Reasons To Join</h4>
                                <p className='num px-5 '>01</p>
                                <p className='px-5 rtj-title'>FRESH FOOD FOR EVERYONE, EVERY DAY</p>
                                <p className='rtj-para px-5'>At Love Highway, our commitment is to provide fresh and flavorful food every day, catering to all palates and ensuring a delightful dining experience for everyone.</p>
                            </div></Fade>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 bg-dark pb-sm-2">
                            <Fade direction='left' triggerOnce>  <div className="container-fluid p-lg-5" style={{ textAlign: 'right' }}>
                                <h4 className='rtj px-5 pt-5 mt-4'>Reasons To Join</h4>
                                <p className='num px-5 '>02</p>
                                <p className='px-5 rtj-title'>FOOD PREPARATION WITH LOVE AND CARE</p>
                                <p className='rtj-para px-5'>At Love Highway, we take pride in our kitchen, where every dish is meticulously crafted with love and care. Each bite reflects our culinary passion, ensuring a flavorful dining experience for our guests.</p>
                            </div></Fade>
                        </div>
                        <div className="col-md-7">
                            <img src={RTJ2} alt="" className='rtj2' />
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-7">
                            <img src={RTJ3} alt="" className='rtj1' />
                        </div>
                        <div className="col-md-5 bg-dark">
                            <Fade direction='right' triggerOnce>    <div className="container-fluid p-lg-5">
                                <h4 className='rtj px-5 pt-5 mt-4'>Reasons To Join</h4>
                                <p className='num px-5 '>03</p>
                                <p className='px-5 rtj-title'>COOKING WITH SCIENCE FOR PERFECT RESULTS</p>
                                <p className='rtj-para px-5'>At Love Highway, we harmonize culinary artistry with scientific precision, ensuring that every dish emerges as a masterpiece of flavor and perfection.</p>
                            </div></Fade>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 bg-dark">
                            <Slide direction='left' triggerOnce>   <div className="container-fluid p-lg-5" style={{ textAlign: 'right' }}>
                                <h4 className='rtj px-5 pt-5 mt-4'>Reasons To Join</h4>
                                <p className='num px-5 '>04</p>
                                <p className='px-5 rtj-title'>FINISH WITH ALL THE FLAVOR AND STYLE</p>
                                <p className='rtj-para px-5'>At Love Highway, each culinary creation is meticulously finished with an artful touch, ensuring it embodies the flavor and style that defines our gastronomic excellence.</p>
                            </div></Slide>
                        </div>
                        <div className="col-md-7">
                            <img src={RTJ4} alt="" className='rtj2' />
                        </div>
                    </div>
                </div>

            </div>

            <div className="about-bg" id='menu'>
                <div className="container-fluid pt-4">
                    <div className="d-flex justify-content-center align-items-center pt-5 ">
                        <img src={floral} alt="" className='floral' />
                    </div >

                    <div className="d-flex justify-content-center align-items-center mt-4 ">
                        <div>
                            <Fade triggerOnce>
                                <div className="d-flex">
                                    <p className='dash'>___________</p>
                                    <p className='simply-the-best mx-2'>Variety And Flavor</p>
                                    <p className='dash'>___________</p>
                                </div></Fade>

                        </div>



                    </div>

                    <div className="d-flex justify-content-center align-items-center">
                        <Fade triggerOnce><p className="head-about">OUR AWARDED MENU</p></Fade>
                    </div>
                    <div className="container mx-lg-5 px-5 pb-5 d-flex justify-content-center">
                        <Fade triggerOnce> <p className='mx-lg-5 px-lg-5 text-justify text-white about-text' >Explore Love Highway's culinary delights, where our menu showcases diverse flavors crafted with precision. From appetizing starters to decadent desserts, each dish promises a journey of culinary excellence and delight.</p>
                        </Fade>
                    </div>

                    <div className="container pb-5">
                        <div className="row">
                            <div className="col-md-6 menu">

                                <div className="d-flex " onClick={showOrHideDiv1}>
                                    <p className='menu-name pt-2 '>SNACKS</p>
                                    <p className='dropdown-style ms-auto pt-2' ><i class="fa-solid fa-angle-down" ></i></p>
                                </div>
                                <div id='showOrHide1' className='px-4 pt-2 pb-4' style={{ display: 'none' }}>
                                    <div className="d-flex justify-content-between">
                                        <p className='menu-item'>Chicken Wings</p>
                                        <p className='menu-price'>$15.00</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className='menu-item'>Burger</p>
                                        <p className='menu-price'>$10.00</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className='menu-item'>Fries</p>
                                        <p className='menu-price'>$8.00</p>
                                    </div>
                                </div>
                                <hr className='hr-line' />
                                <div className="d-flex  " onClick={showOrHideDiv2}>
                                    <p className='menu-name'>SOUP</p>
                                    <p className='dropdown-style ms-auto' ><i class="fa-solid fa-angle-down" ></i></p>
                                </div>
                                <div id='showOrHide2' className='px-4 pt-2 pb-4' style={{ display: 'none' }}>
                                    <div className="d-flex justify-content-between">
                                        <p className='menu-item'>Chicken Soup</p>
                                        <p className='menu-price'>$12.00</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className='menu-item'>Veg Soup</p>
                                        <p className='menu-price'>$10.00</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className='menu-item'>Onion Soup</p>
                                        <p className='menu-price'>$10.00</p>
                                    </div>
                                </div>
                                <hr className='hr-line' />
                                <div className="d-flex" onClick={showOrHideDiv3}>
                                    <p className='menu-name'>VEGAN</p>
                                    <p className='dropdown-style ms-auto' ><i class="fa-solid fa-angle-down" ></i></p>
                                </div>
                                <div id='showOrHide3' className='px-4 pt-2 pb-4' style={{ display: 'none' }}>
                                    <div className="d-flex justify-content-between">
                                        <p className='menu-item'>Cury</p>
                                        <p className='menu-price'>$10.00</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className='menu-item'>Grain Meal</p>
                                        <p className='menu-price'>$18.00</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className='menu-item'>Tofu</p>
                                        <p className='menu-price'>$20.00</p>
                                    </div>
                                </div>
                                <hr className='hr-line' />
                                <div className="d-flex" onClick={showOrHideDiv4}>
                                    <p className='menu-name'>FISH</p>
                                    <p className='dropdown-style ms-auto' ><i class="fa-solid fa-angle-down" ></i></p>
                                </div>
                                <div id='showOrHide4' className='px-4 pt-2 pb-4' style={{ display: 'none' }}>
                                    <div className="d-flex justify-content-between">
                                        <p className='menu-item'>Chicken Fish</p>
                                        <p className='menu-price'>$15.00</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className='menu-item'>Tuna Fish</p>
                                        <p className='menu-price'>$12.00</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className='menu-item'>Fish Cury</p>
                                        <p className='menu-price'>$16.00</p>
                                    </div>
                                </div>
                                <hr className='hr-line' />
                                <div className="d-flex" onClick={showOrHideDiv5}>
                                    <p className='menu-name'>MEAT</p>
                                    <p className='dropdown-style ms-auto' ><i class="fa-solid fa-angle-down" ></i></p>
                                </div>
                                <div id='showOrHide5' className='px-4 pt-2 pb-4' style={{ display: 'none' }}>
                                    <div className="d-flex justify-content-between">
                                        <p className='menu-item'>Chicken Masala</p>
                                        <p className='menu-price'>$18.00</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className='menu-item'>Chicken Korma</p>
                                        <p className='menu-price'>$20.00</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className='menu-item'>Chicken Pakoda</p>
                                        <p className='menu-price'>$10.00</p>
                                    </div>
                                </div>
                                <hr className='hr-line' />
                                <div className="d-flex" onClick={showOrHideDiv6}>
                                    <p className='menu-name'>DESSERTS</p>
                                    <p className='dropdown-style ms-auto' ><i class="fa-solid fa-angle-down" ></i></p>
                                </div>
                                <div id='showOrHide6' className='px-4 pt-2 pb-4' style={{ display: 'none' }}>
                                    <div className="d-flex justify-content-between">
                                        <p className='menu-item'>Chocolate Brownie</p>
                                        <p className='menu-price'>$12.00</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className='menu-item'>Sundae</p>
                                        <p className='menu-price'>$15.00</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className='menu-item'>Vanilla Icream</p>
                                        <p className='menu-price'>$10.00</p>
                                    </div>
                                </div>
                                <hr className='hr-line' />
                                <div className="d-flex" onClick={showOrHideDiv7}>
                                    <p className='menu-name'>DRINKS</p>
                                    <p className='dropdown-style ms-auto' ><i class="fa-solid fa-angle-down" ></i></p>
                                </div>
                                <div id='showOrHide7' className='px-4 pt-2 pb-4' style={{ display: 'none' }}>
                                    <div className="d-flex justify-content-between">
                                        <p className='menu-item'>Coca-Cola</p>
                                        <p className='menu-price'>$8.00</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className='menu-item'>Coffee</p>
                                        <p className='menu-price'>$10.00</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className='menu-item'>Mineral Water</p>
                                        <p className='menu-price'>$5.00</p>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-6 px-3">
                                <div className="row">
                                    <div className="col-md-6" >

                                        <Fade triggerOnce delay={180}>  <div className='outer1'> <img src={menu1} alt="" className='menu-img1' /></div></Fade>



                                    </div>
                                    <div className="col-md-6">
                                        <Fade triggerOnce delay={200}><div className='outer2'>
                                            <img src={menu2} alt="" className='menu-img2' />
                                        </div></Fade>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 ">
                                        <Fade triggerOnce delay={220}><div className="outer1">
                                            <img src={menu3} alt="" className='menu-img1' />
                                        </div></Fade>

                                    </div>
                                    <div className="col-md-6 ">
                                        <Fade triggerOnce delay={240}><div className="outer2">
                                            <img src={menu4} alt="" className='menu-img2' />
                                        </div></Fade>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                </div>


                <div className="bg-dark pt-5 pb-5">
                    <div className="container">
                        <div className="d-flex justify-content-center align-items-center">
                            <Fade triggerOnce> <h2 className='text-white after-menu px-4 mt-5 pt-5 mb-5 pb-5'>We take immense pride in the positive feedback from our cherished clients, and we invite you to experience our offerings firsthand. Come visit us, and we guarantee you won't be disappointed.</h2></Fade>
                        </div>
                    </div>
                </div>

                <img src={table} alt="" className='table-crowd ' />

                <div className='d-flex justify-content-center align-items-center'>
                    <h1 className='table-text'>Enjoy Cheerful moments</h1>
                </div>

                <div className='about-bg' id='chefs' >

                    <div className="container-fluid pt-4">

                        <div className="d-flex justify-content-center align-items-center pt-5 ">
                            <img src={floral} alt="" className='floral' />
                        </div >

                        <div className="d-flex justify-content-center align-items-center mt-4 ">
                            <div>
                                <Fade triggerOnce>  <div className="d-flex">
                                    <p className='dash'>___________</p>
                                    <p className='simply-the-best mx-2'>Talent & Experience</p>
                                    <p className='dash'>___________</p>
                                </div></Fade>

                            </div>



                        </div>

                        <div className="d-flex justify-content-center align-items-center">
                            <Fade triggerOnce> <p className="head-about">KITCHEN SCIENTIST</p></Fade>
                        </div>

                        <div className="container mx-lg-5 px-5 pb-5 d-flex justify-content-center align-items-center">
                            <Fade triggerOnce> <p className='px-lg-5 mx-lg-5 book-text'>At Love Highway, our chefs are culinary virtuosos, skillfully harmonizing an array of flavors with passion and precision. Each dish is a testament to the dedication of our team, striving to elevate your dining experience to unparalleled levels of excellence.</p>
                            </Fade>
                        </div>


                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-4">
                                    <Fade triggerOnce>
                                        <div className='chef-container'>  <img src={chef1} alt="" className='chef p-2' />
                                            <div class="overlay m-3">
                                                <div class="text-demo">Good Mood</div>
                                                <p className='text-demo2'>Our chef infuses every dish with a touch of positivity, turning meals into moments of pure joy and culinary bliss.</p>
                                            </div>
                                        </div>
                                    </Fade>
                                    <p className='chef-name'>Mary Frampton</p>
                                    <p className="chef-des">Soups & Fish</p>
                                </div>
                                <div className="col-md-4">
                                    <Fade triggerOnce>
                                        <div className='chef-container'>
                                            <img src={chef2} alt="" className='chef p-2' />
                                            <div class="overlay m-3">
                                                <div class="text-demo">World Traveller</div>
                                                <p className='text-demo2'>Explore a global culinary adventure with our chef, who travels the world to bring an array of flavors to your table.</p>
                                            </div>
                                        </div>

                                    </Fade>

                                    <p className='chef-name'>Jennifer Queen</p>
                                    <p className="chef-des">Oriental Flavors</p>
                                </div>
                                <div className="col-md-4">
                                    <Fade triggerOnce>
                                        <div className='chef-container'>
                                            <img src={chef3} alt="" className='chef p-2' />
                                            <div class="overlay m-3">
                                                <div class="text-demo">Loves Music</div>
                                                <p className='text-demo2'>Adding a sprinkle of passion to every dish, our chef, a music enthusiast, transforms meals into a symphony of flavors.</p>
                                            </div>
                                        </div>

                                    </Fade>
                                    <p className='chef-name'>James Ocean</p>
                                    <p className="chef-des">French Cuisine specialist</p>
                                </div>

                            </div>

                        </div>

                    </div>

                    <hr />
                    <Fade triggerOnce>  <div className="mx-5 px-2 mt-3 pt-5 pb-5 ">
                        <div className="insta-flex">
                            <div className="out">
                                <img src={insta2} alt="" className='insta' />
                            </div>
                            <div className="out">
                                <img src={insta6} alt="" className='insta' />
                            </div>
                            <div className="out">
                                <img src={insta7} alt="" className='insta' />
                            </div>
                            <div className="out">
                                <img src={insta11} alt="" className='insta' />
                            </div>
                            <div className="out">
                                <img src={insta1} alt="" className='insta' />
                            </div>
                            <div className="out">
                                <img src={insta8} alt="" className='insta' />
                            </div>
                        </div>
                        <div className="insta-flex">
                            <div className="out">
                                <img src={insta3} alt="" className='insta' />
                            </div>
                            <div className="out">
                                <img src={insta4} alt="" className='insta' />
                            </div>
                            <div className="out">
                                <img src={insta10} alt="" className='insta' />
                            </div>
                            <div className="out">
                                <img src={insta9} alt="" className='insta' />
                            </div>
                            <div className="out">
                                <img src={insta5} alt="" className='insta' />
                            </div>
                            <div className="out">
                                <img src={insta12} alt="" className='insta' />
                            </div>
                        </div>
                    </div></Fade>



                    <div className='pt-5 mt-5' id='book'>
                        <img src={toast} alt="" width={'100%'} height={'700px'} />

                        <div className="d-flex justify-content-center align-items-center">
                            <div className="contact">
                                <div className="d-flex justify-content-center align-items-center pt-5 ">
                                    <img src={floral} alt="" className='floral' />
                                </div >

                                <div className="d-flex justify-content-center align-items-center mt-4 ">
                                    <div>
                                        <Fade triggerOnce>  <div className="d-flex">
                                            <p className='dash'>___________</p>
                                            <p className='simply-the-best mx-2'>Instant Confirmation</p>
                                            <p className='dash'>___________</p>
                                        </div></Fade>

                                    </div>
                                </div>

                                <Fade triggerOnce>   <p className="book-head">MAKE YOUR RESERVATION</p></Fade>
                                <Fade triggerOnce>  <p className='book-text px-5 mx-3'>Reserve your spot now at Love Highway for an unforgettable culinary journey filled with flavors and indulgence. Secure your table today!</p>
                                </Fade>
                                <Fade triggerOnce delay={200}>  <div className="container mt-lg-5">
                                    <div className="row ">
                                        <div className="col-md-4">
                                            <h4 className='date '>DATE</h4>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <input type="date" className='input-field px-2 p-1' />
                                            </div>

                                        </div>
                                        <div className="col-md-4">
                                            <h4 className='date '>HOUR</h4>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <select className='input-field px-2 p-1' >
                                                    <option value="10">10 AM</option>
                                                    <option value="11">11 AM</option>
                                                    <option value="12">12 PM</option>
                                                    <option value="13">1 PM</option>
                                                    <option value="14">2 PM</option>
                                                    <option value="15">3 PM</option>
                                                    <option value="16">4 PM</option>
                                                    <option value="17">5 PM</option>
                                                    <option value="18">6 PM</option>
                                                    <option value="19">7 PM</option>
                                                    <option value="20">8 PM</option>
                                                    <option value="21">9 PM</option>
                                                    <option value="22">10 PM</option>
                                                    <option value="23">11 PM</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <h4 className='date'>GUEST NR</h4>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <select className='input-field px-2 p-1' >
                                                    <option value="1">1 </option>
                                                    <option value="2">2 </option>
                                                    <option value="3">3 </option>
                                                    <option value="4">4 </option>
                                                    <option value="5">5 </option>
                                                    <option value="6">6 </option>
                                                    <option value="7">7 </option>
                                                    <option value="8">8 </option>
                                                    <option value="9">9 </option>
                                                    <option value="10">10 </option>
                                                    <option value="moere">more..</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-center align-items-center mt-lg-5 mt-3">
                                        <button className='book-btn'>BOOK A TABLE</button>
                                    </div>
                                </div></Fade>



                            </div>
                        </div>

                    </div>



                    <div className="pt-3 mt-5 pb-1 " id='contact'>
                        <p className='contact-us'>Love Highway</p>
                        <p className='addr'>Noida, Sec-62, Gaur Tower</p>
                        <p className='addr2'>201-309, Uttar Pradesh, India</p>

                        <div className="d-flex justify-content-center align-items-center mt-5 pt-4 mb-1">

                            <p className='num2'>+120 0011 1100 ||</p>
                            <p className='mail'>lovehighway@gmail.com</p>
                            <p className='num2'>|| www.lovehighway.com</p>
                        </div>


                        <div className="d-flex justify-content-center align-items-center">
                            <i class="fa-brands fa-facebook-f socials"></i>
                            <i class="fa-brands fa-google-plus-g socials"></i>
                            <i class="fa-brands fa-instagram socials"></i>
                            <i class="fa-brands fa-youtube socials"></i>
                            <i class="fa-brands fa-vimeo socials"></i>
                        </div>



                        <div className="d-flex justify-content-center align-items-center mt-5 pt-5 ">
                            <p className='pt-3 text-light'>© 2024 The Love Highway. All rights reserved</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center ">
                            <hr className='last-line' />
                        </div>

                        <div className="d-flex justify-content-center align-items-center mt-3">
                            <p className='text-info'>Built by Vineet Rawat <a href="https://github.com/Austin2501"><i class="fa-brands fa-github"></i></a></p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home

