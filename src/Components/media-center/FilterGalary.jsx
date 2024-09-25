import { useEffect, useState } from "react";
import React from "react";
import ImageModal from "./ImageModel.jsx";
import "./ImageModel.css";
import { motion } from "framer-motion";

function FilterGallery() {
  const GalleryData = [
    {
      id: 1,
      titile: "Day",
      image: "./images/a1.jpg",
    },
    {
      id: 2,
      titile: "Day",
      image: "./images/a2.jpg",
    },
    {
      id: 3,
      titile: "Day",
      image: "./images/a3.jpg",
    },
    {
      id: 4,
      titile: "Day",
      image: "./images/a4.jpg",
    },
    {
      id: 5,
      titile: "Night",
      image: "./images/b1.jpg",
    },
    {
      id: 6,
      titile: "Night",
      image: "./images/b2.jpg",
    },
    {
      id: 7,
      titile: "Night",
      image: "./images/b3.jpg",
    },
    {
      id: 8,
      titile: "Visit",
      image: "./images/c1.jpg",
    },
    {
      id: 9,
      titile: "Visit",
      image: "./images/c2.jpg",
    },
    {
      id: 10,
      titile: "Visit",
      image: "./images/c3.jpg",
    },
    {
      id: 11,
      titile: "Team",
      image: "./images/c2.jpg",
    },
  ];
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setData(GalleryData);
    setCollection([...new Set(GalleryData.map((item) => item.titile))]);
  }, []);

  const gallery_filter = (itemData) => {
    const filterData = GalleryData.filter((item) => item.titile === itemData);
    setData(filterData);
  };

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <div className="galleryWrapper">
        <div className="filterItem">
          <ul>
            <li>
              <button onClick={() => setData(GalleryData)}>All</button>
            </li>
            {collection.map((item) => (
              <li key={item}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => gallery_filter(item)}
                >
                  {item}
                </motion.button>
              </li>
            ))}
          </ul>
        </div>

        <div className="galleryContainer d-flex flex-wrap align-items-center justify-content-center">
          {data.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="galleryItem"
            >
              <img src={item.image} onClick={() => openModal(item.image)} />
            </motion.div>
          ))}
        </div>
      </div>
      {showModal && (
        <ImageModal imageUrl={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
}

export default FilterGallery;
