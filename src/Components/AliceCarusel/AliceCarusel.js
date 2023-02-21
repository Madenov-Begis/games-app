import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import SinglePage from '../SinglePage/SingleContent';


const Carusel = ({content}) => {
    const responsive = {
        0: { 
            items: 1
        },
        568: { 
            items: 2
        },
        768: { 
            items: 3
        },
        992: { 
            items: 4
        },
        1024: {
            items: 5, 
            itemsFit: 'contain'
        },
    };
    const items = content.map((item, index) => {
            return <SinglePage item={item} key ={index}/>
        });
  return (
    <AliceCarousel 
        mouseTracking 
        items={items}
        infinite
        autoPlay
        autoPlayInterval={2000}
        disableButtonsControls
        responsive={responsive} />
  );
}

export default Carusel