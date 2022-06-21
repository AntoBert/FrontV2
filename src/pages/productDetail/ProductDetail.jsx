import React, { useEffect, useLayoutEffect, useState } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import { categoryItem, productList } from '../../data';
import './productDetail.scss';



const ProductDetail = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    
    const location = useLocation();
    const idProd = location.pathname.split("/")[3]; 
    const [quantity,setQuantity] = useState(1);

    var prodDetFilter = productList.filter((item)=>{return item.id == idProd}); 
    const [isActive, setActive] = useState(false);


    
    const total = ((prodDetFilter[0].price * quantity).toFixed(2)).toString();
    const cat = prodDetFilter[0].cat
    let msd = total.split('.')[0];
    let lsd = total.split('.')[1];

    

    const handleQuantity = (type)=>{
        if(type === "dec"){
            quantity>0 && setQuantity(quantity-1);
        } else{
            setQuantity(quantity+1);
        }
    }
    

    return (
        <>
        <div className='productDet-containerNav'>
            <Navbar setActive={setActive} isActive={isActive}/>
        </div>
        <div className={`productDet ${isActive? "productDet-opacity": ""}`}>    
            <Link to={`/products/${cat}`}>
                <div className='productDet-arrow'><ChevronLeftIcon style={{ color: 'white', fontSize: 30 }}/></div>
            </Link>
            <div className='product-imgContainer'>
                <img src={prodDetFilter[0].img} alt='immagine prodotto' className='productDet-img'/>
            </div>
            <section className='productDet-container'>
                <h2 className='productDet-prodName'>{prodDetFilter[0].title}</h2>
                <div className='productDet-qta'>
                    <RemoveCircleIcon onClick={()=> handleQuantity("dec")} style={{ fontSize: 30, marginLeft: "5px" }}/>
                    <span className='productDet-amount'>{quantity}</span>    
                    <AddCircleIcon onClick={()=> handleQuantity("inc")} style={{ fontSize: 30, marginRight: "5px" }}/>
                </div>    
                <div className='productDet-cardDescr'>
                    <p>{prodDetFilter[0].descr}</p>
                </div>
                <div className='productDet-total'>
                    <p>Totale:</p>
                    <div className='productDet-price'>
                        <p className='productDet-msd'>€{msd}</p>
                        <span className='productDet-lsd'>.{lsd}</span>
                    </div>
                </div>
                <div className='productDet-btn'>
                    <p>Aggiungi al Carrello</p>
                </div>
            </section>
        </div>
        </>
    )
}

export default ProductDetail