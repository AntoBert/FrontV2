import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import CategorySlider from '../../components/categorySlider/CategorySlider';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ProductCard from '../../components/productCard/ProductCard';
import { categoryItem, productList } from '../../data';
import './products.scss';


const Products = () => {
    
    const location = useLocation();
    const cat = location.pathname.split("/")[2]; //potrebbe non servire, da rivedere dopo aver passato categorie dal server

    var prodFilter = productList.filter((item)=>{return item.cat === cat}); 
    const [isActive, setActive] = useState(false);



    const [sliderIndex,setSliderIndex] = useState(0);

    const handleClick = (direction) => {
        if(direction==='left'){
            setSliderIndex(sliderIndex > 0 ? sliderIndex-1 : 2);  
        } else {
            setSliderIndex(sliderIndex < 2 ? sliderIndex+1 : 0);
        }
    }

    return (
        <>
        <div className='products-containerNav'>
                <Navbar setActive={setActive} isActive={isActive}/>
        </div>
        <div className={`products ${isActive? "products-opacity": ""}`}>    
            <div className='products-topContainer'>
                <h2 className='products-catName'>{cat}</h2>    
            </div>
            <section className='products-cardContainer'>
                <h2 className='products-cat'>Categorie</h2>
                <div className='products-catSliderCont'>
                    <div className='products-arrow products-arrow-left' onClick={()=>handleClick('left')}><ChevronLeftIcon /></div>
                        <CategorySlider sliderIndex={sliderIndex}/>
                    <div className='products-arrow products-arrow-right' onClick={()=>handleClick('right')}><ChevronRightIcon /></div>
                </div>
                <div className='products-cardWrapper'>
                    {prodFilter.map(item=>(
                        <ProductCard item={item} key={item.id}/>
                    ))}  
                </div>
            </section>
            <Footer />
        </div>
        </>
    )
}

export default Products

