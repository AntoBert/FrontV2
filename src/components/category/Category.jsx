import React from 'react';
import CategoryCard from '../categoryCard/CategoryCard'
import { categoryItem } from '../../data';
import "./category.scss";


const Category = () => {
    return (
        <div className='category-container'>
            {categoryItem.map(item=>(
                <CategoryCard item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default Category
