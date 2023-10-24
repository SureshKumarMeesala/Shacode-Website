import React, { useState } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';

import testimonialNew from '../../../src/SrcImages/testiminial.jpg'





export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const testimonialData = [
    {
      // testimonialThumb: '/images/testimonial_1.jpeg',
      testimonialText:
        'Shacode transformed our online presence. Their expertise in web development, SEO, and digital marketing is truly exceptional. We are impressed by their commitment to quality and their unique blend of technology and spirituality. Shacode is more than a service provider; they are a trusted partner in our digital success.',
      avatarName: 'Manoj',
      avatarDesignation: 'Agency Manager',
      ratings: '5',
    },
    {
      // testimonialThumb: '/images/testimonial_2.jpeg',
      testimonialText:
        'Choosing Shacode was one of the best decisions we made for our business. Their teams experience shines through in every project they tackle. Their websites are not just visually stunning but also incredibly functional. Their digital marketing strategies have boosted our online reach, and their dedication is unmatched.',
      avatarName: 'Ashok',
      avatarDesignation: '',
      ratings: '5',
    },
    {
      // testimonialThumb: '/images/testimonial_3.jpeg',
      testimonialText:
        'As a client of Shacode, I can confidently say that they are masters of their craft. They have a deep understanding of web development, SEO, and digital marketing, and they have consistently delivered outstanding results. Their name spiritual inspiration resonates in their work, and the results truly exceed expectations.',
      avatarName: 'Ajay',
      avatarDesignation: 'All Fix Automotive',
      ratings: '4.5',
    },
    {
      // testimonialThumb: '/images/testimonial_1.jpeg',
      testimonialText:
        'I have had the privilege of working with Shacode on several projects, and each time they have exceeded my expectations. Their team knowledge, attention to detail, and commitment to delivering results make them stand out. Shacode is not just a service provider; they are a partner in success.',
      avatarName: 'Harish',
      avatarDesignation: '',
      ratings: '4.5',
    },
  ];
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        <Spacing lg="130" md="80" />
        <Div className="cs-shape_3 cs-to_up">
          <img src="/images/shape_1.svg" alt="Shape" />
        </Div>
        <Div className="container">
          <Div className="cs-testimonial_slider">
            <Div className="cs-testimonial_slider_left">
              <Slider
                asNavFor={nav1}
                ref={slider2 => setNav2(slider2)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                centerMode={true}
                centerPadding="0px"
                arrows={false}
              >
                {testimonialData.map((item, index) => (
                  <Div className="slider-nav_item" key={index}>
                    <Div className="cs-rotate_img">
                      <Div className="cs-rotate_img_in">
                        <img src={testimonialNew} alt="Thumb" />
                      </Div>
                    </Div>
                  </Div>
                ))}
              </Slider>
            </Div>
            <Div className="cs-testimonial_slider_right">
              <Slider
                asNavFor={nav2}
                ref={slider1 => setNav1(slider1)}
                prevArrow={<SlickArrowLeft />}
                nextArrow={<SlickArrowRight />}
                className="cs-arrow_style1"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index}>
                    <Testimonial
                      testimonialText={item.testimonialText}
                      avatarName={item.avatarName}
                      avatarDesignation={item.avatarDesignation}
                      ratings={item.ratings}
                    />
                  </Div>
                ))}
              </Slider>
            </Div>
          </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
