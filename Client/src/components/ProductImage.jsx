import { useState } from 'react';
import { backendBaseUrl } from '../services/constants';

const ProductImage = ({ imageCover, productImages }) => {
  const images = [
    `${backendBaseUrl}${imageCover}`,
    ...productImages.map((image) => `${backendBaseUrl}${image}`),
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="w-1/2 max-lg:w-10/12 max-sm:w-full max-sm:mb-4">
      <div className="w-full h-[400px] max-lg:h-[350px] max-sm:h-[250px] lg:mb-3">
        <img
          src={selectedImage}
          className="rounded-lg object-cover w-full h-full max-sm:rounded-none"
          alt="Selected Product"
        />
      </div>

      <div className="grid grid-cols-4 gap-3 pt-4 w-10/12 mx-auto max-sm:hidden">
        {images.map((image, index) => (
          <button key={index} className="focus:opacity-60">
            <div className="w-[80px] h-[80px]">
              <img
                src={image}
                alt={`Product thumbnail ${index + 1}`}
                className="rounded-md hover:opacity-70 object-cover w-full h-full"
                onClick={() => handleImageClick(image)}
              />
            </div>
          </button>
        ))}
      </div>

      <div className="hidden max-sm:flex max-sm:overflow-x-auto max-sm:gap-4 max-sm:pt-4 max-sm:w-full max-sm:px-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-[60px] h-[60px] flex-shrink-0 ${
              selectedImage === image ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <img
              src={image}
              alt={`Product image ${index + 1}`}
              className="rounded-md object-cover w-full h-full"
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
