import React, { useState } from "react";
import GalleryImg from "./data";

const Gallery = () => {
  const [Gallery, setGallery] = useState([]);

  const filterSection = (type) => {
    switch (type) {
      case "all":
        setGallery(GalleryImg);
        break;
      case "car":
        setGallery(GalleryImg.slice(0, 3));
        break;
      case "nature":
        setGallery(GalleryImg.slice(3, 6));
        break;
      case "child":
        setGallery(GalleryImg.slice(6, 9));
        break;
      default:
        setGallery(GalleryImg);
    }
  };
  return (
    <div className="grid grid-cols-12  px-5 py-3 bg-gray-200">
      <div className="col-span-12  flex ">
        <div
          className="bg-white px-3 py-2 mr-2 cursor-pointer"
          onClick={() => filterSection("all")}
        >
          Show all
        </div>
        <div
          className="bg-white px-3 py-2 mr-2 cursor-pointer"
          onClick={() => filterSection("nature")}
        >
          Nature
        </div>
        <div
          className="bg-white px-3 py-2 mr-2 cursor-pointer"
          onClick={() => filterSection("car")}
        >
          Cars
        </div>
        <div
          className="bg-white px-3 py-2 mr-2 cursor-pointer"
          onClick={() => filterSection("child")}
        >
          childs
        </div>
      </div>
      {Gallery &&
        Gallery.map((item) => {
          return (
            <div className="col-span-4 bg-white m-2 px-2 py-2">
              <img width="100%" className="mb-2 fluid" src={item.img} />
              <h1 className="mb-3 text-lg ">Lights</h1>
              <p className="mb-2 text-lg ">Lorem ipsum dolor..</p>
            </div>
          );
        })}
    </div>
  );
};

export default Gallery;
