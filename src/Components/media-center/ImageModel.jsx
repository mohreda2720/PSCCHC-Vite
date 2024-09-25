import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import Download from "yet-another-react-lightbox/plugins/download";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Images from "./Images.jsx";
import { fetchGallaryData } from "../Store/Reducers/GallaryReducer.js"; 
import { useLanguage } from '../LanguageContext.jsx';

function ImageModel() {

  const dispatch = useDispatch();
  const { gallaryData, loading, error } = useSelector((state) => state.GallaryData);
  const [index, setIndex] = React.useState(-1);
  const [lightboxImages, setLightboxImages] = React.useState([]); // State for lightbox images
  const { language } = useLanguage()

  React.useEffect(() => {
    dispatch(fetchGallaryData()); 
  }, [dispatch]);

  React.useEffect(() => {
    if (gallaryData.length > 0) {
      const lightboxImageData = gallaryData.map((image) => ({
        src: image.imgName ,
      }
    )
  );
      setLightboxImages(lightboxImageData);
      
    }
  }, [gallaryData]);

  const handleOpenLightbox = (currentIndex) => setIndex(currentIndex);
  const handleCloseLightbox = () => setIndex(-1);
  return (
    <>
      <Images
        data={gallaryData}
        onClick={(currentIndex) => setIndex(currentIndex)}
      />
      <Lightbox 
         plugins={[Captions, Download, Zoom, Thumbnails]}
         captions={{ showToggle: true, descriptionTextAlign: "end" }}
         index={index}
slides={gallaryData.map(image => ({ src: image.imgName }))}


open={index >= 0}
close={() => setIndex(-1)}
         
      />

      <div></div>
    </>
  );
}

export default ImageModel;
