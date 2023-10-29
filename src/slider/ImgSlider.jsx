import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'; // Import the slick carousel styles
import 'slick-carousel/slick/slick-theme.css';
import ava01 from '../images/ava-1.jpg'
import ava02 from '../images/ava-2.jpg'
import ava03 from '../images/ava-3.jpg'
import template1img from '../images/template/realtemp1.png'
import template2img from '../images/template/realtemp2.png'
import template3img from '../images/template/realtemp3.png'
import template4img from '../images/template/template4img.png'
import { useNavigate } from 'react-router-dom'
import '../resources/maintemplate.css'

const ImgSlider = () => {
    const navigate = useNavigate()
    const templating = [
        {
          title: "Resume Template 1",
          image: template1img
        },
        {
          title: "Resume Template 2",
          image: template2img
        },
        {
          title: "Resume Template 3",
          image: template3img
        },
        {
          title: "Resume Template 4",
          image: template4img
        },]
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlider: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: { // Corrected 'settings' key here
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <Slider {...settings}>
      {templating.map((item, index) => (
        <div className='testimonial py-4 px-3' key={index}>
          <div className='d-flex align-items-center gap-4 mt-3'>
            <div className='template1' style={{ width: 500 }}>
              <img src={item.image} height={400} alt={item.title} className='slid__img'/>
              <div id='text'>
               
                <button className='slid-btn'
                  id='temBtn'
                  onClick={() => {
                    // Implement your navigation logic here, e.g., using React Router
                    navigate(`/template/${index + 1}`);
                  }}
                >
                  Try
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

  

export default ImgSlider