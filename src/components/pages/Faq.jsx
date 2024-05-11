import faqImg from "../../assets/faq.jpg";
const Faq = () => {
  return (
    <div className="my-12">
      <h1 className="font-bold text-4xl text-center my-12 border border-b-2 border-t-2 text-gray-800 py-4">
        Frequently Asked Questions
      </h1>
      <div className="flex mx-auto container flex-col lg:flex-row items-center justify-between">
        <div className="join join-vertical w-3/5">
          <div className="collapse collapse-arrow join-item border-b-2 border-gray-800">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              How often do you publish new content?
            </div>
            <div className="collapse-content">
              <p>
                We strive to provide fresh and engaging content regularly to
                keep our readers informed and entertained. Typically, we aim to
                publish new content multiple times per week. However, the
                frequency may vary depending on the availability of quality
                content and the nature of the topics we cover. Rest assured, we
                prioritize delivering valuable content to our audience
                consistently.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-b-2 border-gray-800">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Can I contribute a guest post to your blog?
            </div>
            <div className="collapse-content">
              <p>
                Absolutely! We welcome guest contributions from talented writers
                and industry experts who can offer unique insights and
                perspectives. If you're interested in contributing a guest post
                to our blog, please reach out to us via our contact form or
                email with your proposal and relevant writing samples. We're
                always eager to collaborate with passionate individuals to
                enrich our content offerings.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-b-2 border-gray-800">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Do you have a newsletter?
            </div>
            <div className="collapse-content">
              <p>
                Yes, we have a newsletter! Our newsletter is a fantastic way to
                stay updated on the latest blog posts, news, and exclusive
                content. Subscribers receive regular email updates with curated
                content, special offers, and insights delivered straight to
                their inbox. Join our community of subscribers today to stay
                connected and never miss out on valuable updates!
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-b-2 border-gray-800">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              How can I advertise on your blog?
            </div>
            <div className="collapse-content">
              <p>
                We offer advertising opportunities for businesses and brands
                interested in reaching our audience. Whether you're looking to
                promote your products, services, or events, we have various
                advertising options available, including banner ads, sponsored
                content, and partnerships. Please contact our advertising team
                via email or our contact form to discuss your advertising needs
                and explore collaboration opportunities. We look forward to
                helping you achieve your marketing objectives through our
                platform!
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-b-2 border-gray-800">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              How can I contact you for more information?
            </div>
            <div className="collapse-content">
              <p>
                For inquiries, feedback, or further information, please feel
                free to reach out to us through our contact form on the website
                or directly via email. We value open communication with our
                readers and stakeholders and strive to respond promptly to all
                inquiries. Your feedback and questions are essential to us, and
                we're here to assist you in any way we can.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-b-2 border-gray-800">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What is your privacy policy?
            </div>
            <div className="collapse-content">
              <p>
                Our privacy policy outlines how we collect, use, and protect
                your personal information when you interact with our website. We
                are committed to safeguarding your privacy and ensuring the
                security of your data. Our privacy policy covers topics such as
                data collection methods, usage, sharing practices, and your
                rights regarding your personal information. You can review our
                full privacy policy on our website for more details.
              </p>
            </div>
          </div>
        </div>
        <div className="w-4/12">
          <img className="w-full rounded-3xl" src={faqImg} />
        </div>
      </div>
    </div>
  );
};

export default Faq;
// className=""
