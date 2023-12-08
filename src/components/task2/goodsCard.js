import React from 'react';

const GoodsCard = (props) => {
    const {image, name, price} = props;

    console.log(props);

    return (
        <div className='goods-card'>
            <img className='fruit-image' src={image} alt={name} />
            <div className='info'>
                <div className='name-container'>
                    <div className='rectangle'></div>
                    <h3 className='name'>{name}</h3>
                </div>
                <p className='price'>Price: {price} UAH</p>
            </div>
        </div>
    );
};

export default GoodsCard;
