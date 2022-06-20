import React, { useEffect } from 'react';
import "./home.scss"; 
import Navbar from '../../components/navbar/Navbar';
import heroImg from "../../img/heroRest.jpg";
import BtnMove from '../../components/btnMove/BtnMove';
import Category from '../../components/category/Category';
import Footer from '../../components/footer/Footer';
import { useState } from 'react';
import Carousel from '../../components/carousel/Carousel';


const Home = () => {
    



    //viene passato al componente child Nav, in React le prop si possono passare solo top-down
    //a meno di non usare Redux... 
    const [isActive, setActive] = useState(false);
    

    return (
        <>
        <div className='home-containerNav'>        
            <Navbar setActive={setActive} isActive={isActive}/>
        </div>
        <div className={`home ${isActive? "home-opacity": ""}`}> 
            <section className='home-containerHero'>
                <div className='heroImg-container'>
                    <img src={heroImg} className='heroImg' alt='heroRest' />
                </div>
                <div className='hero-containerText'>
                    <h2 className='hero-welcomeText'>Welcome to</h2>
                    <h1 className='hero-restName bounce-in-right'>Lorem Ipsum</h1>
                </div>
                <BtnMove/>
            </section>
            <section id='bestProd' className='home-containerCat'>
                <h2>Piatti consigliati</h2>
                <Carousel />
                <h2>Categorie</h2>
                <Category />
            </section>
            <Footer />
        </div>
        </>
    )
}

export default Home
