import React from 'react';
import btnArrImage from "../../img/btn-Moveimg.png"; 
import "./btnMove.scss";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const BtnMove = () => {

  const preventDefault = (event) => event.preventDefault();

  return (
    <div className='btnMove-container'>
        <a  className='anchorBtn' href='#bestProd'> 
          <KeyboardArrowDownIcon style={{fontSize: 45}} />
        </a>
    </div>
  )
}

export default BtnMove