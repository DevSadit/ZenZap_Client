import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import WishCard from "./WishCard";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const [wishes, setWishes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://blog-website-rho-henna.vercel.app/wishlist/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setWishes(data);
        setLoading(false);
      });
  }, [user]);
  // console.log(wishes);
  return (
    <div className="container text-gray-800 mx-auto">
      <div className="text-left border-b border-gray-800 pb-4">
        <h1 className="font-bold text-2xl">Your Wishlist</h1>
        <h4 className="text-blue-600 font-semibold text-4xl ">
          Wishlisted Blog {wishes.length}
        </h4>
      </div>
      <div>
        {loading ? (
          <SkeletonTheme baseColor="#202020" highlightColor="#2563EB">
            <Skeleton count={3} baseColor="#D1D5DB"></Skeleton>
          </SkeletonTheme>
        ) : (
          wishes.map((wish) => (
            <WishCard
              wish={wish}
              key={wish._id}
              wishes={wishes}
              setWishes={setWishes}
            ></WishCard>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;
