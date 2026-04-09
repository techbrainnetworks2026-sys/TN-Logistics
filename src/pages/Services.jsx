import React from 'react';
import ContactForm from '../components/ContactForm';
import IndustriesList from '../components/IndustriesList';
import ServicesList from '../components/ServicesList';
import ContactDetails from '../components/ContactDetails';

function Services() {
  return (
    <div className="services-page">
      <section className="services-content">
        <h1>Services</h1>
        <p>We take pride in being an innovative organization where the digital revolution thrives and new advances are always on the horizon.</p>
        <div className="service-item">
          <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Software Development" style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1.5rem'}} />
          <h2>Software Development</h2>
          <p>Techbrain Networks offers a full range of software development services, specializing in creating innovative and customized solutions for businesses across multiple industries. We develop robust, scalable, and secure applications for web, mobile, and desktop platforms, ensuring they are tailored to meet the unique requirements of each client. With a focus on quality and efficiency, our team leverages the latest technologies to deliver high-performing software that drives growth and optimizes operations.</p>
        </div>
        <div className="service-item">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Hardware Engineering" style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1.5rem'}} />
          <h2>Hardware Engineering</h2>
          <p>Techbrain Networks offers expert hardware engineering services designed to bring innovative and reliable products to market. Our team specializes in circuit design, embedded systems, electronics lab work, and hardware prototyping. We work across industries, including aerospace, automotive, healthcare, and more, ensuring that our solutions meet stringent quality and safety standards.</p>
        </div>
        <div className="service-item">
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Product Design" style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1.5rem'}} />
          <h2>Product Design</h2>
          <p>Techbrain Networks delivers innovative product design services, transforming ideas into market-ready solutions. Our team excels in creating user-centric designs that balance functionality, aesthetics, and usability. We handle everything from concept development and prototyping to final production, ensuring each product meets industry standards and client expectations. With a focus on cutting-edge design technologies and techniques.</p>
        </div>
        <div className="service-item">
          <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Research & Development" style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1.5rem'}} />
          <h2>Research & Development</h2>
          <p>Techbrain Networks offers comprehensive Research & Development (R&D) services, driving innovation and technological advancements for businesses. Our team specializes in exploring new technologies, developing prototypes, and conducting in-depth testing to turn ideas into viable products. We focus on solving complex challenges across industries such as aerospace, healthcare, and technology, ensuring our R&D efforts lead to breakthroughs that enhance efficiency and performance.</p>
        </div>
        <ContactForm />
        <IndustriesList />
        <ServicesList />
        <ContactDetails />
      </section>
    </div>
  );
}

export default Services;