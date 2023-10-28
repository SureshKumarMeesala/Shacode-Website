// import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';
// import { useState } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
// import Portfolio from '../Portfolio';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';


export default function PortfolioPage() {
  pageTitle('Portfolio');
  // const [active, setActive] = useState('all');
  // const [itemShow, setItemShow] = useState(7);
  // const portfolioData = [
  //   {
  //     title: 'Colorful Art Work',
  //     subtitle: 'See Details',
  //     href: '/portfolio/portfolio-details',
  //     src: '/images/portfolio_4.jpeg',
  //     category: 'ui_ux_design',
  //   },
  //   {
  //     title: 'Colorful Art Work',
  //     subtitle: 'See Details',
  //     href: '/portfolio/portfolio-details',
  //     src: '/images/portfolio_5.jpeg',
  //     category: 'logo_design',
  //   },
  //   {
  //     title: 'Colorful Art Work',
  //     subtitle: 'See Details',
  //     href: '/portfolio/portfolio-details',
  //     src: '/images/portfolio_6.jpeg',
  //     category: 'web_design',
  //   },
  //   {
  //     title: 'Colorful Art Work',
  //     subtitle: 'See Details',
  //     href: '/portfolio/portfolio-details',
  //     src: '/images/portfolio_7.jpeg',
  //     category: 'mobile_apps',
  //   },
  //   {
  //     title: 'Colorful Art Work',
  //     subtitle: 'See Details',
  //     href: '/portfolio/portfolio-details',
  //     src: '/images/portfolio_8.jpeg',
  //     category: 'ui_ux_design',
  //   },
  //   {
  //     title: 'Colorful Art Work',
  //     subtitle: 'See Details',
  //     href: '/portfolio/portfolio-details',
  //     src: '/images/portfolio_9.jpeg',
  //     category: 'web_design',
  //   },
  //   {
  //     title: 'Colorful Art Work',
  //     subtitle: 'See Details',
  //     href: '/portfolio/portfolio-details',
  //     src: '/images/portfolio_10.jpeg',
  //     category: 'logo_design',
  //   },
  //   {
  //     title: 'Colorful Art Work',
  //     subtitle: 'See Details',
  //     href: '/portfolio/portfolio-details',
  //     src: '/images/portfolio_4.jpeg',
  //     category: 'ui_ux_design',
  //   },
  //   {
  //     title: 'Colorful Art Work',
  //     subtitle: 'See Details',
  //     href: '/portfolio/portfolio-details',
  //     src: '/images/portfolio_5.jpeg',
  //     category: 'logo_design',
  //   },
  //   {
  //     title: 'Colorful Art Work',
  //     subtitle: 'See Details',
  //     href: '/portfolio/portfolio-details',
  //     src: '/images/portfolio_6.jpeg',
  //     category: 'web_design',
  //   },
  // ];
  // const categoryMenu = [
  //   {
  //     title: 'Web Design',
  //     category: 'web_design',
  //   },
  //   {
  //     title: 'UI/UX Design',
  //     category: 'ui_ux_design',
  //   },
  //   {
  //     title: 'Mobile Apps',
  //     category: 'mobile_apps',
  //   },
  //   {
  //     title: 'Logo Design',
  //     category: 'logo_design',
  //   },
  // ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Portfolio"
        bgSrc="images/portfolio_hero_bg.jpeg"
        pageLinkText="Portfolio"
      />
      {/* <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Some recent work" subtitle="Our Portfolio" />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === 'all' ? 'active' : ''}>
                <span onClick={() => setActive('all')}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? 'active' : ''}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${
                index === 3 || index === 6 ? 'col-lg-8' : 'col-lg-4'
              } ${
                active === 'all'
                  ? ''
                  : !(active === item.category)
                  ? 'd-none'
                  : ''
              }`}
              key={index}
            >
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>

        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ''
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div> */}
      <Spacing lg="145" md="80" />


      <Div className="container">
        <img src="/images/portfolio_1.webp" alt="Details" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40'/>
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title='CAV Assessment App' 
              subtitle='Creative' 
            >
              <Spacing lg='40' md='20'/>
              <p>Cav Assessment is a Route Assessment tool to manage Auto Pilot Vehicle I worked on this project for as a Front-End Developer.</p>
              <Spacing lg='10' md='10'/>
             </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Project Info -</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3>
                <p className='cs-m0'>Web App</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
                <p className='cs-m0'>United Kindom</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Software:</h3>
                <p className='cs-m0'>React Js</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>ICAV Tech</p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg='65' md='10'/>
      </Div>


      <Div className="container">
        <img src="/images/portfolio_2.webp" alt="Details" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40'/>
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title='Cav GUI App' 
              subtitle='Creative' 
            >
              <Spacing lg='40' md='20'/>
              <p>Cav GUI is a Building Electricity management tool to manage a building electricity in a single DashboardI worked on this project for as a Front-End Developer.</p>
              <Spacing lg='10' md='10'/>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Project Info -</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3>
                <p className='cs-m0'>Web App</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
                <p className='cs-m0'>United Kindom</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Software:</h3>
                <p className='cs-m0'>React Js</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>ICAV Tech</p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg='65' md='10'/>
      </Div>

      <Div className="container">
        <img src="/images/allfix.jpg" alt="Details" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40'/>
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title='All Fix Automotive' 
              subtitle='Creative' 
            >
              <Spacing lg='40' md='20'/>
              <p>All Fix Automotive is a Austyralian Based Ccar Garrage Company. I developed this website in Wordpress.</p>
              <Spacing lg='10' md='10'/>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Project Info -</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3>
                <p className='cs-m0'>Website</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
                <p className='cs-m0'>Australia</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Software:</h3>
                <p className='cs-m0'>Wordpress</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>All Fix Automotive </p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg='65' md='10'/>
      </Div>

      <Div className="container">
        <img src="/images/portfolio_3.jpg" alt="Details" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40'/>
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title='Solid Online Website' 
              subtitle='Creative' 
            >
              <Spacing lg='40' md='20'/>
              <p>This is the Solid Online Company Website one of my best works.</p>
              <Spacing lg='10' md='10'/>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Project Info -</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3>
                <p className='cs-m0'>Websote</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
                <p className='cs-m0'>Europe</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Software:</h3>
                <p className='cs-m0'>Wordpress</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Employee:</h3>
                <p className='cs-m0'>Solid Online </p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg='65' md='10'/>
      </Div>

      <Cta
        title="shacodeinda@gmail.com"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      />
    </>
  );
}
