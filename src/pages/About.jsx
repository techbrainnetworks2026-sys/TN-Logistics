import React from 'react';
import ContactForm from '../components/ContactForm';
import IndustriesList from '../components/IndustriesList';
import ServicesList from '../components/ServicesList';
import ContactDetails from '../components/ContactDetails';

function About() {
  return (
    <div className="about-page">
      <section className="about-content">
        <h1>About Us</h1>
        <p>Techbrain Networks is a leading Software Product Development company that specializes in AI, IoT, Big data, Blockchain, Cloud Computing, Quantum Computing and Digital Marketing.</p>
        <h2>Vision</h2>
        <p>We aspire to be a global leader in technology innovation, setting new benchmarks for excellence. Our goal is to create a future where technology elevates the quality of life, fosters sustainability, and drives growth and collaboration on a global scale, shaping a smarter, more connected world.</p>
        <h2>Mission</h2>
        <p>We are dedicated to empowering businesses and individuals globally with cutting-edge technology solutions that drive innovation, efficiency, and sustainability. Our commitment is to deliver reliable, scalable, and secure products across diverse industries, enabling our clients to excel in a rapidly evolving digital landscape.</p>
        <h2>Passion</h2>
        <p>Our passion for research and development fuels our relentless pursuit of elegant solutions to complex challenges. Every product and service reflects our commitment to innovation and excellence. We push the boundaries of what's possible to inspire the future of technology and build a world where possibilities are limitless.</p>
        <div className="team-section">
          <h2>Our Team</h2>
          <p>We are revolutionizing the future of technology with 480 innovative products spanning 24 industries. Starting in 2027, our solutions will reach 30 countries, transforming industries and improving lives. Our mission is to make advanced technology accessible to all, creating a global impact and shaping a brighter future.</p>
          <h3>Ramkumar Arunachalam</h3>
          <p>Founder of Techbrain Networks</p>
        </div>
        <ContactForm />
        <IndustriesList />
        <ServicesList />
        <ContactDetails />
      </section>
    </div>
  );
}

export default About;