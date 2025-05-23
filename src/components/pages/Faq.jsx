import { useState } from "react";
import { motion } from "framer-motion";
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-base-200">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  text-blue-600">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto my-4 rounded"></div>
          <p className="text-base-content/80 max-w-3xl mx-auto text-lg">
            Find answers to common questions about our blog platform, content creation, and more
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {faqItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 border-primary"
            >
              <div 
                className="p-6 cursor-pointer flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-xl font-semibold text-primary-focus">{item.question}</h3>
                <span className="text-primary">
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96 pb-6' : 'max-h-0'}`}
              >
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Still have questions?</h3>
              <p className="mb-6 text-white/90">
                Can't find the answer you're looking for? Please contact our friendly support team.
              </p>
              <button className="btn bg-white text-primary hover:bg-white/90 border-0 rounded-full px-8">
                Contact Us
              </button>
            </div>
            <div className="md:w-1/2 bg-white/10 p-8 md:p-12 flex items-center justify-center">
              <div className="text-center text-white">
                <FaQuestionCircle className="text-6xl md:text-7xl mx-auto mb-4 opacity-90" />
                <p className="text-lg font-medium">We're here to help!</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// FAQ data array for cleaner component structure
const faqItems = [
  {
    question: "What is ZenZap Blog?",
    answer: "ZenZap Blog is a platform where we share insights, stories, and ideas on a variety of topics including technology, lifestyle, and more. Our goal is to provide valuable content that informs, inspires, and engages our readers."
  },
  {
    question: "How often is new content published?",
    answer: "We publish new content regularly, typically 2-3 times per week. Subscribe to our newsletter to stay updated with our latest posts and never miss an article."
  },
  {
    question: "Can I contribute to ZenZap Blog?",
    answer: "Yes! We welcome guest contributions from writers and experts. Please contact us through the 'Contact Us' page with your article idea, and our editorial team will get back to you."
  },
  {
    question: "How can I share your articles?",
    answer: "Each article has social sharing buttons that allow you to easily share our content on platforms like Twitter, Facebook, LinkedIn, and more. We appreciate you helping us spread the word!"
  },
  {
    question: "Do you offer a newsletter subscription?",
    answer: "Yes, we offer a free newsletter subscription. Sign up to receive our latest articles, exclusive content, and special offers directly to your inbox."
  },
  {
    question: "How can I contact the ZenZap team?",
    answer: "You can reach out to us through the 'Contact Us' page on our website, or send an email directly to support@zenzap.com. We aim to respond to all inquiries within 48 hours."
  }
];

export default Faq;