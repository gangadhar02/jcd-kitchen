import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What types of modular kitchens do you design in Bangalore?",
      answer: "We design all types of modular kitchens including L-shaped, U-shaped, parallel, island, and straight kitchens. Our designs cater to various styles like contemporary, modern, traditional, and minimalist, customized to fit your space and requirements perfectly."
    },
    {
      question: "What is the cost of a modular kitchen in Bangalore?",
      answer: "Modular kitchen costs typically range from ₹1.2 lakhs to ₹5 lakhs depending on size, materials, and accessories. We offer transparent pricing with options for every budget - basic, premium, and luxury packages. Get an accurate quote with our free 3D design consultation."
    },
    {
      question: "How long does it take to install a modular kitchen?",
      answer: "Our standard kitchen installation takes 20-25 working days from design approval. This includes 5-7 days for design finalization, 10 days for manufacturing, and 5-7 days for installation. We guarantee 45-day delivery or provide ₹2000/day compensation for delays."
    },
    {
      question: "What materials and brands do you use for kitchen cabinets?",
      answer: "We use premium materials including BWR plywood, HDHMR boards, and marine plywood from trusted brands like Century Ply, Greenply, and Merino. For hardware, we use Hettich, Ebco, and Hafele fittings. All materials come with 10-year warranty."
    },
    {
      question: "Do you provide kitchen appliances with the modular kitchen?",
      answer: "Yes, we offer complete kitchen solutions including chimney, hob, built-in ovens, and dishwashers from brands like Faber, Franke, and Bosch. We can integrate your existing appliances or help you choose new ones that fit perfectly with your kitchen design."
    },
    {
      question: "Can I see my kitchen design before making payment?",
      answer: "Absolutely! We provide detailed 3D visualization of your kitchen before any payment. You can see exact cabinet layouts, color combinations, and even virtual walk-throughs. We offer unlimited design revisions until you're completely satisfied with the design."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <div
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 py-4 opacity-100'
                    : 'max-h-0 py-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;