import React from 'react'

const ContactUs = () => {
    return (
        <div>
            <section id="contact-us" data-component="Contact">
        <div className="container">
          <div>
            <h1 className="text-center p-5 pt-0 m-5 text-uppercase" style={{letterSpacing: '1px', fontWeight: 800, fontSize: '60px', color: '#313262'}}>Contact Us
            </h1>
          </div>
          <div id="address" className="pb-5">
            <div>
              <p>Address</p>
              <p>Plot No.52, Old Subhedar Lay Out</p>
              <p>Post Ayodyanagar,</p>
              <p>Near Police Quarter,</p>
              <p>Nagpur-440024, Maharashtra, India</p>
            </div>
            <div>
              <p>Email</p>
              <p>info@kshitijtechnologies.com</p>
              <p>Kshitijelectronics@yahoo.in</p>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}

export default ContactUs;
