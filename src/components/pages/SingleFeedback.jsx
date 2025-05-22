import { FaQuoteLeft } from "react-icons/fa";

const SingleFeedback = ({ feedback }) => {
  const {
    customerName,
    customerImg,
    customerCompanyName,
    customerPosition,
    testimonial,
  } = feedback;
  
  return (
    <div className="card w-80 md:w-96 bg-base-100 shadow-xl mx-4 hover:shadow-2xl transition-all duration-300">
      <div className="card-body">
        <FaQuoteLeft className="text-primary/20 text-4xl mb-4" />
        
        <p className="text-base-content/80 line-clamp-4 mb-6">
          {testimonial}
        </p>
        
        <div className="flex items-center gap-4 mt-auto">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={customerImg} alt={customerName} />
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-base-content">{customerName}</h3>
            <p className="text-sm text-base-content/70">
              {customerPosition}, {customerCompanyName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFeedback;
