import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './productCard.scss';


const ProductCard = ({item}) => {

    const msd = item.price.split('.')[0];
    const lsd = item.price.split('.')[1];

    const imgStyle = {
        backgroundImage: 'url(' + item.img + ')',
    }

    return (
        <div className='productCard'>
            <div className='productCard-wrapper flip-in-ver-right'>
                <div className='productCard-topCont' style={imgStyle}/>
                <div className='productCard-bottomCont'>
                    <div className='productCard-info'>
                        <div className='productCard-topCont-titleCont'>
                            <h2 className='productCard-title'>{item.title}</h2>
                        </div>
                        <div className='productCard-paraCont'>
                            <p className='productCard-para'>{item.descrCard}</p>
                        </div>
                    </div>
                    <div className='productCard-cta'>
                        <div className='productCard-price'>
                            <p className='productCard-msd'>€{msd}</p>
                            <span className='productCard-lsd'>.{lsd}</span>
                        </div>
                        <Link to={`/products/${item.cat}/${item.id}`}>
                            <div className='productCard-btn'>
                                <p className='productCard-btn-para'>Click</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default ProductCard