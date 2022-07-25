import './css/ImagesCarousel.css';
import React from 'react';
import { Carousel } from 'primereact/carousel';

function ImagesCarousel({images}) {

    const imageTemplate = (image) => (<img src={image} className='carousel-image' />);

    return ( 
        <Carousel itemTemplate={imageTemplate} value={images} numScroll={1} numVisible={1} autoplayInterval={4000} circular /> 
    );
}

export default ImagesCarousel;