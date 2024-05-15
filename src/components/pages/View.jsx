import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

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
  return (
    <div className="grid my-10 container mx-auto grid-cols-2 md:gap-4 md:grid-cols-4">
      <PhotoProvider>
        <div className="col-span-4 text-center font-bold text-5xl mb-5">
          <h1>Top Liked Images in Our Blogs</h1>
        </div>
        <div className="grid gap-4">
          <div>
            <PhotoView src={img2}>
              <img
                src={img2}
                className="h-auto max-w-full rounded-lg object-cover object-center"
                alt="gallery-photo"
              />
            </PhotoView>
          </div>

          <div>
            <PhotoView src={img7}>
              <img
                src={img7}
                className="h-auto max-w-full rounded-lg object-cover object-center "
                alt="gallery-photo"
              />
            </PhotoView>
          </div>

          <div>
            <PhotoView src={img3}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={img3}
                alt="gallery-photo"
              />
            </PhotoView>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <PhotoView src={img8}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={img8}
                alt="gallery-photo"
              />
            </PhotoView>
          </div>
          <div>
            <PhotoView src={img4}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={img4}
              />
            </PhotoView>
          </div>
          <div>
            <PhotoView src={img1}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center "
                src={img1}
                alt="gallery-photo"
              />
            </PhotoView>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <PhotoView src={img5}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={img5}
                alt="gallery-photo"
              />
            </PhotoView>
          </div>
          <div>
            <PhotoView src={img6}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center "
                src={img6}
                alt="gallery-photo"
              />
            </PhotoView>
          </div>
          <div>
            <PhotoView src={img9}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={img9}
                alt="gallery-photo"
              />
            </PhotoView>
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <PhotoView src={img10}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={img10}
                alt="gallery-photo"
              />
            </PhotoView>
          </div>
          <div>
            <PhotoView src={img11}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={img11}
                alt="gallery-photo"
              />
            </PhotoView>
          </div>
        </div>
      </PhotoProvider>
    </div>
  );
};

export default Picture;
