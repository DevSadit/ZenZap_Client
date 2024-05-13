import { Link } from "react-router-dom";

const WishCard = ({wish}) => {
    const { title, _id, image, shortDescription, category, authorName } = wish;
    return (
      <div className="mt-4 py-5 flex gap-x-4 flex-wrap md:flex-nowrap border-b">
        <div className="md:w-40 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <img className="rounded-md" src={image} />
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
            {title}
          </h2>
          <p className="leading-relaxed text-black">{shortDescription}</p>
            <p className="text-gray-400 italic">author: {authorName}</p>
          <Link
            to={`/blogDetails/${_id}`}
            className="text-indigo-600 inline-flex items-center mt-4"
          >
            Read Now
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    );
};

export default WishCard;