import React from 'react';

function ContactForm() {
  return (
    <div className="contact-form">
      <h2>Get in touch with us!</h2>
      <p>Whether you are in education, finance, transportation, retail or health care, we have a solution for you. We develop both large and small projects and our solutions are always tailored to your needs - both in terms of budget and scope.</p>
      <form>
        <input type="text" placeholder="Name *" required />
        <input type="text" placeholder="Company Name *" required />
        <input type="email" placeholder="Email Address *" required />
        <input type="tel" placeholder="Mobile No *" required />
        <select>
          <option>Choose the service</option>
          <option>Software Development</option>
          <option>Hardware Engineering</option>
          <option>Product Design</option>
          <option>Research & Development</option>
        </select>
        <textarea placeholder="Special Note"></textarea>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;