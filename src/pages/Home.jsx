import React from 'react';

function Home({ scrollToSection, products, onSelectProduct }) {
  return (
    <>
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Intelligent Logistics Solutions for Supply Chain Optimization</h1>
          <p>Techbrain Networks delivers cutting-edge AI-driven logistics platforms to streamline your supply chain operations.</p>
          <button className="btn">Get Started</button>
        </div>
      </section>
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>Techbrain Networks is a leading provider of intelligent logistics solutions, leveraging AI and IoT to optimize supply chain management.</p>
        <div>
          <h3>Vision</h3>
          <p>To be the global leader in AI-powered logistics solutions.</p>
        </div>
        <div>
          <h3>Mission</h3>
          <p>Deliver innovative technologies that enhance efficiency and sustainability in logistics.</p>
        </div>
        <div>
          <h3>Passion</h3>
          <p>Committed to revolutionizing the logistics industry through technology.</p>
        </div>
      </section>
      <section id="team" className="team">
        <h2>Our Team</h2>
        <p>Driven by innovation and expertise, our team is growing rapidly.</p>
        <div>
          <h3>Founder: Ramkumar Arunachalam</h3>
          <p>Visionary leader with extensive experience in logistics and technology.</p>
        </div>
      </section>
      <section id="products" className="products">
        <h2>Our Products</h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card" onClick={() => onSelectProduct(product.id)}>
              <img src={product.image} alt={product.alt} />
              <h3>{product.name}</h3>
              <p>{product.details.substring(0, 100)}...</p>
            </div>
          ))}
        </div>
      </section>
      <section id="industries" className="industries">
        <h2>Industries We Serve</h2>
        <div className="industry-grid">
          <div className="industry-item">Aerospace</div>
          <div className="industry-item">Agriculture</div>
          <div className="industry-item">Automotive</div>
          <div className="industry-item">Chemical</div>
          <div className="industry-item">Defence</div>
          <div className="industry-item">Education</div>
          <div className="industry-item">Energy</div>
          <div className="industry-item">Entertainment</div>
          <div className="industry-item">Finance</div>
          <div className="industry-item">Food</div>
          <div className="industry-item">Healthcare</div>
          <div className="industry-item">Infrastructure</div>
          <div className="industry-item">Logistics</div>
          <div className="industry-item">Manufacturing</div>
          <div className="industry-item">Ocean Tech</div>
          <div className="industry-item">Oil & Gas</div>
          <div className="industry-item">Pharma</div>
          <div className="industry-item">Retail</div>
          <div className="industry-item">Sports</div>
          <div className="industry-item">Telecom</div>
          <div className="industry-item">Textile</div>
          <div className="industry-item">Transportation</div>
          <div className="industry-item">Travel</div>
        </div>
      </section>
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="4K developers coding, multiple screens, AI software development environment, modern workspace" />
            <h3>Software Development</h3>
            <p>Custom software solutions for logistics.</p>
          </div>
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="4K circuit design, embedded systems, electronics lab, hardware prototyping" />
            <h3>Hardware Engineering</h3>
            <p>Circuit design, embedded systems, and hardware prototyping.</p>
          </div>
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="4K product design studio, 3D modeling, CAD interface, creative workspace" />
            <h3>Product Design</h3>
            <p>Innovative product design services.</p>
          </div>
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="4K innovation lab, futuristic experiments, AI research environment, advanced technology" />
            <h3>Research & Development</h3>
            <p>Cutting-edge R&D for logistics tech.</p>
          </div>
        </div>
      </section>
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <div>
          <h3>India Address:</h3>
          <p>6/12 Papa Vaikal Street, Ayyampettai Post,<br />
          Papanasam Taluk, Thanjavur – 614201</p>
        </div>
        <div>
          <h3>UK Address:</h3>
          <p>71-75 Shelton Street, Covent Garden, London</p>
        </div>
        <div>
          <h3>Phone:</h3>
          <p>+91 8754906714</p>
        </div>
        <div>
          <h3>Email:</h3>
          <p>contact@techbrainnetworks.com</p>
        </div>
      </section>
      <section id="careers" className="careers">
        <h2>Careers</h2>
        <p>Join our team of innovators in logistics technology.</p>
      </section>
    </>
  );
}

export default Home;