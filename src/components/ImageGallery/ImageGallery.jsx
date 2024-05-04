import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

function ImageGallery({ images, handleImageClick }) {
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
}

export default ImageGallery;
