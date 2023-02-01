import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import DATA from '../Data';
import { useDispatch } from 'react-redux';
import { addItem,delItem } from '../redux/actions/index';

const ProductDetail = () => {

    const [cartBtn,setCartBtn] = useState("Add to Cart");
    const productId = useParams();
    const productDetail = DATA.filter(x => x.id == productId.id);
    const product = productDetail[0];
    console.log(product)

    const dispatch = useDispatch()

    const handleCart = (product) =>
    {
        if(cartBtn === "Add to Cart")
        {
            dispatch(addItem(product))
            setCartBtn('Remove to cart');

        }else
        {
            dispatch(delItem(product))
            setCartBtn('Add to Cart');
        }
       
    }

  return (
    <>
    <div className="container my-5 py-3 d-flex justify-content-center mx-auto product">
        <div className="row">
            <div className="col-md-6">
                <img src={product.img} alt={product.title}  height="400px"/>
            </div>
            <div className='col-md-6 d-flex flex-column justify-content-center'>
                <h1 className='display-5 fw-bold'>{product.title}</h1>
                <hr />
                <h2 className='my-4'>${product.price}</h2>
                 <p className='lead'>{product.desc}</p>
                 <button onClick={()=>handleCart(product)} className="btn btn-outline-primary my-5">{cartBtn}</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductDetail