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
// import Button from '../Button'
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
                    // link='/service/ui-ux-design'
                    src='/images/service_1.jpeg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='React.js UI Development'
                    // link='/service/reactjs-development'
                    src='/images/service_2.jpeg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Digital Marketing'
                    // link='/service/digital-marketing'
                    src='/images/service_3.jpeg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Wordpress Development'
                    // link='/service/technology'
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
                        title='User-Centered Design'
                        subtitle='In UI/UX development, a user-centered design approach is paramount. This means we prioritize the needs and preferences of the end-users throughout the design process. By conducting thorough user research, understanding their behaviors, and involving them in testing and feedback, we create interfaces that are intuitive, easy to navigate, and aesthetically pleasing. This user-centric focus ensures that our designs resonate with the target audience and lead to a more engaging and satisfying user experience.'
                      />
                      <Spacing lg='30' md='30'/>
                    </Div>
                    <Div className="col-lg-4">
                      <IconBox
                        icon='/images/icons/service_icon_2.svg'
                        title='Responsive and Accessible Interfaces'
                        subtitle=' In today s digital landscape, users access websites and applications on various devices and platforms. We specialize in creating responsive interfaces that adapt seamlessly to different screen sizes and devices. Furthermore, accessibility is a core principle in our UI/UX development. We design with inclusivity in mind, ensuring that our interfaces are usable by individuals with diverse abilities. This not only expands your reach but also aligns with the principles of equitable design and compliance with accessibility standards.'
                      />
                      <Spacing lg='30' md='30'/>
                    </Div>
                    <Div className="col-lg-4">
                      <IconBox
                        icon='/images/icons/service_icon_3.svg'
                        title='Data-Driven Optimization'
                        subtitle='Our UI/UX development process is not static; it s continuously improved through data-driven optimization. We use analytics and user feedback to monitor user interactions, identify pain points, and uncover opportunities for enhancement. This iterative approach allows us to make informed design decisions, tweak user interfaces for better performance, and ensure that your digital products are always evolving to meet changing user expectations. Data-driven optimization is the key to keeping your digital assets fresh, engaging, and aligned with your business goals.'
                      />
                      <Spacing lg='30' md='30'/>
                    </Div>
                  </Div>
                </Div>
                {/* <Spacing lg='120' md='50'/> */}
                {/* <Div className="container">
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
                </Div> */}
                {/* <Spacing lg='125' md='55'/> */}



              <Spacing lg='145' md='80'/>
                <Div className="container">
                  <SectionHeading 
                    title='React Js UI Development' 
                    subtitle='React Js' 
                    variant='cs-style1 text-center'
                  />
                  <Spacing lg='90' md='45'/>
                  <Div className="row">
                    <Div className="col-lg-4">
                      <IconBox
                        icon='/images/icons/service_icon_1.svg'
                        title='Component-Based Architecture'
                        subtitle='React.js is renowned for its component-based architecture. UI development in React involves breaking the user interface into small, reusable components. This approach enhances code modularity, maintainability, and reusability. Each component can have its state, rendering logic, and lifecycle methods, making it easier to develop and maintain complex user interfaces.'
                      />
                      <Spacing lg='30' md='30'/>
                    </Div>
                    <Div className="col-lg-4">
                      <IconBox
                        icon='/images/icons/service_icon_2.svg'
                        title='Virtual DOM for Efficient Rendering'
                        subtitle='React uses a Virtual DOM (Document Object Model) to optimize rendering. Instead of directly manipulating the actual DOM, React updates a virtual representation of it. By comparing this virtual representation with the real DOM, React minimizes unnecessary updates and re-renders, leading to improved performance. This efficiency is crucial for creating fast and responsive user interfaces.'
                      />
                      <Spacing lg='30' md='30'/>
                    </Div>
                    <Div className="col-lg-4">
                      <IconBox
                        icon='/images/icons/service_icon_3.svg'
                        title='Unidirectional Data Flow'
                        subtitle='React enforces a unidirectional data flow, which ensures predictable data management and minimal bugs. Data flows from parent components to child components through props, and any data changes are managed through state updates and controlled by a parent component. This unidirectional flow simplifies debugging and makes it easier to understand how data changes affect the UI, promoting a more predictable and maintainable codebase.'
                      />
                      <Spacing lg='30' md='30'/>
                    </Div>
                  </Div>
                </Div>
                <Spacing lg='120' md='50'/>
                {/* <Div className="container">
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
                </Div> */}
                {/* <Spacing lg='125' md='55'/> */}


          {/* <Spacing lg='145' md='80'/> */}
                <Div className="container">
                  <SectionHeading 
                    title='Digital Marketing' 
                    subtitle='Digital Marketing' 
                    variant='cs-style1 text-center'
                  />
                  <Spacing lg='90' md='45'/>
                  <Div className="row">
                    <Div className="col-lg-4">
                      <IconBox
                        icon='/images/icons/service_icon_1.svg'
                        title='Targeted Marketing'
                        subtitle='Digital marketing allows you to precisely target your audience. Using data and analytics, you can identify your ideal customers and create marketing campaigns that reach them directly. This targeted approach ensures that your marketing efforts are more cost-effective and likely to generate higher conversion rates.'
                      />
                      <Spacing lg='30' md='30'/>
                    </Div>
                    <Div className="col-lg-4">
                      <IconBox
                        icon='/images/icons/service_icon_2.svg'
                        title='Data-Driven Insights'
                        subtitle='In the digital marketing realm, data is king. With tools and platforms like Google Analytics and social media insights, you can gather a wealth of data about your audience s behavior, preferences, and interactions. This data-driven approach enables you to make informed decisions, refine your marketing strategies, and optimize campaigns for better results.' />
                      <Spacing lg='30' md='30'/>
                    </Div>
                    <Div className="col-lg-4">
                      <IconBox
                        icon='/images/icons/service_icon_3.svg'
                        title='Multi-Channel Reach'
                        subtitle='Digital marketing provides you with the flexibility to reach your audience across multiple channels, including social media, search engines, email, and more. By using various platforms strategically, you can engage with your audience where they spend their time online. This multi-channel approach helps you diversify your online presence and connect with potential customers in different ways, increasing your brand s visibility and engagement.' />
                      <Spacing lg='30' md='30'/>
                    </Div>
                  </Div>
                </Div>
                {/* <Spacing lg='120' md='50'/> */}
                {/* <Div className="container">
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
                </Div> */}
                {/* <Spacing lg='125' md='55'/> */}


          <Spacing lg='145' md='80'/>
                <Div className="container">
                  <SectionHeading 
                    title='Wordpress Development' 
                    subtitle='Wordpress Development' 
                    variant='cs-style1 text-center'
                  />
                  <Spacing lg='90' md='45'/>
                  <Div className="row">
                    <Div className="col-lg-4">
                      <IconBox
                        icon='/images/icons/service_icon_1.svg'
                        title='Scalability'
                        subtitle='WordPress is a highly scalable platform, making it suitable for businesses of all sizes. Whether you are a small startup or a large enterprise, WordPress can grow with your needs. Its modular architecture allows for the addition of features and functionalities as your business expands, ensuring your website remains adaptable and responsive to changing demands.'
                         />
                      <Spacing lg='30' md='30'/>
                    </Div>
                    <Div className="col-lg-4">
                      <IconBox
                        icon='/images/icons/service_icon_2.svg'
                        title='User-Friendly Content Management'
                        subtitle='WordPress offers an intuitive and user-friendly content management system (CMS). It empowers non-technical users to easily update and manage website content. This means you can focus on creating and publishing content without worrying about complex technical details. With its WYSIWYG editor, even those with limited technical knowledge can maintain and update their site effortlessly.'
                      />
                      <Spacing lg='30' md='30'/>
                    </Div>
                    <Div className="col-lg-4">
                      <IconBox
                        icon='/images/icons/service_icon_3.svg'
                        title='Extensive Plugin Ecosystem'
                        subtitle='WordPress boasts a vast ecosystem of plugins and extensions. This extensive library allows you to add various functionalities to your website with ease. Whether you need e-commerce capabilities, SEO optimization, social media integration, or any other feature, there s likely a plugin available. This flexibility enables you to tailor your website to your specific needs, enhancing its functionality and user experience.'           
                        />
                      <Spacing lg='30' md='30'/>
                    </Div>
                  </Div>
                </Div>
                {/* <Spacing lg='120' md='50'/> */}
                {/* <Div className="container">
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
                </Div> */}
                {/* <Spacing lg='125' md='55'/> */}

      <Spacing lg='125' md='55'/>
      <TestimonialSlider/>
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Cta 
          title='Let’s discuss make <br />something <i>cool</i> together' 
          btnText='Apply For Meeting' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}
