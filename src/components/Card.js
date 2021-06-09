import React from 'react';
import './../index.js'

const Card = ({ singleData }) => {
    return (
        <div className="card hover:translate-x-1">
            <img className="object-cover w-full h-48" src={singleData.img} alt="" />
            <div className="m-3">
                <span className="block font-bold text-gray-600 text-lg">{singleData.dishName}</span>
                <span className="block font-light text-sm">{`Recipe by ${singleData.recipeBy}`}</span>
            </div>
        </div>
    );
};

export default Card;