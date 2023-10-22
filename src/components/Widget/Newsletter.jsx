import React from 'react'
// import Div from '../Div'

import HubspotForm from 'react-hubspot-form'


export default function Newsletter() {

  




  return (
    <>
         <h2 className="cs-widget_title">Subscribe Us</h2>
         <HubspotForm
            portalId='44193624'
            formId='50853c88-9c5d-4c32-bbb0-f7fb52f6ccb1'
            onSubmit={() => console.log('Submit!')}
            onReady={(form) => console.log('Form ready!')}
            loading={<div>Loading...</div>}
            css=""
            cssClass="Shacode-Hubspot"
            
            />
         </>
  )
}








// export default function Newsletter({title, subtitle, placeholder}) {

  




//   return (
//     <>
//       {title && <h2 className="cs-widget_title">{title}</h2>}
//       <Div className="cs-newsletter cs-style1">
//         <form action="#" className="cs-newsletter_form">
//           <input type="email" name="EMAIL" className="cs-newsletter_input" placeholder={placeholder}  />
//           <button className="cs-newsletter_btn" type="submit" ><span>Send</span></button>
//         </form>
//         <Div className="cs-newsletter_text">{subtitle}</Div>
//       </Div>
//     </>
//   )
// }
