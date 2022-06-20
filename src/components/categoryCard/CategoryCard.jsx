import React from 'react';
import { Link } from 'react-router-dom';
import "./categoryCard.scss";


const CategoryCard = ({item}) => {
    return (
        <div className='categoryCard-container'>
            <Link to={`/products/${item.cat}`}>
                <div className='categoryCard-wrapper'>
                    <div className='categoryCard-img-container'>
                        <img className='categoryCard-img' src={item.img} /> 
                    </div>
                    <div className='categoryCard-info'>
                        {item.cat}                   
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CategoryCard
