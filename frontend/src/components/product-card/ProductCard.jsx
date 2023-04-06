import React from 'react';
import './productcard.css';

const ProductCard = ({imageUrl,data,prodName,prodPrice}) => {
  return (
    <div className='e-commerce-product-card'>
      <img className='card-imgg' src={imageUrl} alt="" />
      <div className="details">
          {data.map((item,index) => <button key={index} className='card-btn'>{item}</button>) }
      </div>
      <div className="info">
        <p className='name'>{prodName}</p>
        <p>{prodPrice}</p>
      </div>
    </div>
  )
}

export default ProductCard;
