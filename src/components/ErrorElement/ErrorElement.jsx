import Lottie from "lottie-react";
import file from "../../assets/lottie.json"
import { Link } from "react-router-dom";
const ErrorElement = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Lottie className="" animationData={file} loop={true} />
        <Link to="/">
          <button className="mx-auto btn bg-blue-500 text-white">
            Back To Home
          </button>
        </Link>
      </div>
    );
};

export default ErrorElement;