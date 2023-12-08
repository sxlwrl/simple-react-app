import React from 'react';

import GoodsCard from './goodsCard';

import Apple from '../../images/apple.svg';
import Avocado from '../../images/avocado.svg';
import DragonFruit from '../../images/dragon.svg';
import Mango from '../../images/mango.svg';
import Banana from '../../images/banana.svg';
import PassionFruit from '../../images/passion.svg';

const dummyGoodsData = [
    {
        id: 0,
        name: 'Avocado',
        price: 50,
        image: Avocado,
    },
    {
        id: 1,
        name: 'Apple',
        price: 25,
        image: Apple,
    },
    {
        id: 2,
        name: 'Passion fruit',
        price: 150,
        image: PassionFruit,
    },
    {
        id: 3,
        name: 'Dragon fruit',
        price: 210,
        image: DragonFruit,
    },
    {
        id: 4,
        name: 'Banana',
        price: 65,
        image: Banana,
    },
    {
        id: 5,
        name: 'Mango',
        price: 90,
        image: Mango,
    }
];

const GoodsGallery = function () {
    return (
        <div className='app'>
            {dummyGoodsData.map((item) => (
                <GoodsCard key={item.id} {...item} />
            ))}
        </div>
    );
};

export default GoodsGallery



