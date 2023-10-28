// import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Div from '../Div';
import PageHeading from '../PageHeading';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import { Link } from 'react-router-dom'

import HubspotForm from 'react-hubspot-form'





export default function ContactPage() {
  pageTitle('Contact Us');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <PageHeading
        title="Contact Us"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Contact"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Do you have a project <br/>in your mind?"
              subtitle="Getting Touch"
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="55" md="30" />
            <Link to='/free-consultation' className="BookMeeting" style={{marginTop: '20'}}>
             <h2>Book a Meeting <h2 className='HereName'>Here</h2> </h2>
             </Link>
            <Spacing lg="0" md="50" />
            
             
          </Div>
          <Div className="col-lg-6 Hubspot-Form">
            
          <HubspotForm
            portalId='44193624'
            formId='ce3e3a7a-d7a8-4703-8105-76de2a8e03a9'
            onSubmit={() => console.log('Submit!')}
            onReady={(form) => console.log('Form ready!')}
            loading={<div>Loading...</div>}
            
            />


          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="cs-google_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243208.19691506287!2d83.097779573441!3d17.73860341299789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c20395498468!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1698495010575!5m2!1sen!2sin"
          allowFullScreen
          title="Google Map"
        />
        
      </Div>




      <Spacing lg="50" md="40" />
    </>
  );
}
