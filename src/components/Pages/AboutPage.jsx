import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import FunFact from '../FunFact';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
// import TeamSlider from '../Slider/TeamSlider';
import Spacing from '../Spacing';

export default function AboutPage() {
  pageTitle('About');

  // FunFact Data
  const funfaceData = [
    {
      title: 'Websites Completed',
      factNumber: '150',
    },
    {
      title: 'Project Completed',
      factNumber: '20',
    },
    {
      title: 'React Projects',
      factNumber: '15',
    },
    {
      title: 'Digital Marketing',
      factNumber: '30',
    },
  ];


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="About Us"
        bgSrc="images/about_hero_bg.jpeg"
        pageLinkText="About Us"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="Your trusted partner for business"
              subtitle="About Shacode"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              Shacode, we're more than just a service provider; we're your trusted partner in achieving digital excellence. With a proven track record in web development, on-page SEO, and digital marketing, we're dedicated to your success.
              Our commitment to delivering exceptional online solutions is unwavering. Join forces with Shacode, and let us help you realize your digital potential.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/about_img_1.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-7">
            <img
              src="/images/about_img_2.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-5">
            <img
              src="/images/about_img_3.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}

      {/* Start Fun Fact Section */}
      <Div className="container">
        <FunFact
          title="My fun fact"
          subtitle="Successfully completed and launched over 50 projects in my 5-year web development journey. That's more websites than I have fingers to count!"
          data={funfaceData}
        />
      </Div>
      {/* End Fun Fact Section */}

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/about_img_4.jpeg"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="Elevate Your Digital Journey with Shacode"
              subtitle="Why Choose Shacode"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                 Shacode, we're your ultimate choice for web development, on-page SEO, and digital marketing services. We stand out in the digital landscape as your dedicated partner in achieving online success. With a wealth of experience spanning over five years, we've honed our skills to create engaging websites, optimize online visibility, and implement effective digital marketing strategies.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                  Our passion is to blend technology with spiritual essence, and our name reflects our unique approach, inspired by Lord Lakshmi and Lord Durga. We're committed to delivering results that go beyond expectations. Choose Shacode, and embark on a journey of digital transformation, where creativity and expertise converge to set your business apart.  
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

      {/* Start Team Section */}
      {/* <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div> */}
      {/* End Team Section */}

      {/* Start CTA Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Let’s discuss make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
