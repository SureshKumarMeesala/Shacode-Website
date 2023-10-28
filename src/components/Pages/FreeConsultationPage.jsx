



// import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Div from '../Div';
import PageHeading from '../PageHeading';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import ContactInfoWidget from '../Widget/ContactInfoWidget';

import FreeConsultation from '../FreeConsultation/FreeConsultation';




export default function FreeConsultationPage() {
  pageTitle('Contact Us');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <PageHeading
        title="30 mins Free Consultation"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Free Consultation"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-4">
            <SectionHeading
              title="Book a 30 mins <br/>Free Consultation"
              subtitle=" "
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-8 HubspotMeeting">
             <FreeConsultation />
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
