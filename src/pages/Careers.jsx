import React from 'react';
import ContactForm from '../components/ContactForm';
import IndustriesList from '../components/IndustriesList';
import ServicesList from '../components/ServicesList';
import ContactDetails from '../components/ContactDetails';

function Careers() {
  return (
    <div className="careers-page">
      <section className="careers-content">
        <h1>Careers</h1>
        <div className="jobs-list">
          <div className="job-item">
            <h3>Android Developer</h3>
            <p>Skill: Java, Kotlin</p>
          </div>
          <div className="job-item">
            <h3>CAD/CAM Designer</h3>
            <p>Skill: Solidworks</p>
          </div>
          <div className="job-item">
            <h3>DFT (Design for Test) Engineer</h3>
            <p>Skill: DFT Methodologies, ATPG, JTAG</p>
          </div>
          <div className="job-item">
            <h3>FARM-stack Developer</h3>
            <p>Skill: FastAPI, ReactJs, MongoDB</p>
          </div>
          <div className="job-item">
            <h3>FPGA</h3>
            <p>Skill: VHDL, modelsim, xilinc vivado</p>
          </div>
          <div className="job-item">
            <h3>Hardware Design & Testing</h3>
            <p>Skill: C, Embedded C, RTOS, Kicad.</p>
          </div>
          <div className="job-item">
            <h3>IOS Developer</h3>
            <p>Skill: Swift</p>
          </div>
          <div className="job-item">
            <h3>Machine Learning Engineer</h3>
            <p>Skill: Python, Keras, Opencv, Scikit, Tensorflow</p>
          </div>
          <div className="job-item">
            <h3>MEAN-stack Developer</h3>
            <p>Skill: AngularJs, NodeJs, MongoDB, ExpressJs</p>
          </div>
          <div className="job-item">
            <h3>MERN-stack Developer</h3>
            <p>Skill: ReactJs, NodeJs, MongoDB, ExpressJs</p>
          </div>
          <div className="job-item">
            <h3>Physical Design Engineer</h3>
            <p>Skill: RTL-to-GDSII Flow, Place and Route, Timing Closure</p>
          </div>
          <div className="job-item">
            <h3>Robotics Engineer</h3>
            <p>Skill: C++, Python, ROS</p>
          </div>
          <div className="job-item">
            <h3>Software Tester</h3>
            <p>Skill: Automation and Manual Testing</p>
          </div>
          <div className="job-item">
            <h3>UX/UI Designer</h3>
            <p>Skill: Framer, Figma, Adobe XD, Sketch</p>
          </div>
          <div className="job-item">
            <h3>Verification Engineer</h3>
            <p>Skill: SystemVerilog, UVM, Functional Coverage</p>
          </div>
          <div className="job-item">
            <h3>VLSI Design Engineer</h3>
            <p>Skill: RTL Design, Verilog, Synthesis</p>
          </div>
        </div>
        <ContactForm />
        <IndustriesList />
        <ServicesList />
        <ContactDetails />
      </section>
    </div>
  );
}

export default Careers;