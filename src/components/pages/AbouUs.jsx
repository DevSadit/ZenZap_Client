import { motion } from "framer-motion";
import { useState } from "react";
const AbouUs = () => {
  const [showCard, setShowCard] = useState(false);
  return (
    <div className="my-12">
      <h1 className="font-bold text-4xl text-center my-12 bg-gray-800 border-t-2 text-white py-4">
        About Us
      </h1>

      <div className="flex container mx-auto justify-center px-3 items-center h-[440px] md:h-[600px]">
        <motion.div
          className="text-white p-8 rounded-lg shadow-lg bg-blue-700 h"
          whileHover={{
            scale: 1.1,
          }}
          transition={{
            layout: {
              duration: 1,
              type: "spring",
            },
          }}
          layout
          onClick={() => setShowCard(!showCard)}
        >
          <motion.h3 className="text-2xl text-center p-4 font-bold">
            Click to Know About Us
          </motion.h3>
          {showCard && (
            <motion.p
              className="w-full text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Explore a captivating collection of insights and knowledge in our
              blog section. Dive into a world of diverse topics, ranging from
              technology trends to lifestyle tips and beyond. Engage with
              thought-provoking articles crafted to inform, inspire, and
              entertain. Whether {"you're"} seeking practical advice, industry
              updates, or simply a moment of reflection, our blog offers
              something for everyone. Delve into expertly curated content
              designed to spark curiosity and foster meaningful conversations.
              Stay informed, stay inspired, and embark on a journey of discovery
              with our ever-growing repository of articles, waiting to enrich
              your mind and broaden your horizons.
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AbouUs;
