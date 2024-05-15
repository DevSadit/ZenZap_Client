import { motion } from "framer-motion";
import { useState } from "react";
const AbouUs = () => {
  const [showCard, setShowCard] = useState(false);
  return (
    <div className="my-12">
      <h1 className="font-bold text-4xl text-center my-12 bg-gray-800 border-t-2 text-white py-4">
        About Us
      </h1>

      <div className="flex container mx-auto justify-center px-3 items-center min-h-[440px] md:min-h-[600px]">
        <motion.div
          className="text-white p-8 rounded-lg shadow-lg bg-gray-800 h"
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
              Welcome to our blog, where words weave stories, ideas spark
              revolutions, and curiosity knows no bounds. Here, we embark on a
              journey through the vast landscape of human experience, exploring
              the depths of knowledge and the heights of imagination. Our
              mission is simple yet profound: to inspire, inform, and ignite the
              flames of passion within every reader who graces our pages. At the
              heart of our endeavor lies a commitment to curiosity—the
              relentless pursuit of understanding, the insatiable thirst for
              knowledge that propels us forward. We believe that curiosity is
              the key that unlocks the doors to new worlds, new perspectives,
              and new possibilities. It is the driving force behind everything
              we do, guiding us as we delve into the realms of science, art,
              philosophy, and beyond. But curiosity alone is not enough. To
              truly explore the depths of human experience, we must also embrace
              diversity—in thought, in culture, in belief. Our blog is a
              celebration of the rich tapestry of humanity, a mosaic of voices
              and perspectives that reflect the kaleidoscope of the human
              experience. Here, you will find stories from every corner of the
              globe, spanning across time and space, weaving together the
              threads of our shared history and our collective dreams. Yet,
              amidst the vastness of the world we inhabit, we recognize the
              importance of connection—of forging bonds that transcend borders
              and bridge divides. Our blog is more than just a collection of
              words on a screen; it is a community—a gathering place for kindred
              spirits to come together, to share ideas, to challenge
              assumptions, and to grow together. Here, you will find not only
              inspiration but also support, encouragement, and camaraderie as we
              navigate the winding paths of life together. So, whether you are a
              seasoned scholar or a curious newcomer, whether you seek knowledge
              or simply a moment of respite from the chaos of the world, we
              invite you to join us on this journey—a journey of discovery, of
              exploration, of wonder. Together, let us embark on an adventure of
              the mind and soul, as we uncover the mysteries of the universe and
              revel in the beauty of the human experience. Welcome to our
              blog—where curiosity knows no bounds, and the possibilities are
              endless.
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AbouUs;
