export const siteData = {
  config: {
    brandName: "Opti360",
    positioning: "Operational ERP for FBA Professionals",
    tone: "Factual, Professional, Operational",
    language: "EN",
    launch_date: "Q2 2025"
  },
  icp_logic: {
    toggle_options: [
      { id: "reseller", label: "Amazon Reseller (Wholesale & Arbitrage)" },
      { id: "prep", label: "Prep Center / Prep Partner" }
    ]
  },
  hero: {
    reseller: {
      headline: "Stop the spreadsheet chaos. Take operational control of your FBA business.",
      subheadline: "The ERP system for Amazon sellers who demand precision in purchase planning, inventory control, and real-time margin accuracy.",
      cta: "Schedule Operational Demo",
      highlighted_modules: ["Purchase Planner", "Live COG Tracker", "Cashflow Monitor"]
    },
    prep: {
      headline: "The end-to-end operating system for your Prep Center.",
      subheadline: "Manage inbounds, labeling, FBA shipments, and multi-client claims in one standardized, scalable workflow.",
      cta: "Configure Your Prep Center",
      highlighted_modules: ["Multi-client Management", "Inbound/Outbound Control", "Claims Handling"]
    }
  },
  flagship_features: [
    {
      id: "purchase_planning",
      title: "Purchase Planner",
      outcome: "Automate restocking based on real velocity, lead times, and seasonal trends."
    },
    {
      id: "warehouse_execution",
      title: "Warehouse Execution",
      outcome: "Direct control over prep and packing workflows to eliminate ASIN and FNSKU errors."
    },
    {
      id: "invoice_matching",
      title: "Invoice Matching & COG",
      outcome: "Achieve true profitability by linking purchase invoices directly to specific FBA units."
    },
    {
      id: "claims_manager",
      title: "Claims Manager",
      outcome: "Automatically detect shipment discrepancies and generate documentation for Amazon reimbursements."
    }
  ],
  pricing: {
    common_note: "Plans scale by operational complexity, not artificial feature locks.",
    plans: [
      {
        id: "free",
        name: "TEST / VALIDATION",
        best_for: "Testing workflows and initial validation",
        price: "0",
        recommended_for: [],
        features: ["Limit: 50 ASINs", "Basic operational dashboard", "Manual data import"]
      },
      {
        id: "reseller_master",
        name: "RESELLER – MASTER",
        best_for: "Scaling Wholesale & Arbitrage operations",
        price: "Custom / Tiered",
        recommended_for: ["reseller"],
        features: ["Full Purchase Planner", "Multi-account SP-API support", "Advanced Live COG", "Priority Support"]
      },
      {
        id: "prep_partner",
        name: "PREP PARTNER",
        best_for: "Logistics hubs and Prep-as-a-Service",
        price: "Custom / Tiered",
        recommended_for: ["prep"],
        badge: "Multi-client",
        features: ["Client Account Management", "Inbound/Outbound Control System", "Claims Handling Module", "Client Portal Access"]
      }
    ]
  },
  feature_matrix: [
    {
      group: "Purchase & Planning",
      features: [
        { name: "Restock forecasting", free: "Basic", reseller_master: "Advanced", prep_partner: "N/A" },
        { name: "Lead time management", free: false, reseller_master: true, prep_partner: true },
        { name: "Supplier lead time tracking", free: false, reseller_master: true, prep_partner: false }
      ]
    },
    {
      group: "Warehouse & Prep",
      features: [
        { name: "Barcode scanning (FNSKU)", free: true, reseller_master: true, prep_partner: true },
        { name: "Batch labeling workflows", free: false, reseller_master: true, prep_partner: true },
        { name: "Multi-client warehouse isolation", free: false, reseller_master: false, prep_partner: true }
      ]
    },
    {
      group: "Finance & Accuracy",
      features: [
        { name: "Live COG Calculation", free: "Manual", reseller_master: "Automated", prep_partner: "Optional" },
        { name: "OCR Invoice Processing", free: false, reseller_master: true, prep_partner: false },
        { name: "VAT/Tax compliance export", free: true, reseller_master: true, prep_partner: true }
      ]
    }
  ],
  faq: [
    {
      q: "Is this just another analytics dashboard?",
      a: "No. Opti360 is an operational ERP. We focus on execution: what to buy, what to ship, how to prep, and how to reconcile invoices. Analytics are a byproduct, not the primary goal."
    },
    {
      q: "Do I need my own Keepa API?",
      a: "It depends on your plan. High-tier plans include access via our tokens, while entry-level plans allow you to connect your own keys for cost optimization."
    },
    {
      q: "Is my data isolated from other sellers?",
      a: "Absolutely. We use a strictly isolated SP-API session model. Your sales and purchase data are stored in separated data containers, inaccessible to anyone else."
    }
  ],
  demo_form: {
    business_models: ["Wholesale", "Arbitrage", "Hybrid", "Prep Center"],
    asin_ranges: ["1-50", "51-500", "501-2000", "2000+"],
    success_message: "Thank you. Our team will manually review your profile and prepare a demo tailored to your operational scale."
  },
  differentiators: [
    {
      id: "diff_1",
      label: "Operational ERP Architecture",
      description: "Unlike analytics dashboards that only show past data, Opti360 is built for execution and proactive workflow management."
    },
    {
      id: "diff_2",
      label: "Invoice-to-Unit Mapping",
      description: "True COG accuracy by linking specific purchase invoices to individual units in FBA, eliminating 'average cost' errors."
    },
    {
      id: "diff_3",
      label: "Lead-Time Aware Planning",
      description: "Purchase Planner factors in supplier production time and transport duration to prevent stockouts before they happen."
    },
    {
      id: "diff_4",
      label: "OCR Document Processing",
      description: "Automated data extraction from supplier invoices and packing lists to minimize manual entry and human error."
    },
    {
      id: "diff_5",
      label: "Dynamic Workflow Enforcement",
      description: "Standardized SOPs built into the UI—warehouse staff cannot skip steps in prep, labeling, or inspection."
    },
    {
      id: "diff_6",
      label: "Automated Claims Generator",
      description: "Identify shipment discrepancies instantly and generate the exact documentation required for Amazon reimbursements."
    },
    {
      id: "diff_7",
      label: "Multi-Client Isolation",
      description: "For Prep Centers: Complete data and inventory separation for multiple client accounts within a single operational view."
    },
    {
      id: "diff_8",
      label: "Private SP-API Sessions",
      description: "High-security data model with isolated API sessions, ensuring your sensitive sales data is never co-mingled."
    },
    {
      id: "diff_9",
      label: "Live Inventory Mapping",
      description: "Real-time visibility across all stages: Supplier, Transit, Prep Center, and FBA fulfillment centers."
    },
    {
      id: "diff_10",
      label: "FNSKU Verification",
      description: "Integrated barcode scanning at the prep stage to ensure every ASIN matches its FNSKU before shipping."
    },
    {
      id: "diff_11",
      label: "Cashflow Projection",
      description: "Visualizing future capital requirements based on upcoming purchase orders and current sales velocity."
    },
    {
      id: "diff_12",
      label: "ASIN-Level Profitability",
      description: "Net profit calculation including real prep costs, shipping fees, and accurate tax adjustments per unit."
    },
    {
      id: "diff_13",
      label: "Anti-Spreadsheet Engine",
      description: "Replace 90% of operational spreadsheets with built-in planners, reducing 'version control' chaos."
    },
    {
      id: "diff_14",
      label: "Supplier Performance Tracking",
      description: "Monitor supplier reliability, defect rates, and lead-time accuracy to optimize your supply chain."
    },
    {
      id: "diff_15",
      label: "Scalable Infrastructure",
      description: "Designed to handle high-volume accounts (2000+ ASINs) without performance degradation or UI lag."
    }
  ]
};
