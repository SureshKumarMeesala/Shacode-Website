import React from 'react'
import Portfolio from '../Portfolio'
import Div from '../Div'
import Slider from 'react-slick';

export default function PortfolioSlider() {
  const portfolioData = [
    {
      title:'CAV Assessment App',
      subtitle:'See Details',
      href:'/portfolio',
      src:'/images/portfolio_1.webp'
    },
    {
      title:'Cav GUI App',
      subtitle:'See Details',
      href:'/portfolio',
      src:'/images/portfolio_2.webp'
    },
    {
      title:'All Fix Automation Website',
      subtitle:'See Details',
      href:'/portfolio',
      src:'/images/allfix.jpg'
    },
    {
      title:'Solid Online Website',
      subtitle:'See Details',
      href:'/portfolio',
      src:'/images/portfolio_3.jpg'
    }
  ]
  
  /** Slider Settings **/
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  
  return (
    <Slider {...settings} className='cs-slider cs-style3 cs-gap-24'>
      {portfolioData.map((item, index)=> (
        <Div key={index}>
          <Portfolio 
            title={item.title} 
            subtitle={item.subtitle}
            href={item.href}
            src={item.src}
          />
        </Div>
      ))}
    </Slider>
  )
}
