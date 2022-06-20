import React from 'react';
import "./categorySlider.scss";
import {categoryItem} from '../../data';
import { Link } from 'react-router-dom';



const CategorySlider = (props) => {

    const sliderStyle = {
        transform: 'translateX(calc(' + props.sliderIndex + '* (-140px)))',
    };

    return (
        <div className='catSlider-container'>
            {categoryItem.map((item) =>(
                <Link to={`/products/${item.cat}`} key={item.id}>
                    <div className='catSlider-wrapper' style={sliderStyle}>
                        <div className='catSlider-left'>
                            <p className='catSlider-descr'>{item.cat}</p>
                        </div>
                        <div className='catSlider-right'>
                            <img src={item.icon} className='catSlider-img' alt='icon-img' />
                        </div>
                    </div>
                </Link> 
            ))}
        </div>
    )
}

export default CategorySlider