import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// ekane (wish) er vitor main data gola ase
const WishCard = ({ wish, wishes, setWishes }) => {
  // destructuring the wish.
  const { title, _id, blogId, image, shortDescription, category, authorName } = wish;

  const handleDeleteWish = (blogId) => {
    console.log(blogId);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete card
        fetch(`https://blog-website-rho-henna.vercel.app/wishlists/${blogId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // https://blog-website-rho-henna.vercel.app/
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted succesfuly.",
                icon: "success",
              });

              // now reset the state to update update the ui
              const remaining = wishes.filter((wish) => {
                return wish.blogId !== blogId;
              });
              console.log(remaining);
              setWishes([...remaining]);
            }
          });
      }
    });
  };
  return (
    <div className="mt-4 py-5 flex gap-x-4 flex-wrap md:flex-nowrap gap-y-4 md:gap-y-4 border-b">
      <div className="md:max-w-80  md:max-h-80 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <img className="max-w-96 rounded-md  md:w-full" src={image} />
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
          {title}
        </h2>
        <p className="leading-relaxed text-black">{shortDescription}</p>
        <p className="text-gray-400 italic">author: {authorName}</p>
        <Link
          to={`/blogDetails/${blogId}`}
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
      <div className="">
        <FaTrash
          onClick={() => {
            handleDeleteWish(blogId);
          }}
          className="w-7 h-7"
        />
      </div>
    </div>
  );
};

export default WishCard;
