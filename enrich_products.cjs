const fs = require('fs');

// Enrichment data keyed by product ID
const enrichments = {
  3: { // Warehouse Management Systems (WMS)
    keyFeatures: [
      { category: "📦 Inventory Management", items: ["Real-time stock tracking", "Cycle counting automation", "Lot & serial number tracking"] },
      { category: "🤖 Automated Operations", items: ["AI-driven slotting optimization", "Pick path optimization", "Wave & batch picking"] },
      { category: "👷 Labor Management", items: ["Task assignment engine", "Workforce performance tracking", "Shift planning & scheduling"] },
      { category: "🔗 Integration Hub", items: ["ERP/TMS connectivity", "AS/RS system control", "Conveyor & sorter integration"] }
    ],
    detailedBenefits: [
      { category: "⚡ Operational", items: ["40% increase in storage utilization", "99.9% picking accuracy"] },
      { category: "💰 Financial", items: ["Reduced labor costs through automation", "Lower inventory carrying costs"] },
      { category: "📊 Visibility", items: ["Real-time inventory dashboards", "Cross-warehouse stock visibility"] },
      { category: "🔄 Scalability", items: ["Supports multi-warehouse operations", "Seasonal volume surge handling"] }
    ],
    scope: [
      { category: "📌 Functional", items: ["Receiving & putaway", "Picking & packing", "Shipping & manifesting", "Returns processing"] },
      { category: "📌 Technical", items: ["Cloud-native architecture", "Barcode & RFID support", "Mobile RF terminals"] },
      { category: "📌 Business", items: ["E-commerce fulfillment", "3PL operations", "Manufacturing warehouses"] }
    ],
    useCases: [
      { industry: "🛒 Retail", scenarios: ["Omnichannel fulfillment", "Store replenishment"] },
      { industry: "🏭 Manufacturing", scenarios: ["Raw material staging", "Finished goods management"] },
      { industry: "💊 Pharma", scenarios: ["Serialization tracking", "Cold storage management"] }
    ],
    architecture: [
      { layer: "Data Capture", description: "Barcode scanners, RFID, IoT sensors" },
      { layer: "Core WMS Engine", description: "Inventory, orders, task management" },
      { layer: "Optimization Layer", description: "AI slotting, pick path algorithms" },
      { layer: "Integration Middleware", description: "ERP, TMS, e-commerce connectors" },
      { layer: "User Interface", description: "Web dashboards, mobile RF apps" }
    ]
  },
  4: { // Transportation Management Systems (TMS)
    keyFeatures: [
      { category: "🚛 Freight Management", items: ["Multi-modal shipment planning", "Carrier rate management", "Load consolidation"] },
      { category: "📋 Documentation", items: ["Automated BOL generation", "Customs paperwork", "Digital freight audit"] },
      { category: "📍 Shipment Tracking", items: ["Real-time GPS visibility", "Milestone event tracking", "Exception management"] },
      { category: "💲 Financial Controls", items: ["Freight cost allocation", "Invoice matching & audit", "Carrier payment automation"] }
    ],
    detailedBenefits: [
      { category: "⚡ Operational", items: ["Automated carrier selection", "Paperless documentation workflows"] },
      { category: "💰 Financial", items: ["15% average freight spend reduction", "Elimination of billing errors"] },
      { category: "📊 Decision-Making", items: ["Carrier performance scorecards", "Lane cost benchmarking"] },
      { category: "🤝 Collaboration", items: ["Carrier portal for self-service", "Shipper-carrier communication hub"] }
    ],
    scope: [
      { category: "📌 Functional", items: ["Order management", "Route planning", "Carrier selection", "Freight audit & payment"] },
      { category: "📌 Technical", items: ["Cloud-based platform", "EDI & API integrations", "Mobile tracking apps"] },
      { category: "📌 Business", items: ["Shippers & manufacturers", "3PL providers", "Freight forwarders"] }
    ],
    useCases: [
      { industry: "🏭 Manufacturing", scenarios: ["Inbound raw material scheduling", "Outbound finished goods shipping"] },
      { industry: "🛒 Retail", scenarios: ["Store delivery optimization", "Cross-dock management"] },
      { industry: "🌍 International Trade", scenarios: ["Multi-modal ocean-rail-truck planning", "Cross-border shipment coordination"] }
    ],
    architecture: [
      { layer: "Order Management", description: "Shipment orders, customer requirements" },
      { layer: "Planning Engine", description: "Route optimization, load building" },
      { layer: "Execution Layer", description: "Carrier tendering, dispatch, tracking" },
      { layer: "Settlement Module", description: "Freight audit, payment, analytics" },
      { layer: "Visibility Portal", description: "Dashboards, alerts, reporting" }
    ]
  },
  5: { // Freight Brokerage and Digital Freight Platforms
    keyFeatures: [
      { category: "🔄 Load Matching", items: ["AI-powered load-to-truck matching", "Capacity prediction engine", "Deadhead mile reduction"] },
      { category: "💲 Dynamic Pricing", items: ["Real-time spot rate calculation", "Market demand-based pricing", "Contract vs. spot comparison"] },
      { category: "✅ Carrier Vetting", items: ["Automated compliance checks", "Safety rating verification", "Insurance validation"] },
      { category: "📱 Digital Experience", items: ["One-click booking", "Digital proof-of-delivery", "Instant payment processing"] }
    ],
    detailedBenefits: [
      { category: "⚡ Operational", items: ["Instant load matching vs. hours of phone calls", "Automated documentation"] },
      { category: "💰 Financial", items: ["Transparent pricing with no hidden fees", "Reduced deadhead miles save carrier costs"] },
      { category: "🔒 Trust & Compliance", items: ["Pre-vetted carrier network", "Real-time compliance monitoring"] },
      { category: "📊 Intelligence", items: ["Market rate benchmarking", "Demand forecasting for capacity planning"] }
    ],
    scope: [
      { category: "📌 Functional", items: ["Load posting & matching", "Rate negotiation", "Shipment booking", "POD & payment"] },
      { category: "📌 Technical", items: ["Cloud marketplace platform", "Mobile apps for shippers & carriers", "API-based integrations"] },
      { category: "📌 Business", items: ["Small-to-mid shippers", "Owner-operators", "Fleet carriers"] }
    ],
    useCases: [
      { industry: "🚛 Truckload", scenarios: ["FTL spot market booking", "Dedicated lane procurement"] },
      { industry: "📦 LTL", scenarios: ["Partial load consolidation", "Multi-carrier rate shopping"] },
      { industry: "🏗️ Construction", scenarios: ["Heavy equipment transport", "Job-site material delivery"] }
    ],
    architecture: [
      { layer: "Marketplace Platform", description: "Load board, carrier directory" },
      { layer: "Matching Engine", description: "AI load-carrier optimization" },
      { layer: "Pricing Module", description: "Dynamic rate calculation" },
      { layer: "Execution Layer", description: "Booking, tracking, POD" },
      { layer: "Settlement", description: "Invoice, payment, factoring" }
    ]
  },
  6: { // Inventory Forecasting and Demand Planning
    keyFeatures: [
      { category: "📈 Demand Forecasting", items: ["ML-based demand prediction", "Seasonal trend analysis", "Promotional impact modeling"] },
      { category: "📊 Inventory Optimization", items: ["Safety stock calculation", "Reorder point automation", "ABC/XYZ classification"] },
      { category: "🔮 Scenario Planning", items: ["What-if simulation engine", "Market expansion modeling", "New product launch planning"] },
      { category: "🔗 Data Integration", items: ["POS data ingestion", "Social media signal analysis", "Weather impact correlation"] }
    ],
    detailedBenefits: [
      { category: "⚡ Operational", items: ["Automated replenishment triggers", "Reduced manual planning effort"] },
      { category: "💰 Financial", items: ["20% reduction in excess inventory", "Fewer stockout-related lost sales"] },
      { category: "📊 Accuracy", items: ["95%+ forecast accuracy for top SKUs", "Demand sensing for short-term adjustments"] },
      { category: "🌱 Strategic", items: ["Data-driven product lifecycle decisions", "Market expansion readiness assessment"] }
    ],
    scope: [
      { category: "📌 Functional", items: ["Statistical forecasting", "Collaborative planning", "Inventory policy optimization"] },
      { category: "📌 Technical", items: ["Cloud ML platform", "ERP & POS integration", "Real-time data pipelines"] },
      { category: "📌 Business", items: ["Retail & CPG", "Manufacturing", "Distribution & wholesale"] }
    ],
    useCases: [
      { industry: "🛒 Retail", scenarios: ["Seasonal demand planning", "Store-level allocation"] },
      { industry: "🏭 Manufacturing", scenarios: ["Production scheduling alignment", "Raw material procurement planning"] },
      { industry: "🍔 Food & Beverage", scenarios: ["Perishable inventory optimization", "Promotional uplift forecasting"] }
    ],
    architecture: [
      { layer: "Data Lake", description: "Sales, POS, weather, social data" },
      { layer: "ML Forecasting Engine", description: "Statistical & deep learning models" },
      { layer: "Optimization Module", description: "Inventory policies & safety stock" },
      { layer: "Planning Workbench", description: "Collaborative review & override" },
      { layer: "Integration Layer", description: "ERP, WMS, procurement systems" }
    ]
  },
  7: { // Cold Chain Monitoring
    keyFeatures: [
      { category: "🌡️ Temperature Monitoring", items: ["Continuous IoT sensor tracking", "Multi-zone temperature logging", "Excursion detection & alerts"] },
      { category: "💧 Environmental Controls", items: ["Humidity monitoring", "Shock & vibration detection", "Light exposure tracking"] },
      { category: "📋 Compliance & Audit", items: ["FDA 21 CFR Part 11 compliance", "Automated audit trail generation", "Digital certificate of analysis"] },
      { category: "🔔 Alert System", items: ["Real-time SMS/email alerts", "Escalation workflows", "Predictive failure warnings"] }
    ],
    detailedBenefits: [
      { category: "⚡ Operational", items: ["Zero manual temperature logging", "Automated compliance documentation"] },
      { category: "💰 Financial", items: ["Reduced spoilage and waste costs", "Lower insurance premiums through data"] },
      { category: "🛡️ Risk Mitigation", items: ["Early excursion intervention", "Complete chain-of-custody visibility"] },
      { category: "📋 Regulatory", items: ["Full FDA/EU GMP compliance", "Audit-ready digital records"] }
    ],
    scope: [
      { category: "📌 Functional", items: ["Sensor deployment", "Data collection & logging", "Alert management", "Compliance reporting"] },
      { category: "📌 Technical", items: ["IoT sensor network", "Cloud data platform", "Mobile monitoring app"] },
      { category: "📌 Business", items: ["Pharmaceuticals", "Fresh food logistics", "Biotech & life sciences"] }
    ],
    useCases: [
      { industry: "💊 Pharmaceuticals", scenarios: ["Vaccine cold chain management", "Clinical trial shipment monitoring"] },
      { industry: "🥩 Food & Beverage", scenarios: ["Farm-to-fork temperature tracking", "Frozen goods logistics"] },
      { industry: "🧬 Biotech", scenarios: ["Cell & gene therapy transport", "Lab sample cold chain"] }
    ],
    architecture: [
      { layer: "IoT Sensors", description: "Temperature, humidity, GPS loggers" },
      { layer: "Gateway Layer", description: "Data aggregation & transmission" },
      { layer: "Cloud Platform", description: "Storage, processing, analytics" },
      { layer: "Alert Engine", description: "Threshold monitoring & notifications" },
      { layer: "Compliance Dashboard", description: "Audit reports, certificates" }
    ]
  },
  8: { // Route Optimization and Fleet Management
    keyFeatures: [
      { category: "🗺️ Route Optimization", items: ["Multi-constraint route planning", "Real-time traffic integration", "Fuel-efficient path calculation"] },
      { category: "🚛 Fleet Tracking", items: ["Live GPS vehicle tracking", "Geofencing & zone alerts", "Driver behavior monitoring"] },
      { category: "🔧 Maintenance Management", items: ["Predictive maintenance alerts", "Service history tracking", "Vehicle health diagnostics"] },
      { category: "📊 Analytics & Reporting", items: ["Fleet utilization dashboards", "Total cost of ownership analysis", "Driver performance scorecards"] }
    ],
    detailedBenefits: [
      { category: "⚡ Operational", items: ["Optimized fleet utilization rates", "Reduced unplanned downtime"] },
      { category: "💰 Financial", items: ["10% reduction in maintenance costs", "Lower fuel expenses via route optimization"] },
      { category: "🛡️ Safety", items: ["Driver safety scoring & coaching", "Accident reduction through monitoring"] },
      { category: "📋 Compliance", items: ["ELD/HOS compliance automation", "Regulatory reporting simplified"] }
    ],
    scope: [
      { category: "📌 Functional", items: ["Vehicle tracking", "Route planning", "Maintenance scheduling", "Driver management"] },
      { category: "📌 Technical", items: ["Telematics hardware integration", "Cloud platform", "Mobile driver app"] },
      { category: "📌 Business", items: ["Trucking companies", "Delivery fleets", "Field service organizations"] }
    ],
    useCases: [
      { industry: "🚛 Trucking", scenarios: ["Long-haul route optimization", "Multi-stop delivery planning"] },
      { industry: "🔧 Field Service", scenarios: ["Technician dispatch optimization", "Service territory management"] },
      { industry: "🏗️ Construction", scenarios: ["Equipment fleet tracking", "Job-site logistics coordination"] }
    ],
    architecture: [
      { layer: "Telematics Devices", description: "GPS trackers, OBD-II sensors" },
      { layer: "Data Collection", description: "Real-time vehicle & driver data" },
      { layer: "Optimization Engine", description: "Route planning algorithms" },
      { layer: "Fleet Management Portal", description: "Dashboards, alerts, reports" },
      { layer: "Mobile App", description: "Driver navigation & communication" }
    ]
  },
  9: { // Reverse Logistics and Returns
    keyFeatures: [
      { category: "📦 Returns Processing", items: ["Automated RMA generation", "Return reason classification", "Quality inspection workflows"] },
      { category: "🔄 Disposition Management", items: ["Refurbish/restock decisions", "Recycling & disposal routing", "Resale channel optimization"] },
      { category: "💰 Value Recovery", items: ["Refurbishment tracking", "Secondary market integration", "Parts harvesting management"] },
      { category: "📊 Analytics", items: ["Return rate analysis by SKU", "Root cause pattern identification", "Cost-of-returns dashboards"] }
    ],
    detailedBenefits: [
      { category: "⚡ Operational", items: ["Streamlined returns processing", "Faster refurbishment turnaround"] },
      { category: "💰 Financial", items: ["30% value recovery from returns", "Reduced return processing costs"] },
      { category: "📦 Customer Experience", items: ["Frictionless return experience", "Faster refund processing"] },
      { category: "🌱 Sustainability", items: ["Reduced landfill waste", "Circular economy enablement"] }
    ],
    scope: [
      { category: "📌 Functional", items: ["Return initiation", "Receiving & inspection", "Disposition routing", "Refurbishment tracking"] },
      { category: "📌 Technical", items: ["Cloud platform", "E-commerce integration", "Mobile inspection tools"] },
      { category: "📌 Business", items: ["E-commerce retailers", "Electronics manufacturers", "Fashion & apparel brands"] }
    ],
    useCases: [
      { industry: "🛒 E-commerce", scenarios: ["Customer self-service returns", "Warehouse returns processing"] },
      { industry: "📱 Electronics", scenarios: ["Refurbishment pipeline management", "Trade-in program automation"] },
      { industry: "👗 Fashion", scenarios: ["Size/fit return analytics", "Seasonal return surge management"] }
    ],
    architecture: [
      { layer: "Customer Portal", description: "Return initiation & tracking" },
      { layer: "Returns Engine", description: "RMA, routing, disposition logic" },
      { layer: "Inspection Module", description: "Quality checks & grading" },
      { layer: "Recovery Pipeline", description: "Refurbish, resell, recycle paths" },
      { layer: "Analytics Dashboard", description: "Return patterns & cost analysis" }
    ]
  },
  10: { // Collaborative Logistics
    keyFeatures: [
      { category: "🤝 Multi-Party Collaboration", items: ["Shared shipment visibility", "Cross-company capacity sharing", "Joint planning workspaces"] },
      { category: "📄 Document Exchange", items: ["Digital document sharing", "Electronic signature support", "Version-controlled file management"] },
      { category: "💬 Communication Hub", items: ["In-platform messaging", "Task assignment & tracking", "Automated status notifications"] },
      { category: "📊 Shared Analytics", items: ["Cross-partner KPI dashboards", "Shared performance benchmarks", "Collaborative forecasting tools"] }
    ],
    detailedBenefits: [
      { category: "⚡ Operational", items: ["Eliminated manual email follow-ups", "Synchronized multi-party workflows"] },
      { category: "💰 Financial", items: ["Shared capacity reduces empty miles", "Lower administrative overhead"] },
      { category: "🤝 Partnership", items: ["Improved partner performance through transparency", "Stronger long-term relationships"] },
      { category: "🌱 Sustainability", items: ["Reduced carbon footprint through load sharing", "Optimized network resource utilization"] }
    ],
    scope: [
      { category: "📌 Functional", items: ["Partner onboarding", "Document management", "Capacity sharing", "Performance tracking"] },
      { category: "📌 Technical", items: ["Cloud collaboration platform", "API integrations", "Role-based access control"] },
      { category: "📌 Business", items: ["Shipper-carrier networks", "3PL ecosystems", "Trade lane consortiums"] }
    ],
    useCases: [
      { industry: "🏭 Manufacturing", scenarios: ["Supplier-manufacturer coordination", "Multi-plant logistics sync"] },
      { industry: "🛒 Retail", scenarios: ["Vendor-managed inventory collaboration", "Cross-dock coordination"] },
      { industry: "🌍 Global Trade", scenarios: ["Multi-party trade document flow", "Consortium freight sharing"] }
    ],
    architecture: [
      { layer: "Identity & Access", description: "Multi-tenant, role-based access" },
      { layer: "Collaboration Hub", description: "Messaging, tasks, documents" },
      { layer: "Data Sharing Layer", description: "Secure inter-company data exchange" },
      { layer: "Analytics Engine", description: "Shared KPIs, benchmarking" },
      { layer: "Integration Gateway", description: "ERP, TMS, WMS connectors" }
    ]
  },
  11: { // Customs Compliance
    keyFeatures: [
      { category: "📋 Documentation Automation", items: ["Auto-generated customs forms", "Commercial invoice creation", "Certificate of origin management"] },
      { category: "💲 Duty Calculation", items: ["Real-time tariff lookups", "Landed cost estimation", "Free trade agreement optimization"] },
      { category: "🔍 Compliance Screening", items: ["Denied party screening", "Export control classification", "Sanctions list monitoring"] },
      { category: "🌍 Multi-Country Support", items: ["190+ country regulation database", "Regional compliance updates", "Multi-language documentation"] }
    ],
    detailedBenefits: [
      { category: "⚡ Operational", items: ["90% reduction in customs delays", "Automated documentation workflows"] },
      { category: "💰 Financial", items: ["Accurate landed cost calculations", "FTA duty savings identification"] },
      { category: "🛡️ Risk Mitigation", items: ["Zero compliance violations", "Eliminated penalty risk"] },
      { category: "📊 Visibility", items: ["Real-time customs status tracking", "Cross-border shipment monitoring"] }
    ],
    scope: [
      { category: "📌 Functional", items: ["Import/export documentation", "Tariff classification", "Duty calculation", "Compliance screening"] },
      { category: "📌 Technical", items: ["Cloud platform", "Government system integrations", "Real-time regulation database"] },
      { category: "📌 Business", items: ["International shippers", "Customs brokers", "Freight forwarders"] }
    ],
    useCases: [
      { industry: "🏭 Manufacturing", scenarios: ["Cross-border parts sourcing", "Export compliance management"] },
      { industry: "🛒 E-commerce", scenarios: ["Cross-border selling compliance", "De minimis threshold management"] },
      { industry: "🌍 Global Trade", scenarios: ["Multi-country tariff optimization", "FTA certificate management"] }
    ],
    architecture: [
      { layer: "Regulation Database", description: "Global tariffs, rules, sanctions" },
      { layer: "Classification Engine", description: "HTS code determination" },
      { layer: "Documentation Generator", description: "Forms, invoices, certificates" },
      { layer: "Screening Module", description: "Denied party & sanctions checks" },
      { layer: "Government Gateway", description: "Customs authority submissions" }
    ]
  },
  12: { // Supplier Collaboration
    keyFeatures: [
      { category: "📊 Performance Tracking", items: ["Supplier scorecards", "On-time delivery metrics", "Quality defect tracking"] },
      { category: "🔗 Order Collaboration", items: ["Purchase order portal", "ASN management", "Change order workflows"] },
      { category: "🌍 Supplier Discovery", items: ["Global supplier database", "Capability matching engine", "Sustainability vetting"] },
      { category: "📋 Compliance Management", items: ["Document collection & verification", "Audit trail management", "Certification expiry tracking"] }
    ],
    detailedBenefits: [
      { category: "⚡ Operational", items: ["Improved supplier lead time consistency", "Automated order communication"] },
      { category: "💰 Financial", items: ["Reduced procurement risk through multi-sourcing", "Better negotiation through performance data"] },
      { category: "🔍 Visibility", items: ["Tier 2 & Tier 3 supply chain visibility", "Real-time order status tracking"] },
      { category: "🌱 Sustainability", items: ["Ethical sourcing verification", "Carbon footprint tracking per supplier"] }
    ],
    scope: [
      { category: "📌 Functional", items: ["Supplier onboarding", "Performance management", "Order collaboration", "Risk monitoring"] },
      { category: "📌 Technical", items: ["Supplier portal (SaaS)", "ERP integration", "Document management system"] },
      { category: "📌 Business", items: ["Manufacturing procurement", "Retail sourcing", "Multi-tier supply networks"] }
    ],
    useCases: [
      { industry: "🏭 Manufacturing", scenarios: ["Automotive supplier management", "Multi-tier visibility for complex assemblies"] },
      { industry: "🛒 Retail", scenarios: ["Private label supplier coordination", "Seasonal sourcing management"] },
      { industry: "💊 Pharma", scenarios: ["API supplier qualification", "GMP compliance tracking"] }
    ],
    architecture: [
      { layer: "Supplier Portal", description: "Self-service registration & communication" },
      { layer: "Performance Engine", description: "KPI calculation & scorecards" },
      { layer: "Risk Module", description: "Financial & geopolitical risk monitoring" },
      { layer: "Collaboration Hub", description: "Orders, ASNs, change management" },
      { layer: "Analytics Dashboard", description: "Spend analysis, supplier ranking" }
    ]
  },
  13: { // Real-time Shipment Tracking
    keyFeatures: [
      { category: "🗺️ Interactive Mapping", items: ["Live shipment map visualization", "Multi-modal route display", "Geofence zone alerts"] },
      { category: "🔔 Automated Notifications", items: ["SMS & email milestone alerts", "Delay prediction warnings", "Delivery confirmation notices"] },
      { category: "📱 Customer Experience", items: ["Branded tracking pages", "Self-service tracking portal", "Delivery rating & feedback"] },
      { category: "📊 Analytics", items: ["Transit time analysis", "Carrier on-time performance", "Exception pattern reporting"] }
    ],
    detailedBenefits: [
      { category: "⚡ Operational", items: ["40% reduction in WISMO calls", "Proactive exception management"] },
      { category: "📦 Customer Experience", items: ["Amazon-like tracking experience", "Increased customer trust & loyalty"] },
      { category: "📊 Visibility", items: ["End-to-end shipment transparency", "Real-time B2B & B2C visibility"] },
      { category: "🤝 Partnership", items: ["Carrier accountability through data", "Shared visibility with trading partners"] }
    ],
    scope: [
      { category: "📌 Functional", items: ["Multi-carrier tracking", "Customer notifications", "Exception management", "Delivery analytics"] },
      { category: "📌 Technical", items: ["Cloud platform", "Carrier API integrations", "Mobile-responsive tracking"] },
      { category: "📌 Business", items: ["E-commerce brands", "B2B shippers", "Logistics service providers"] }
    ],
    useCases: [
      { industry: "🛒 E-commerce", scenarios: ["Post-purchase tracking experience", "Delivery exception management"] },
      { industry: "🏭 Manufacturing", scenarios: ["Inbound material tracking", "Customer shipment visibility portal"] },
      { industry: "🚛 Logistics", scenarios: ["Multi-client tracking dashboard", "SLA compliance monitoring"] }
    ],
    architecture: [
      { layer: "Carrier Integrations", description: "API connections to 500+ carriers" },
      { layer: "Data Normalization", description: "Unified tracking event format" },
      { layer: "Prediction Engine", description: "ETA calculation & delay forecasting" },
      { layer: "Notification Service", description: "Email, SMS, push notifications" },
      { layer: "Tracking Portal", description: "Branded customer-facing pages" }
    ]
  },
  14: { // Autonomous Vehicle Fleet Management
    keyFeatures: [
      { category: "🤖 Autonomous Control", items: ["Remote vehicle supervision", "Autonomous mission planning", "Safety intervention protocols"] },
      { category: "📡 Sensor Fusion", items: ["LiDAR & camera data processing", "Real-time environment mapping", "Obstacle detection & avoidance"] },
      { category: "🔋 Energy Management", items: ["Battery range optimization", "Charging schedule automation", "Energy consumption analytics"] },
      { category: "📊 Fleet Intelligence", items: ["Fleet-wide performance monitoring", "Predictive maintenance for AV", "Utilization optimization"] }
    ],
    detailedBenefits: [
      { category: "⚡ Operational", items: ["24/7 operation without driver constraints", "Consistent driving performance"] },
      { category: "💰 Financial", items: ["Eliminated driver labor costs", "Optimized energy consumption"] },
      { category: "🛡️ Safety", items: ["Elimination of human-error accidents", "Always-alert driving systems"] },
      { category: "🌱 Sustainability", items: ["Electric vehicle integration", "Optimized routes for lower emissions"] }
    ],
    scope: [
      { category: "📌 Functional", items: ["AV mission planning", "Remote monitoring & intervention", "Safety compliance", "Energy management"] },
      { category: "📌 Technical", items: ["Edge computing on vehicles", "5G connectivity", "AI/ML control systems"] },
      { category: "📌 Business", items: ["Middle-mile freight", "Port & terminal operations", "Last-mile delivery pods"] }
    ],
    useCases: [
      { industry: "🚛 Freight", scenarios: ["Highway autonomous trucking", "Hub-to-hub middle-mile transport"] },
      { industry: "🏗️ Ports & Terminals", scenarios: ["Autonomous container transport", "Yard management automation"] },
      { industry: "📦 Last-Mile", scenarios: ["Sidewalk delivery robot fleets", "Autonomous delivery van operation"] }
    ],
    architecture: [
      { layer: "Vehicle Edge Computing", description: "On-board AI, sensor processing" },
      { layer: "Cloud Command Center", description: "Remote supervision, fleet orchestration" },
      { layer: "Mission Planning", description: "Route, timing, priority optimization" },
      { layer: "Safety Systems", description: "Intervention protocols, fail-safes" },
      { layer: "Fleet Analytics", description: "Performance, maintenance, utilization" }
    ]
  },
  15: { // Blockchain
    keyFeatures: [
      { category: "🔗 Distributed Ledger", items: ["Immutable transaction records", "Decentralized consensus mechanism", "Smart contract automation"] },
      { category: "📦 Product Provenance", items: ["Origin-to-shelf tracking", "Authenticity verification", "Ethical sourcing certification"] },
      { category: "💲 Smart Payments", items: ["Automated escrow & release", "Multi-party payment splitting", "Instant cross-border settlement"] },
      { category: "📋 Digital Documentation", items: ["Tokenized trade documents", "Tamper-proof certificates", "Digital bill of lading"] }
    ],
    detailedBenefits: [
      { category: "🔒 Trust & Security", items: ["Irrefutable proof of authenticity", "Tamper-proof transaction history"] },
      { category: "💰 Financial", items: ["Reduced fraud and counterfeiting losses", "Automated payment execution"] },
      { category: "📊 Transparency", items: ["End-to-end product traceability", "Ethical & sustainability verification"] },
      { category: "⚡ Efficiency", items: ["Elimination of paper-based processes", "Faster dispute resolution"] }
    ],
    scope: [
      { category: "📌 Functional", items: ["Product tracking", "Document management", "Smart contracts", "Payment automation"] },
      { category: "📌 Technical", items: ["Hyperledger/Ethereum frameworks", "API integration layer", "Identity management"] },
      { category: "📌 Business", items: ["Food safety tracing", "Luxury goods authentication", "Pharmaceutical serialization"] }
    ],
    useCases: [
      { industry: "🥩 Food & Beverage", scenarios: ["Farm-to-fork traceability", "Recall management acceleration"] },
      { industry: "👜 Luxury Goods", scenarios: ["Anti-counterfeiting verification", "Ownership history tracking"] },
      { industry: "💊 Pharma", scenarios: ["Drug serialization compliance", "Supply chain integrity verification"] }
    ],
    architecture: [
      { layer: "Blockchain Network", description: "Distributed ledger nodes" },
      { layer: "Smart Contracts", description: "Business logic automation" },
      { layer: "Integration Gateway", description: "ERP, IoT, external systems" },
      { layer: "Identity Layer", description: "Participant authentication" },
      { layer: "Application Interface", description: "Web/mobile user dashboards" }
    ]
  },
  16: { // Procurement
    keyFeatures: [
      { category: "📋 Requisition Management", items: ["Digital purchase requisitions", "Multi-level approval workflows", "Budget checking & controls"] },
      { category: "🔍 Sourcing Tools", items: ["Supplier comparison engine", "RFQ/RFP automation", "Contract management"] },
      { category: "📊 Spend Analytics", items: ["Category-level spend visibility", "Maverick spend detection", "Cost savings tracking"] },
      { category: "🔗 Supplier Integration", items: ["Supplier catalog management", "Punch-out catalog support", "Automated PO dispatch"] }
    ],
    detailedBenefits: [
      { category: "⚡ Operational", items: ["Automated approval workflows", "Elimination of manual PO errors"] },
      { category: "💰 Financial", items: ["Full spend visibility & control", "Contract compliance enforcement"] },
      { category: "📊 Strategic", items: ["Data-driven sourcing decisions", "Supplier consolidation insights"] },
      { category: "📋 Compliance", items: ["Policy enforcement through digital workflows", "Complete audit trail for all transactions"] }
    ],
    scope: [
      { category: "📌 Functional", items: ["Requisitioning", "Approval routing", "PO management", "Receiving & matching"] },
      { category: "📌 Technical", items: ["Cloud procurement suite", "ERP integration", "Mobile approval app"] },
      { category: "📌 Business", items: ["Enterprise procurement teams", "Government agencies", "Healthcare organizations"] }
    ],
    useCases: [
      { industry: "🏭 Manufacturing", scenarios: ["Direct material procurement", "MRO purchasing automation"] },
      { industry: "🏥 Healthcare", scenarios: ["Medical supply procurement", "Group purchasing organization integration"] },
      { industry: "🏢 Enterprise", scenarios: ["Indirect spend management", "Corporate purchasing policy enforcement"] }
    ],
    architecture: [
      { layer: "Requisition Portal", description: "User request & catalog browsing" },
      { layer: "Approval Engine", description: "Workflow routing & budget checks" },
      { layer: "Sourcing Module", description: "RFQ, supplier comparison, contracts" },
      { layer: "PO Management", description: "Order creation, dispatch, tracking" },
      { layer: "Analytics Suite", description: "Spend analysis, savings reporting" }
    ]
  },
  17: { // Cross-Border Trade Compliance
    keyFeatures: [
      { category: "📦 Product Classification", items: ["HTS code determination", "ECCN classification", "Schedule B management"] },
      { category: "📋 Rules of Origin", items: ["Origin determination engine", "FTA qualification analysis", "Certificate of origin automation"] },
      { category: "🔍 Restricted Party Screening", items: ["Real-time sanctions screening", "Denied persons list checks", "Entity resolution matching"] },
      { category: "🌍 Regulatory Intelligence", items: ["Real-time regulation updates", "Country-specific requirement alerts", "Trade embargo monitoring"] }
    ],
    detailedBenefits: [
      { category: "⚡ Operational", items: ["Instant product classification", "Automated compliance documentation"] },
      { category: "💰 Financial", items: ["FTA duty savings maximized", "Eliminated compliance penalties"] },
      { category: "🛡️ Risk", items: ["Zero sanction violations", "Reduced border seizure risk"] },
      { category: "🌍 Global Reach", items: ["190+ country coverage", "Multi-language support"] }
    ],
    scope: [
      { category: "📌 Functional", items: ["Product classification", "Origin determination", "Screening", "Documentation"] },
      { category: "📌 Technical", items: ["Cloud compliance platform", "Real-time regulation feeds", "ERP/TMS integration"] },
      { category: "📌 Business", items: ["Exporters & importers", "Customs brokers", "Compliance departments"] }
    ],
    useCases: [
      { industry: "🏭 Manufacturing", scenarios: ["Export classification for defense goods", "Multi-country origin tracking"] },
      { industry: "🛒 E-commerce", scenarios: ["Cross-border marketplace compliance", "Automated duty estimation for shoppers"] },
      { industry: "🧪 Chemicals", scenarios: ["Hazmat classification & documentation", "Chemical export control management"] }
    ],
    architecture: [
      { layer: "Regulation Database", description: "Global HTS, sanctions, FTA rules" },
      { layer: "Classification Engine", description: "AI-assisted code determination" },
      { layer: "Screening Service", description: "Real-time party & entity checks" },
      { layer: "Documentation Module", description: "Certificates, licenses, permits" },
      { layer: "Monitoring Dashboard", description: "Compliance status & alerts" }
    ]
  },
  18: { // Automated Palletization
    keyFeatures: [
      { category: "🤖 Robotic Control", items: ["High-speed pick & place", "Multi-SKU mixed palletizing", "Robotic arm coordination"] },
      { category: "📐 Load Optimization", items: ["3D pallet build simulation", "Weight distribution balancing", "Container space maximization"] },
      { category: "📦 Sorting Systems", items: ["Barcode/RFID-based sorting", "Destination-based routing", "Exception handling automation"] },
      { category: "📊 Performance Monitoring", items: ["Throughput dashboards", "Error rate tracking", "Equipment utilization analytics"] }
    ],
    detailedBenefits: [
      { category: "⚡ Operational", items: ["Massive increases in throughput", "Near-zero palletizing errors"] },
      { category: "💰 Financial", items: ["Reduced labor dependency", "Maximum space utilization in trucks"] },
      { category: "🛡️ Safety", items: ["Reduced workplace injuries", "Consistent pallet stability"] },
      { category: "📦 Quality", items: ["Optimized load stability for transit", "Reduced shipping-related damage"] }
    ],
    scope: [
      { category: "📌 Functional", items: ["Pallet build planning", "Robotic execution", "Quality verification", "Load manifesting"] },
      { category: "📌 Technical", items: ["PLC/robotic controls", "Computer vision", "WMS integration"] },
      { category: "📌 Business", items: ["Distribution centers", "Manufacturing outbound", "Cross-dock facilities"] }
    ],
    useCases: [
      { industry: "🛒 Retail Distribution", scenarios: ["Mixed-SKU store pallet building", "E-commerce parcel sorting"] },
      { industry: "🍺 Beverage", scenarios: ["Layer palletizing for bottles/cans", "Full-pallet vs. mixed-pallet optimization"] },
      { industry: "🏭 Manufacturing", scenarios: ["End-of-line palletizing automation", "Multi-format product handling"] }
    ],
    architecture: [
      { layer: "Sensor & Vision", description: "Cameras, scanners, weight sensors" },
      { layer: "Planning Engine", description: "3D pallet configuration optimization" },
      { layer: "Robotic Controls", description: "Arm coordination, pick & place" },
      { layer: "WMS Integration", description: "Order & inventory synchronization" },
      { layer: "Monitoring Dashboard", description: "Throughput, errors, utilization" }
    ]
  },
  19: { // Digital Twin
    keyFeatures: [
      { category: "🌐 Virtual Modeling", items: ["Full supply chain digital replica", "Real-time data synchronization", "3D facility visualization"] },
      { category: "🔮 Simulation Engine", items: ["What-if scenario testing", "Disruption impact modeling", "Demand variation simulation"] },
      { category: "📊 Optimization Tools", items: ["Network design optimization", "Inventory policy testing", "Capacity bottleneck identification"] },
      { category: "🤖 AI Integration", items: ["ML-driven recommendations", "Autonomous optimization loops", "Predictive scenario generation"] }
    ],
    detailedBenefits: [
      { category: "⚡ Operational", items: ["Risk-free strategy testing", "Faster decision cycles"] },
      { category: "💰 Financial", items: ["Accurate ROI predictions before investment", "Reduced cost of failed strategies"] },
      { category: "📊 Strategic", items: ["Data-driven network design", "Proactive bottleneck resolution"] },
      { category: "🛡️ Resilience", items: ["Black swan event preparedness", "Supply chain stress testing"] }
    ],
    scope: [
      { category: "📌 Functional", items: ["Network modeling", "Scenario simulation", "Optimization runs", "Decision support"] },
      { category: "📌 Technical", items: ["Cloud simulation platform", "Real-time data feeds", "3D visualization engine"] },
      { category: "📌 Business", items: ["Supply chain strategy teams", "Network design consultants", "Executive decision-makers"] }
    ],
    useCases: [
      { industry: "🏭 Manufacturing", scenarios: ["New plant location evaluation", "Production capacity planning"] },
      { industry: "🛒 Retail", scenarios: ["Distribution network redesign", "Seasonal surge preparation"] },
      { industry: "🚛 Logistics", scenarios: ["Hub relocation analysis", "Service level impact modeling"] }
    ],
    architecture: [
      { layer: "Data Integration", description: "Real-time feeds from ERP, WMS, TMS" },
      { layer: "Digital Twin Model", description: "Virtual supply chain replica" },
      { layer: "Simulation Engine", description: "Scenario creation & execution" },
      { layer: "Optimization Module", description: "AI-driven recommendations" },
      { layer: "Visualization Layer", description: "3D models, dashboards, reports" }
    ]
  },
  20: { // Predictive Analytics for Risk Management
    keyFeatures: [
      { category: "🌍 Global Risk Monitoring", items: ["Geopolitical event tracking", "Natural disaster monitoring", "Port congestion analysis"] },
      { category: "📈 Predictive Models", items: ["Disruption probability scoring", "Supply shortage forecasting", "Demand volatility prediction"] },
      { category: "🔔 Early Warning System", items: ["Real-time risk alerts", "Shipment impact assessment", "Escalation workflows"] },
      { category: "🛡️ Mitigation Planning", items: ["Alternative route suggestions", "Supplier diversification recommendations", "Inventory buffer optimization"] }
    ],
    detailedBenefits: [
      { category: "⚡ Operational", items: ["Early disruption detection", "Proactive mitigation actions"] },
      { category: "💰 Financial", items: ["Reduced disruption-related costs", "Optimized insurance premiums"] },
      { category: "🛡️ Resilience", items: ["Anti-fragile supply chain design", "Faster recovery from disruptions"] },
      { category: "📊 Strategic", items: ["Data-driven risk reporting for leadership", "Continuous risk profile improvement"] }
    ],
    scope: [
      { category: "📌 Functional", items: ["Risk identification", "Impact analysis", "Mitigation planning", "Recovery tracking"] },
      { category: "📌 Technical", items: ["Big data analytics platform", "NLP for news & social scanning", "ML risk scoring models"] },
      { category: "📌 Business", items: ["Global supply chain leaders", "Procurement risk managers", "Business continuity teams"] }
    ],
    useCases: [
      { industry: "🏭 Manufacturing", scenarios: ["Supplier risk monitoring", "Raw material shortage prediction"] },
      { industry: "🛒 Retail", scenarios: ["Seasonal disruption preparation", "Consumer demand shift detection"] },
      { industry: "🌍 Global Trade", scenarios: ["Geopolitical trade risk assessment", "Port congestion impact analysis"] }
    ],
    architecture: [
      { layer: "Data Sources", description: "News, weather, trade, IoT feeds" },
      { layer: "NLP & Analytics", description: "Text mining, event classification" },
      { layer: "Risk Scoring Engine", description: "ML probability & impact models" },
      { layer: "Alert & Action Module", description: "Notifications, recommendations" },
      { layer: "Executive Dashboard", description: "Risk heatmaps, trend reports" }
    ]
  }
};

// Read the file
const filePath = 'src/data/products.js';
let content = fs.readFileSync(filePath, 'utf8');

// Parse the products array
const match = content.match(/export const products = (\[[\s\S]*\]);/);
if (!match) {
  console.error('Could not parse products array');
  process.exit(1);
}

// Use Function constructor to evaluate the array safely
const productsStr = match[1];
const products = eval(productsStr);

let updated = 0;
products.forEach(product => {
  if (enrichments[product.id]) {
    const e = enrichments[product.id];
    if (!product.keyFeatures) {
      product.keyFeatures = e.keyFeatures;
      product.detailedBenefits = e.detailedBenefits;
      product.scope = e.scope;
      product.useCases = e.useCases;
      product.architecture = e.architecture;
      updated++;
    }
  }
});

// Write back
const output = `export const products = ${JSON.stringify(products, null, 2)};\n`;

// Fix JSON to JS (remove quotes from keys)
const jsOutput = output
  .replace(/"(\w+)":/g, '$1: ')
  .replace(/"/g, '"')
  .replace(/"/g, '"');

fs.writeFileSync(filePath, jsOutput, 'utf8');
console.log(`Updated ${updated} products with enriched data.`);
