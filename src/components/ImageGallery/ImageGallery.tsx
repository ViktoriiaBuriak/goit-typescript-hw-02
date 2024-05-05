import { FC } from "react";
import ImageCard from "../ImageCard/ImageCard";
import { ImageType } from "../types";
import css from "./ImageGallery.module.css";

interface ImageCardProps {
  images: ImageType[];
  handleImageClick: (image: ImageType) => void;
}

const ImageGallery: FC<ImageCardProps> = ({ images, handleImageClick }) => {
  return (
    <ul className={css.imageList}>
      {images.map((image) => (
        <li className={css.imageItem} key={image.id}>
          <div>
            <ImageCard image={image} handleImageClick={handleImageClick} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
