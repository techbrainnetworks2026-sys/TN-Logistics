import React from 'react';
import ContactForm from '../components/ContactForm';
import IndustriesList from '../components/IndustriesList';
import ServicesList from '../components/ServicesList';

function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-content">
        <h1>Contact Us</h1>
        <p>Your all-in-one stop for digital products. We offer both digital and physical products that meet our customer's requirements. If you're looking for customized solutions to power up your business, we'll be happy to help out!</p>
        <div className="addresses">
          <div className="address-item">
            <h3>India</h3>
            <p>Thanjavur<br />6/12 Papa vaikal Street, Ayyampettai Post<br />Papanasam Taluk<br />Thanjavur 614201, Tamilnadu, India.</p>
          </div>
          <div className="address-item">
            <h3>United Kingdom</h3>
            <p>London<br />71-75 Shelton Street, Covent Garden,<br />London, WC2H 9JQ, United Kingdom.</p>
          </div>
        </div>
        <div className="contact-info">
          <p><strong>Phone:</strong> +91 8754906714</p>
          <p><strong>Email:</strong> contact@techbrainnetworks.com</p>
        </div>
        <ContactForm />
        <IndustriesList />
        <ServicesList />
      </section>
    </div>
  );
}

export default Contact;