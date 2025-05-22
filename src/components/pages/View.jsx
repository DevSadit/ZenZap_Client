import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { motion } from "framer-motion";

import img1 from "../../assets/img-box/sqr.jpg";
import img2 from "../../assets/img-box/microsoft-365-bWL-c09Ys80-unsplash.jpg";
import img3 from "../../assets/img-box/luca-bravo-XJXWbfSo2f0-unsplash.jpg";
import img4 from "../../assets/img-box/jo-jo-7j3nCPOQbDQ-unsplash.jpg";
import img5 from "../../assets/img-box/dylan-gillis-KdeqA3aTnBY-unsplash.jpg";
import img6 from "../../assets/img-box/domenico-loia-EhTcC9sYXsw-unsplash.jpg";
import img7 from "../../assets/img-box/h1.jpg";
import img8 from "../../assets/img-box/h2.jpg";
import img9 from "../../assets/img-box/h3.jpg";
import img10 from "../../assets/img-box/h4.jpg";
import img11 from "../../assets/img-box/h5.jpg";

const Picture = () => {
  const images = [
    { id: 1, src: img2, alt: "Tech workspace" },
    { id: 2, src: img7, alt: "Modern office" },
    { id: 3, src: img3, alt: "Laptop on desk" },
    { id: 4, src: img8, alt: "Business meeting" },
    { id: 5, src: img4, alt: "Workspace setup" },
    { id: 6, src: img1, alt: "Office desk" },
    { id: 7, src: img5, alt: "Team collaboration" },
    { id: 8, src: img6, alt: "Digital workspace" },
    { id: 9, src: img9, alt: "Modern technology" },
    { id: 10, src: img10, alt: "Creative space" },
    { id: 11, src: img11, alt: "Productivity setup" },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-content">
            Top Liked Images in Our Blogs
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto my-4 rounded"></div>
          <p className="text-base-content/80 max-w-2xl mx-auto">
            A visual journey through our most popular content
          </p>
        </motion.div>

        <PhotoProvider
          speed={() => 800}
          easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <motion.div 
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <PhotoView src={image.src}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-64 w-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
                  />
                </PhotoView>
              </motion.div>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </section>
  );
};

export default Picture;
