import React from 'react';
import './Images.css';

const Images = ({ data, onClick }) => {
  const handleClickImage = (index) => {
    onClick(index);
  };

  return (
    <div className='images-container'>
      {data.map((image, index) => (
        <div onClick={() => handleClickImage(index)} key={index} className='images'>
          <img src={image.imgName} alt={image.description} />
          <div className='caption'>
          {/* <p> <span class="fancy">{image.galleryTitel}</span></p> */}
            <h3>{image.galleryTitel}</h3>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Images;
