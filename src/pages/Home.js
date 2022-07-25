import './css/Home.css';
import carouselImage1 from '../images/carousel/carousel_image_1.jpg';
import carouselImage2 from '../images/carousel/carousel_image_2.jpg';
import carouselImage3 from '../images/carousel/carousel_image_3.jpg';
import ImagesCarousel from '../components/ImagesCarousel';
import AccommodationCard from '../components/AccommodationCard';
import { React, useEffect, useState } from 'react';
import BomHotelApi from '../services/BomHotelApi';

function Home() {
    const images = [carouselImage1, carouselImage2, carouselImage3];

    const [newestAccommodations, setNewestAccommodations] = useState([]);

    function loadNewestAccommodations() {
        BomHotelApi.get('accommodation/newest').then((response) => setNewestAccommodations(response.data));
    }

    useEffect(() => loadNewestAccommodations, []);

    return ( 
        <div>
            <h2 className='home-welcome-text'>Bem vindo(a) ao Bom Hotel, o melhor lugar para encontrar a melhor hospedagem!</h2>
            <ImagesCarousel images={images}/>

            <h3 className='home-news-text'>Novidades no Bom Hotel:</h3>
            <div className='home-news-container'>
                {newestAccommodations.map((accommodation, index) => <AccommodationCard accommodation={accommodation} key={index}/>)}
            </div>
        </div> 
    );
}

export default Home;