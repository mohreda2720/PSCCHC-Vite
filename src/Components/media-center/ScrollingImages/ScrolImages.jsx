import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import "./ScrollImages.css";
import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";
import { fetchGallaryData } from "../../Store/Reducers/GallaryReducer.js";
import Loader from "../../Loader/Loader.jsx";
import { useLanguage } from "../../LanguageContext";

const ImageBackdrop = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "#000",
  opacity: 0.5,
  transition: theme.transitions.create("opacity"),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "40vh",
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover": {
    zIndex: 1,
  },
  "&:hover .imageBackdrop": {
    opacity: 0.15,
  },
  "&:hover .imageMarked": {
    opacity: 0,
  },
  "&:hover .imageTitle": {
    border: "4px solid currentColor",
  },
  "& .imageTitle": {
    position: "relative",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  "& .imageMarked": {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const FilterGallery2 = () => {
  const [selectedgallary, setSelectedgallary] = useState(0);
  const dispatch = useDispatch();
  const { gallaryData, loading, error } = useSelector(
    (state) => state.GallaryData
  );
  const [newgallaryData, setNewgallaryData] = useState([]);
  const { language } = useLanguage();

  const filterImagesByTitle = (Title) => {
    const filtered = gallaryData.filter(
      (image) => image.galleryTitel === Title
    );
    setFilteredImages(filtered);
  };
  useEffect(() => {
    dispatch(fetchGallaryData());
  }, [dispatch]);

  const [filteredImages, setFilteredImages] = useState(gallaryData);
  const resetFilter = () => {
    setFilteredImages(gallaryData);
  };

  useEffect(() => {
    setFilteredImages(gallaryData);
  }, [gallaryData]);

  return (
    <Container sx={{ mb: 4 }} data-aos="fade-up" data-aos-delay>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.2 }}
        className="filter"
        onClick={resetFilter}
      >
        {language === "en" ? "Show All image" : "عرض كل الصور"}{" "}
      </motion.button>
      <Box sx={{ mt: 5, display: "flex", flexWrap: "wrap" }}>
        {filteredImages.map((image) => (
          <ImageIconButton
            key={image.imgSeq}
            style={{ width: `${image.pageLang}%` }}
            onClick={() => filterImagesByTitle(image.galleryTitel)}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
                backgroundImage: `url(${image.imgName})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "common.white",
              }}
            >
              <h3 className="imageTitle">
                {image.galleryTitel}
                <div className="imageMarked" />
              </h3>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
};

export default FilterGallery2;
