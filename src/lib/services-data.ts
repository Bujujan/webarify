export interface ServicePackage {
    name: string
    price: number
    billing: string
    description: string
    features: string[]
    popular?: boolean
  }
  
  export interface ServiceFeature {
    title: string
    description: string
  }
  
  export interface ProcessStep {
    title: string
    description: string
  }
  
  export interface FAQ {
    question: string
    answer: string
  }
  
  export interface Service {
    slug: string
    title: string
    category: string
    shortDescription: string
    description: string
    image: string
    heroImage: string
    features: ServiceFeature[]
    process: ProcessStep[]
    packages: ServicePackage[]
    faqs?: FAQ[]
  }
  
  export const services: Service[] = [
    {
      slug: "web-development",
      title: "Web Development",
      category: "DEVELOPMENT",
      shortDescription: "Modern, responsive websites and web applications that drive results.",
      description:
        "We create custom websites and web applications that are fast, responsive, and designed to convert visitors into customers. Our web development services focus on creating seamless user experiences that help your business stand out online.",
      image: "/assets/images/webdev.jpeg",
      heroImage: "/assets/images/webdev.jpeg",
      features: [
        {
          title: "Custom Website Design",
          description: "Unique designs tailored to your brand identity and business goals.",
        },
        {
          title: "E-commerce Solutions",
          description: "Secure, user-friendly online stores that drive sales and growth.",
        },
        {
          title: "Web Applications",
          description: "Custom web applications that streamline your business processes.",
        },
        {
          title: "Responsive Design",
          description: "Websites that look and function perfectly on all devices.",
        },
        {
          title: "SEO Optimization",
          description: "Built-in SEO best practices to improve your search engine rankings.",
        },
        {
          title: "Performance Optimization",
          description: "Fast-loading websites that provide an excellent user experience.",
        },
      ],
      process: [
        {
          title: "Discovery & Planning",
          description:
            "We begin by understanding your business goals, target audience, and requirements to create a strategic plan for your website.",
        },
        {
          title: "Design & Prototyping",
          description:
            "Our designers create wireframes and visual designs that align with your brand and business objectives.",
        },
        {
          title: "Development",
          description:
            "Our developers build your website using modern technologies and best practices for performance and security.",
        },
        {
          title: "Testing & Quality Assurance",
          description:
            "We thoroughly test your website across devices and browsers to ensure a flawless user experience.",
        },
        {
          title: "Launch & Training",
          description: "We deploy your website and provide training on how to manage and update your content.",
        },
      ],
      packages: [
        {
          name: "Basic",
          price: 999,
          billing: "one-time",
          description: "Perfect for small businesses just getting started",
          features: [
            "5-page responsive website",
            "Mobile-friendly design",
            "Basic SEO setup",
            "Contact form",
            "Social media integration",
            "1 round of revisions",
            "2 weeks delivery",
          ],
        },
        {
          name: "Standard",
          price: 2499,
          billing: "one-time",
          description: "Ideal for growing businesses with specific needs",
          popular: true,
          features: [
            "10-page responsive website",
            "Mobile-friendly design",
            "Advanced SEO setup",
            "Contact form with validation",
            "Social media integration",
            "Blog/news section",
            "Basic animations",
            "3 rounds of revisions",
            "3 weeks delivery",
            "1 month of support",
          ],
        },
        {
          name: "Premium",
          price: 4999,
          billing: "one-time",
          description: "Comprehensive solution for established businesses",
          features: [
            "Unlimited pages",
            "Custom responsive design",
            "Advanced SEO optimization",
            "Custom forms with validation",
            "Social media integration",
            "Blog/news section",
            "Custom animations",
            "E-commerce functionality",
            "Content management system",
            "Performance optimization",
            "Unlimited revisions",
            "5 weeks delivery",
            "3 months of support",
            "Training session",
          ],
        },
      ],
      faqs: [
        {
          question: "How long does it take to build a website?",
          answer:
            "The timeline depends on the complexity of your website. A basic website typically takes 2-3 weeks, while more complex projects may take 5-8 weeks. We'll provide a specific timeline during our initial consultation.",
        },
        {
          question: "Do you provide hosting services?",
          answer:
            "Yes, we offer reliable hosting solutions with regular backups and security monitoring. Hosting is typically billed annually and can be added to any web development package.",
        },
        {
          question: "Can I update the website myself after it's built?",
          answer:
            "We build websites with user-friendly content management systems that make it easy for you to update content, add pages, and make basic changes without technical knowledge.",
        },
        {
          question: "Do you offer maintenance services?",
          answer:
            "Yes, we offer ongoing maintenance packages to keep your website secure, updated, and performing optimally. These can be discussed after project completion or added to your initial package.",
        },
      ],
    },
    {
      slug: "branding",
      title: "Branding",
      category: "DESIGN",
      shortDescription: "Create a memorable brand identity that resonates with your audience.",
      description:
        "Our branding services help you create a cohesive and memorable brand identity that resonates with your target audience. From logo design to comprehensive brand guidelines, we'll help you stand out in a crowded marketplace.",
      image: "/assets/images/branding.jpeg",
      heroImage: "/assets/images/branding.jpeg",
      features: [
        {
          title: "Logo Design",
          description: "Distinctive, versatile logos that capture your brand essence.",
        },
        {
          title: "Brand Strategy",
          description: "Strategic positioning to differentiate your brand in the market.",
        },
        {
          title: "Visual Identity",
          description: "Cohesive visual elements including colors, typography, and imagery.",
        },
        {
          title: "Brand Guidelines",
          description: "Comprehensive documentation to ensure brand consistency.",
        },
        {
          title: "Marketing Materials",
          description: "Branded collateral for both print and digital channels.",
        },
        {
          title: "Brand Messaging",
          description: "Compelling messaging that communicates your brand values.",
        },
      ],
      process: [
        {
          title: "Brand Discovery",
          description:
            "We explore your business values, target audience, and competitive landscape to understand your unique position.",
        },
        {
          title: "Strategy Development",
          description:
            "We develop a strategic foundation for your brand, including positioning, messaging, and visual direction.",
        },
        {
          title: "Creative Exploration",
          description: "Our designers create multiple concepts that align with your brand strategy.",
        },
        {
          title: "Refinement",
          description: "We refine the selected concept based on your feedback to create a polished final product.",
        },
        {
          title: "Implementation",
          description: "We deliver comprehensive brand assets and guidelines for consistent application.",
        },
      ],
      packages: [
        {
          name: "Starter",
          price: 799,
          billing: "one-time",
          description: "Essential branding for new businesses",
          features: [
            "Logo design (2 concepts)",
            "Color palette",
            "Typography selection",
            "Business card design",
            "Social media profile images",
            "2 rounds of revisions",
            "2 weeks delivery",
          ],
        },
        {
          name: "Professional",
          price: 1899,
          billing: "one-time",
          description: "Complete branding package for established businesses",
          popular: true,
          features: [
            "Logo design (4 concepts)",
            "Color palette",
            "Typography selection",
            "Brand guidelines",
            "Business card design",
            "Letterhead & envelope",
            "Email signature",
            "Social media profile images",
            "3 rounds of revisions",
            "3 weeks delivery",
          ],
        },
        {
          name: "Enterprise",
          price: 3499,
          billing: "one-time",
          description: "Strategic branding for companies ready to scale",
          features: [
            "Brand strategy workshop",
            "Logo design (6 concepts)",
            "Color palette",
            "Typography selection",
            "Comprehensive brand guidelines",
            "Business card design",
            "Letterhead & envelope",
            "Email signature",
            "Social media profile & cover images",
            "Custom illustrations",
            "Marketing materials (brochure, flyer)",
            "Presentation template",
            "Unlimited revisions",
            "5 weeks delivery",
            "1 month of support",
          ],
        },
      ],
      faqs: [
        {
          question: "Why is branding important for my business?",
          answer:
            "Branding helps you stand out in a crowded marketplace, builds customer trust, creates emotional connections, and adds value to your business. A strong brand leads to customer loyalty and can command premium pricing.",
        },
        {
          question: "How long does the branding process take?",
          answer:
            "The timeline varies depending on the package and complexity. A basic logo and brand identity typically takes 2-3 weeks, while comprehensive branding projects may take 4-6 weeks.",
        },
        {
          question: "What files will I receive for my logo?",
          answer:
            "We provide your logo in multiple formats suitable for both print and digital use, including AI, EPS, PDF, PNG, and JPG files in both color and black/white versions.",
        },
        {
          question: "Do you offer brand refreshes for existing businesses?",
          answer:
            "Yes, we offer brand refresh services for businesses looking to update their existing brand identity while maintaining brand recognition. Contact us for a custom quote.",
        },
      ],
    },
    {
      slug: "ai-chatbots",
      title: "AI Chatbots",
      category: "TECHNOLOGY",
      shortDescription: "Intelligent conversational agents that enhance customer experience.",
      description:
        "Our AI chatbot solutions help businesses automate customer interactions, provide 24/7 support, and streamline operations. We create custom chatbots that understand natural language and deliver personalized experiences.",
      image: "/assets/images/chatbot.png",
      heroImage: "/assets/images/chatbot.png",
      features: [
        {
          title: "Custom AI Development",
          description: "Tailored chatbot solutions designed for your specific business needs.",
        },
        {
          title: "Natural Language Processing",
          description: "Advanced NLP capabilities for human-like conversations.",
        },
        {
          title: "Multi-channel Integration",
          description: "Deploy your chatbot across website, messaging apps, and social media.",
        },
        {
          title: "Analytics Dashboard",
          description: "Insights into user interactions to continuously improve performance.",
        },
        {
          title: "Seamless Handoff",
          description: "Smooth transition to human agents when needed.",
        },
        {
          title: "Continuous Learning",
          description: "AI that improves over time based on interactions.",
        },
      ],
      process: [
        {
          title: "Requirements Analysis",
          description: "We identify your business needs, use cases, and target audience to define the chatbot's scope.",
        },
        {
          title: "Conversation Design",
          description: "We design conversation flows and user journeys that feel natural and address user needs.",
        },
        {
          title: "Development & Training",
          description: "Our developers build and train the AI model with your business data and industry knowledge.",
        },
        {
          title: "Testing & Optimization",
          description: "We rigorously test the chatbot across scenarios and optimize its responses.",
        },
        {
          title: "Deployment & Integration",
          description: "We deploy the chatbot to your chosen platforms and integrate it with your existing systems.",
        },
        {
          title: "Monitoring & Improvement",
          description: "We continuously monitor performance and make improvements based on real-world interactions.",
        },
      ],
      packages: [
        {
          name: "Basic",
          price: 1499,
          billing: "one-time + $99/mo",
          description: "Simple chatbot for common customer queries",
          features: [
            "FAQ-based responses",
            "Website integration",
            "Basic analytics",
            "Up to 50 trained responses",
            "Email notification system",
            "8-5 support hours coverage",
            "3 weeks delivery",
          ],
        },
        {
          name: "Advanced",
          price: 2999,
          billing: "one-time + $199/mo",
          description: "Intelligent chatbot with natural language understanding",
          popular: true,
          features: [
            "Natural language processing",
            "Multi-channel integration (website, Facebook, WhatsApp)",
            "Advanced analytics dashboard",
            "Up to 200 trained responses",
            "Custom conversation flows",
            "Human handoff capability",
            "24/7 support coverage",
            "CRM integration",
            "4 weeks delivery",
            "Monthly performance reports",
          ],
        },
        {
          name: "Enterprise",
          price: 5999,
          billing: "one-time + $399/mo",
          description: "Comprehensive AI solution for complex business needs",
          features: [
            "Advanced natural language understanding",
            "Multi-language support",
            "All channel integrations",
            "Unlimited trained responses",
            "Custom AI model training",
            "Voice recognition capability",
            "Seamless human handoff",
            "Full enterprise system integration",
            "Custom analytics and reporting",
            "Dedicated account manager",
            "24/7 priority support",
            "6 weeks delivery",
            "Quarterly strategy sessions",
          ],
        },
      ],
      faqs: [
        {
          question: "How accurate are AI chatbots?",
          answer:
            "Modern AI chatbots can achieve high accuracy rates, typically 85-95% for well-trained models. The accuracy depends on the quality of training data, the complexity of queries, and ongoing optimization efforts.",
        },
        {
          question: "Can the chatbot integrate with our existing systems?",
          answer:
            "Yes, our chatbots can integrate with your CRM, help desk, e-commerce platform, and other business systems through APIs. This enables seamless data exchange and more personalized customer interactions.",
        },
        {
          question: "How long does it take to deploy a chatbot?",
          answer:
            "Basic chatbots can be deployed in 2-3 weeks, while more complex solutions may take 4-8 weeks depending on the level of customization, integrations required, and the amount of training data.",
        },
        {
          question: "Will the chatbot continue to improve over time?",
          answer:
            "Yes, our chatbots use machine learning to continuously improve based on interactions. Additionally, our team regularly reviews performance metrics and makes adjustments to enhance accuracy and effectiveness.",
        },
      ],
    },
  ]
  
  export function getServiceBySlug(slug: string): Service | undefined {
    return services.find((service) => service.slug === slug)
  }
  