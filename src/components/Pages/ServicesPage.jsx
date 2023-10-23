import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Card from '../Card'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
// import PricingTableList from '../PricingTable/PricingTableList'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from '../Spacing'
import Button from '../Button'
import IconBox from '../IconBox'

export default function ServicesPage() {
  pageTitle('Service');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <PageHeading 
        title='Services'
        bgSrc='images/service_hero_bg.jpeg'
        pageLinkText='Services'
      />
      <Spacing lg='150' md='80'/>
      <Div className='cs-shape_wrap_4'>
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title='Services we can help you with' 
                subtitle='What Can We Do'
              />
              <Spacing lg='90' md='45'/>
            </Div>
            <Div className='col-xl-8'>
              <Div className='row'>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='UI/UX Development'
                    link='/service/ui-ux-design'
                    src='/images/service_1.jpeg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='React.js UI Development'
                    link='/service/reactjs-development'
                    src='/images/service_2.jpeg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Digital Marketing'
                    link='/service/digital-marketing'
                    src='/images/service_3.jpeg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Wordpress Development'
                    link='/service/technology'
                    src='/images/service_4.jpeg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  {/* <Card
                    title='Consultancy'
                    link='/service/consultancy'
                    src='/images/service_5.jpeg'
                    alt='Service'
                  /> */}
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  {/* <Card
                    title='Creative Design'
                    link='/service/creative-design'
                    src='/images/service_6.jpeg'
                    alt='Service'
                  /> */}
                  <Spacing lg='0' md='30'/>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      {/* <Div className="container">
        <SectionHeading
          title='Providing best <br/>pricing for client' 
          subtitle='Pricing & Packaging'
        />
        <Spacing lg='85' md='40'/>
        <PricingTableList/>
      </Div> */}

          <Spacing lg='145' md='80'/>
                <Div className="container">
                  <SectionHeading 
                    title='UI / UX Developement ' 
                    subtitle='UI/UX Design' 
                    variant='cs-style1 text-center'
                  />
                  <Spacing lg='90' md='45'/>
                  <Div className="row">
                    <Div className="col-lg-4">
                      <IconBox
                        icon='/images/icons/service_icon_1.svg'
                        title='Sketching'
                        subtitle='Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium also a doloremque laudantium, totam remain beatae vitae dictaro enim ipsam sunt explicabo.'
                      />
                      <Spacing lg='30' md='30'/>
                    </Div>
                    <Div className="col-lg-4">
                      <IconBox
                        icon='/images/icons/service_icon_2.svg'
                        title='Wireframing'
                        subtitle='Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium also a doloremque laudantium, totam remain beatae vitae dictaro enim ipsam sunt explicabo.'
                      />
                      <Spacing lg='30' md='30'/>
                    </Div>
                    <Div className="col-lg-4">
                      <IconBox
                        icon='/images/icons/service_icon_3.svg'
                        title='Prototyping'
                        subtitle='Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium also a doloremque laudantium, totam remain beatae vitae dictaro enim ipsam sunt explicabo.'
                      />
                      <Spacing lg='30' md='30'/>
                    </Div>
                  </Div>
                </Div>
                <Spacing lg='120' md='50'/>
                <Div className="container">
                  <Div className="row align-items-center">
                    <Div className="col-xl-5 col-lg-6">
                      <Div className="cs-radius_15 cs-shine_hover_1">
                        <img src="/images/service_img_1.jpeg" alt="Service" className='cs-radius_15 w-100' />
                      </Div>
                      <Spacing lg='0' md='40'/>
                    </Div>
                    <Div className="col-lg-6 offset-xl-1">
                      <h2 className="cs-font_50 cs-m0">Below our most design related services</h2>
                      <Spacing lg='50' md='30'/>
                      <Div className="row">
                        <Div className="col-lg-6">
                          <Button btnLink='/service/service-details' btnText='Web page design' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='eCommerce design' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='Landing page' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='Email template' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='Application design' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='Illustration' variant='cs-type2'/>
                          <Spacing lg='0' md='10'/>
                        </Div>
                        <Div className="col-lg-6">
                          <Button btnLink='/service/service-details' btnText='Infographic design' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='Mobile apps design' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='Banner, brochure, card' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='Other design' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                        </Div>
                      </Div>
                    </Div>
                  </Div>
                </Div>
                <Spacing lg='125' md='55'/>



          <Spacing lg='145' md='80'/>
                <Div className="container">
                  <SectionHeading 
                    title='React Js UI Developement' 
                    subtitle='UI/UX Design' 
                    variant='cs-style1 text-center'
                  />
                  <Spacing lg='90' md='45'/>
                  <Div className="row">
                    <Div className="col-lg-4">
                      <IconBox
                        icon='/images/icons/service_icon_1.svg'
                        title='Sketching'
                        subtitle='Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium also a doloremque laudantium, totam remain beatae vitae dictaro enim ipsam sunt explicabo.'
                      />
                      <Spacing lg='30' md='30'/>
                    </Div>
                    <Div className="col-lg-4">
                      <IconBox
                        icon='/images/icons/service_icon_2.svg'
                        title='Wireframing'
                        subtitle='Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium also a doloremque laudantium, totam remain beatae vitae dictaro enim ipsam sunt explicabo.'
                      />
                      <Spacing lg='30' md='30'/>
                    </Div>
                    <Div className="col-lg-4">
                      <IconBox
                        icon='/images/icons/service_icon_3.svg'
                        title='Prototyping'
                        subtitle='Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium also a doloremque laudantium, totam remain beatae vitae dictaro enim ipsam sunt explicabo.'
                      />
                      <Spacing lg='30' md='30'/>
                    </Div>
                  </Div>
                </Div>
                <Spacing lg='120' md='50'/>
                <Div className="container">
                  <Div className="row align-items-center">
                    <Div className="col-xl-5 col-lg-6">
                      <Div className="cs-radius_15 cs-shine_hover_1">
                        <img src="/images/service_img_1.jpeg" alt="Service" className='cs-radius_15 w-100' />
                      </Div>
                      <Spacing lg='0' md='40'/>
                    </Div>
                    <Div className="col-lg-6 offset-xl-1">
                      <h2 className="cs-font_50 cs-m0">Below our most design related services</h2>
                      <Spacing lg='50' md='30'/>
                      <Div className="row">
                        <Div className="col-lg-6">
                          <Button btnLink='/service/service-details' btnText='Web page design' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='eCommerce design' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='Landing page' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='Email template' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='Application design' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='Illustration' variant='cs-type2'/>
                          <Spacing lg='0' md='10'/>
                        </Div>
                        <Div className="col-lg-6">
                          <Button btnLink='/service/service-details' btnText='Infographic design' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='Mobile apps design' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='Banner, brochure, card' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='Other design' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                        </Div>
                      </Div>
                    </Div>
                  </Div>
                </Div>
                <Spacing lg='125' md='55'/>


          <Spacing lg='145' md='80'/>
                <Div className="container">
                  <SectionHeading 
                    title='Digital Marketing' 
                    subtitle='UI/UX Design' 
                    variant='cs-style1 text-center'
                  />
                  <Spacing lg='90' md='45'/>
                  <Div className="row">
                    <Div className="col-lg-4">
                      <IconBox
                        icon='/images/icons/service_icon_1.svg'
                        title='Sketching'
                        subtitle='Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium also a doloremque laudantium, totam remain beatae vitae dictaro enim ipsam sunt explicabo.'
                      />
                      <Spacing lg='30' md='30'/>
                    </Div>
                    <Div className="col-lg-4">
                      <IconBox
                        icon='/images/icons/service_icon_2.svg'
                        title='Wireframing'
                        subtitle='Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium also a doloremque laudantium, totam remain beatae vitae dictaro enim ipsam sunt explicabo.'
                      />
                      <Spacing lg='30' md='30'/>
                    </Div>
                    <Div className="col-lg-4">
                      <IconBox
                        icon='/images/icons/service_icon_3.svg'
                        title='Prototyping'
                        subtitle='Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium also a doloremque laudantium, totam remain beatae vitae dictaro enim ipsam sunt explicabo.'
                      />
                      <Spacing lg='30' md='30'/>
                    </Div>
                  </Div>
                </Div>
                <Spacing lg='120' md='50'/>
                <Div className="container">
                  <Div className="row align-items-center">
                    <Div className="col-xl-5 col-lg-6">
                      <Div className="cs-radius_15 cs-shine_hover_1">
                        <img src="/images/service_img_1.jpeg" alt="Service" className='cs-radius_15 w-100' />
                      </Div>
                      <Spacing lg='0' md='40'/>
                    </Div>
                    <Div className="col-lg-6 offset-xl-1">
                      <h2 className="cs-font_50 cs-m0">Below our most design related services</h2>
                      <Spacing lg='50' md='30'/>
                      <Div className="row">
                        <Div className="col-lg-6">
                          <Button btnLink='/service/service-details' btnText='Web page design' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='eCommerce design' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='Landing page' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='Email template' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='Application design' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='Illustration' variant='cs-type2'/>
                          <Spacing lg='0' md='10'/>
                        </Div>
                        <Div className="col-lg-6">
                          <Button btnLink='/service/service-details' btnText='Infographic design' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='Mobile apps design' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='Banner, brochure, card' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='Other design' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                        </Div>
                      </Div>
                    </Div>
                  </Div>
                </Div>
                <Spacing lg='125' md='55'/>


          <Spacing lg='145' md='80'/>
                <Div className="container">
                  <SectionHeading 
                    title='Wordpress Development' 
                    subtitle='UI/UX Design' 
                    variant='cs-style1 text-center'
                  />
                  <Spacing lg='90' md='45'/>
                  <Div className="row">
                    <Div className="col-lg-4">
                      <IconBox
                        icon='/images/icons/service_icon_1.svg'
                        title='Sketching'
                        subtitle='Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium also a doloremque laudantium, totam remain beatae vitae dictaro enim ipsam sunt explicabo.'
                      />
                      <Spacing lg='30' md='30'/>
                    </Div>
                    <Div className="col-lg-4">
                      <IconBox
                        icon='/images/icons/service_icon_2.svg'
                        title='Wireframing'
                        subtitle='Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium also a doloremque laudantium, totam remain beatae vitae dictaro enim ipsam sunt explicabo.'
                      />
                      <Spacing lg='30' md='30'/>
                    </Div>
                    <Div className="col-lg-4">
                      <IconBox
                        icon='/images/icons/service_icon_3.svg'
                        title='Prototyping'
                        subtitle='Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium also a doloremque laudantium, totam remain beatae vitae dictaro enim ipsam sunt explicabo.'
                      />
                      <Spacing lg='30' md='30'/>
                    </Div>
                  </Div>
                </Div>
                <Spacing lg='120' md='50'/>
                <Div className="container">
                  <Div className="row align-items-center">
                    <Div className="col-xl-5 col-lg-6">
                      <Div className="cs-radius_15 cs-shine_hover_1">
                        <img src="/images/service_img_1.jpeg" alt="Service" className='cs-radius_15 w-100' />
                      </Div>
                      <Spacing lg='0' md='40'/>
                    </Div>
                    <Div className="col-lg-6 offset-xl-1">
                      <h2 className="cs-font_50 cs-m0">Below our most design related services</h2>
                      <Spacing lg='50' md='30'/>
                      <Div className="row">
                        <Div className="col-lg-6">
                          <Button btnLink='/service/service-details' btnText='Web page design' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='eCommerce design' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='Landing page' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='Email template' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='Application design' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='Illustration' variant='cs-type2'/>
                          <Spacing lg='0' md='10'/>
                        </Div>
                        <Div className="col-lg-6">
                          <Button btnLink='/service/service-details' btnText='Infographic design' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='Mobile apps design' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='Banner, brochure, card' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                          <Button btnLink='/service/service-details' btnText='Other design' variant='cs-type2'/>
                          <Spacing lg='20' md='10'/>
                        </Div>
                      </Div>
                    </Div>
                  </Div>
                </Div>
                <Spacing lg='125' md='55'/>

      <Spacing lg='125' md='55'/>
      <TestimonialSlider/>
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Cta 
          title='Let’s disscuse make <br />something <i>cool</i> together' 
          btnText='Apply For Meeting' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}
