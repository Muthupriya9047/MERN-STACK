import React from 'react';
import '../App.css';
const Card =({src,title,description}) =>{
    return(
        <div className='Card1'>
            <div className='imgg'>
                <img src = {src} alt= {title} />
            </div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};
export default Card;
