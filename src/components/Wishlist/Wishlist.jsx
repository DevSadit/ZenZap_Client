import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import WishCard from "./WishCard";

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const [wishes, setWishes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/wishlist/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setWishes(data);
      });
  }, [user]);
  console.log(wishes);
  return (
    <div className="container text-gray-800 mx-auto">
      <div className="text-left border-b border-gray-800 pb-4">
        <h1 className="font-bold text-2xl">Your Wishlist</h1>
        <h4 className="text-blue-600 font-semibold text-4xl ">
          Wishlisted Blog {wishes.length}
        </h4>
      </div>
      <div>
        {wishes.map((wish) => (
          <WishCard key={wish._id} wish={wish}></WishCard>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
