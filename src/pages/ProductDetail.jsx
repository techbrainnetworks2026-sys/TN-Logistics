import React, { useEffect } from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product, onBack, products, onSelectProduct }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) return null;

  return (
    <div className="product-detail-page">
      <div className="detail-container">
        {/* Back Navigation */}
        <button className="back-btn" onClick={onBack}>
          ← Back to Products
        </button>

        {/* Hero Header */}
        <header className="detail-hero glass-panel">
          <div className="detail-hero-text">
            <span className="detail-badge">Solution #{product.id}</span>
            <h1>{product.name}</h1>
            <p className="detail-lead">{product.details}</p>
            <button className="btn">Get Started with this Solution</button>
          </div>
          <div className="detail-hero-image">
            <img src={product.image} alt={product.alt} />
            <div className="detail-hero-overlay"></div>
          </div>
        </header>

        {/* Main Content + Sidebar Layout */}
        <div className="detail-layout">
          {/* Main Content */}
          <main className="detail-main">
            {/* About Section */}
            <section className="detail-section glass-panel">
              <div className="section-header">
                <div className="section-accent-bar"></div>
                <h2>Solution Overview</h2>
              </div>
              <p>{product.about}</p>
            </section>

            {/* Benefits & Scope Grid */}
            <div className="detail-two-col">
              <div className="detail-section glass-panel detail-benefits-card">
                <h3>Key Benefits &amp; Advantages</h3>
                <ul className="benefits-list">
                  {product.benefits.map((benefit, i) => (
                    <li key={i}>
                      <span className="benefit-check">⚡</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="detail-section glass-panel detail-scope-card">
                <h3>Vision 2045: Feature Scope</h3>
                <p>{product.futureScope}</p>
              </div>
            </div>

            {/* Key Features Section */}
            {product.keyFeatures && (
              <section className="detail-section glass-panel">
                <div className="section-header">
                  <div className="section-accent-bar"></div>
                  <h2>Key Features</h2>
                </div>
                <div className="features-grid">
                  {product.keyFeatures.map((feat, i) => (
                    <div key={i} className="feature-category-card">
                      <h4>{feat.category}</h4>
                      <ul>
                        {feat.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Detailed Benefits Section */}
            {product.detailedBenefits && (
              <section className="detail-section glass-panel">
                <div className="section-header">
                  <div className="section-accent-bar"></div>
                  <h2>Comprehensive Benefits</h2>
                </div>
                <div className="benefits-category-grid">
                  {product.detailedBenefits.map((group, i) => (
                    <div key={i} className="benefit-category-card">
                      <h4>{group.category}</h4>
                      <ul>
                        {group.items.map((item, j) => (
                          <li key={j}><span className="benefit-dot">●</span>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Scope Section */}
            {product.scope && (
              <section className="detail-section glass-panel">
                <div className="section-header">
                  <div className="section-accent-bar"></div>
                  <h2>Solution Scope</h2>
                </div>
                <div className="scope-grid">
                  {product.scope.map((s, i) => (
                    <div key={i} className="scope-card">
                      <h4>{s.category}</h4>
                      <ul>
                        {s.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Use Cases Section */}
            {product.useCases && (
              <section className="detail-section glass-panel">
                <div className="section-header">
                  <div className="section-accent-bar"></div>
                  <h2>Industry Use Cases</h2>
                </div>
                <div className="usecases-grid">
                  {product.useCases.map((uc, i) => (
                    <div key={i} className="usecase-card">
                      <h4>{uc.industry}</h4>
                      <ul>
                        {uc.scenarios.map((s, j) => (
                          <li key={j}>{s}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Architecture Section */}
            {product.architecture && (
              <section className="detail-section glass-panel">
                <div className="section-header">
                  <div className="section-accent-bar"></div>
                  <h2>High-Level Architecture</h2>
                </div>
                <div className="architecture-layers">
                  {product.architecture.map((arch, i) => (
                    <div key={i} className="arch-layer">
                      <div className="arch-layer-number">{i + 1}</div>
                      <div className="arch-layer-content">
                        <h4>{arch.layer}</h4>
                        <p>{arch.description}</p>
                      </div>
                      {i < product.architecture.length - 1 && (
                        <div className="arch-connector">▼</div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Integration Section */}
            <section className="detail-section glass-panel detail-integration">
              <h2>Supply Chain Visibility &amp; Optimization Integration</h2>
              <div className="integration-box">
                <p>
                  <strong>{product.name}</strong> is engineered to work in perfect harmony with our core 
                  Supply Chain Visibility and Optimization Software. This integration ensures that 
                  every data point generated by this solution is immediately actionable within the 
                  broader global logistics ecosystem.
                </p>
              </div>
              <div className="integration-note">
                <span className="note-label">Integration Note:</span> {product.integrationNote}
              </div>
            </section>

            {/* Inquire Section */}
            <section className="detail-section glass-panel detail-inquire">
              <h2>Request Product Consultation</h2>
              <p>Connect with our technical architects to see how this solution fits into your specific logistics infrastructure.</p>
              <div className="inquire-contact">
                <span>✉ contact@techbrainnetworks.com</span>
              </div>
              <button className="btn">Submit Secure Inquiry</button>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="detail-sidebar">
            <div className="sidebar-products glass-panel">
              <h3>Our Solutions</h3>
              <div className="sidebar-list">
                {products.map(p => (
                  <div 
                    key={p.id} 
                    className={`sidebar-item ${p.id === product.id ? 'active' : ''}`}
                    onClick={() => onSelectProduct(p.id)}
                  >
                    <span className="sidebar-item-name">{p.name}</span>
                    <span className="sidebar-arrow">›</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-cta glass-panel">
              <h4>Need Customization?</h4>
              <p>Our R&amp;D team can tailor any solution to your specific logistics requirements.</p>
              <button className="sidebar-cta-link">Talk to an Engineer →</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
