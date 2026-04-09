import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ProductModal from './components/ProductModal';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');

  const products = [
    {
      name: "Supply Chain Visibility and Optimization Software",
      image: "https://loremflickr.com/400/200/logistics,analytics?lock=1",
      alt: "Supply chain dashboard with real-time tracking",
      details: "Real-time tracking and analytics to streamline global logistics and reduce operational bottlenecks. Our optimization engine identifies the most cost-effective routes and carrier options."
    },
    {
      name: "Last-Mile Delivery Routing Algorithms",
      image: "https://loremflickr.com/400/200/delivery,traffic?lock=2",
      alt: "Delivery van in city visualization",
      details: "Advanced AI-powered routing to ensure fastest delivery times and minimal fuel consumption for local fulfillment. Optimize stop sequences and handle dynamic re-routing in real-time."
    },
    {
      name: "Warehouse Management Systems (WMS)",
      image: "https://loremflickr.com/400/200/warehouse,inventory?lock=3",
      alt: "Automated warehouse with robots",
      details: "Intelligent inventory tracking, automated picking, and optimized storage solutions for modern distribution centers. Improve labor efficiency and inventory accuracy using mobile scanning and AI-driven slotting."
    },
    {
      name: "Transportation Management Systems (TMS)",
      image: "https://loremflickr.com/400/200/truck,logistics?lock=4",
      alt: "Fleet of trucks on highway",
      details: "Comprehensive platform for managing freight, carrier selection, and automated documentation. Streamline planning, execution, and settlement processes for shippers and 3PLs."
    },
    {
      name: "Freight Brokerage and Digital Freight Platforms",
      image: "https://loremflickr.com/400/200/shipping,digital?lock=5",
      alt: "Digital freight booking interface",
      details: "Marketplace connecting shippers with reliable carriers using transparent pricing and automated matching. Real-time load boards and automated carrier vetting for maximum trust and efficiency."
    },
    {
      name: "Inventory Forecasting and Demand Planning Software",
      image: "https://loremflickr.com/400/200/data,stock?lock=6",
      alt: "Predictive analytics chart",
      details: "Predictive modeling using AI to ensure optimal stock levels and prevent overstocking or stockouts. Synchronize demand signals with supply chain capacity for balanced operations."
    },
    {
      name: "Cold Chain Monitoring and Management Systems",
      image: "https://loremflickr.com/400/200/refrigerator,pharma?lock=7",
      alt: "Temperature sensitive cargo monitoring",
      details: "IoT-enabled temperature and humidity tracking for sensitive pharmaceuticals and perishable goods. Real-time alerts and end-to-end audit trails for regulatory compliance."
    },
    {
      name: "Route Optimization and Fleet Management Software",
      image: "https://loremflickr.com/400/200/fleet,gps?lock=8",
      alt: "GPS tracking visualization",
      details: "Telematics and GPS integration for real-time fleet monitoring and driver performance analytics. Optimize routes to reduce mileage and improve asset utilization."
    },
    {
      name: "Reverse Logistics and Returns Management Solutions",
      image: "https://loremflickr.com/400/200/recycling,returns?lock=9",
      alt: "Returns processing station",
      details: "Streamlined processing of returns, refurbishing, and recycling to recover value and improve customer satisfaction. Automated return authorization and clear tracking for the end consumer."
    },
    {
      name: "Collaborative Logistics and Freight Management Platforms",
      image: "https://loremflickr.com/400/200/collaboration,shipping?lock=10",
      alt: "Multi-user collaboration portal",
      details: "Shared platforms for multi-stakeholder communication and shared capacity optimization. Break down silos between partners and improve overall supply chain synchronization."
    },
    {
      name: "Customs Compliance and Trade Facilitation Software",
      image: "https://loremflickr.com/400/200/customs,border?lock=11",
      alt: "International trade documentation interface",
      details: "Automated duty calculations and international trade documentation for seamless cross-border shipping. Stay compliant with evolving global trade regulations."
    },
    {
      name: "Supplier Collaboration and Vendor Management Systems",
      image: "https://loremflickr.com/400/200/supplier,partnership?lock=12",
      alt: "Supplier performance dashboard",
      details: "Performance tracking and automated communication tools to strengthen supply chain partnerships. Manage supplier risk and ensure consistency in material quality."
    },
    {
      name: "Real-time Shipment Tracking and Visibility Solutions",
      image: "https://loremflickr.com/400/200/world,tracking?lock=13",
      alt: "Global shipment map",
      details: "End-to-end transparency for customers and businesses through interactive maps and automated alerts. Gain instant visibility into local and international shipments."
    },
    {
      name: "Autonomous Vehicle Fleet Management Software",
      image: "https://loremflickr.com/400/200/autonomous,truck?lock=14",
      alt: "Self-driving truck simulation",
      details: "Control systems and monitoring for driverless trucks and delivery drones in restricted or open environments. Transition toward fully automated transportation networks safely."
    },
    {
      name: "Blockchain for Transparent and Secure Supply Chains",
      image: "https://loremflickr.com/400/200/blockchain,secure?lock=15",
      alt: "Secure digital ledger visualization",
      details: "Immutable ledger technology for tracking product provenance and verifying authenticity. Ensure data integrity across multiple supply chain nodes."
    },
    {
      name: "Procurement and Purchase Order Management Software",
      image: "https://loremflickr.com/400/200/purchase,office?lock=16",
      alt: "Purchase order workflow interface",
      details: "Automated requisitioning and approval workflows to streamline corporate spending. Improve transparency and control over global procurement processes."
    },
    {
      name: "Cross-Border Trade Compliance and Documentation Tools",
      image: "https://loremflickr.com/400/200/trade,document?lock=17",
      alt: "Complex trade documents visualization",
      details: "Specialized tools for navigating complex international regulations and tariff codes. Minimize shipping delays and avoid costly compliance penalties."
    },
    {
      name: "Automated Palletization and Sorting Systems",
      image: "https://loremflickr.com/400/200/robotics,sorting?lock=18",
      alt: "High-speed palletizing robot",
      details: "Robotic control software for high-speed warehouse sorting and efficient cargo loading. Maximize storage density and reduce manual handling labor."
    },
    {
      name: "Digital Twin Technology for Supply Chain Simulation",
      image: "https://loremflickr.com/400/200/simulation,digitaltwin?lock=19",
      alt: "Virtual supply chain model",
      details: "Virtual models of entire supply chains for 'what-if' analysis and risk-free optimization. Simulate disruptions and test strategies before real-world implementation."
    },
    {
      name: "Predictive Analytics for Supply Chain Risk Management",
      image: "https://loremflickr.com/400/200/risk,analytics?lock=20",
      alt: "Risk heatmap dashboard",
      details: "Identifying potential disruptions before they happen using big data and machine learning. Monitor geopolitical, climatic, and logistics signals to mitigate risks."
    }
  ];


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} scrollToSection={scrollToSection} isScrolled={isScrolled} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {currentPage === 'home' && <Home scrollToSection={scrollToSection} products={products} setSelectedProduct={setSelectedProduct} />}

      {currentPage === 'about' && <About />}

      {currentPage === 'careers' && <Careers />}

      {currentPage === 'services' && <Services />}

      {currentPage === 'contact' && <Contact />}

      <Footer />

      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
}

export default App;