import React from 'react';
import "./carousel.scss";
import {bestProducts} from '../../data';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Carousel = () => {

    const [sliderIndex,setSliderIndex] = useState(0);

    const totalItem = bestProducts.length-1;

    const handleClick = (direction) => {
        if(direction==='left'){
            setSliderIndex(sliderIndex > 0 ? sliderIndex-1 : totalItem);
        } else {
            setSliderIndex(sliderIndex < totalItem ? sliderIndex+1 : 0);
        }
    }

    const sliderStyle = {
        transform: 'translateX(calc(' + sliderIndex + '*(((-100vw + 40px)*(75/100)) - 100px)))',
    };


    return (
        <div className='car-container'>
            <div className='car-arrow car-arrow-left' onClick={()=>handleClick('left')}><ChevronLeftIcon /></div>
            {bestProducts.map((prod) =>(
                <Link to={`/products/${prod.cat}/${prod.id}`} key={prod.id}>
                    <div className='car-wrapper' style={sliderStyle}>
                        <div className='car-left'>
                            <h2 className='car-title'>{prod.title}</h2>
                            <p className='car-descr'>{prod.descrCard}</p>
                            <div className='car-priceCont'>
                                <p className='car-price'>Prezzo: €{prod.price}</p>
                            </div>
                        </div>
                        <div className='car-right'>
                            <div className='car-right-imgCont'>
                                <img src={prod.img} className='car-img' alt='prod-img' />
                            </div>
                        </div>
                    </div>
                </Link> 
            ))}
            <div className='car-arrow car-arrow-right' onClick={()=>handleClick('right')}><ChevronRightIcon /></div>
        </div>
    )
}

export default Carousel