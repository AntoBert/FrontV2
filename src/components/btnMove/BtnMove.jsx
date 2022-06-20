import React from 'react';
import btnArrImage from "../../img/btn-Moveimg.png"; 
import "./btnMove.scss";

const BtnMove = () => {
  return (
    <div className='btnMove-container'>
        <a  className='anchorBtn' href='#bestProd'> 
          <img className='btnMove-img' src={btnArrImage} alt='moveArrow' />
        </a>
    </div>
  )
}

export default BtnMove