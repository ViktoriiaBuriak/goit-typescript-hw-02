import "./App.css";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageModal from "./ImageModal/ImageModal";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import Loader from "./Loader/Loader";
import { requestImagesByQuery } from "./services/api";

function App() {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (!query) return;

    async function fetchImagesByQuery() {
      try {
        setError(false);
        setLoading(true);
        const { results, total_pages } = await requestImagesByQuery(
          query,
          page
        );
        if (page > 1) {
          setImages((prevImages) => [...prevImages, ...results]);
        } else {
          setImages(results);
        }
        setShowBtn(total_pages > page);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchImagesByQuery();
  }, [query, page]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    openModal();
  };

  const handleSearch = (inputValue) => {
    if (inputValue !== query) {
      setQuery(inputValue);
      setImages([]);
      setPage(1);
    }
  };

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {Array.isArray(images) && (
        <ImageGallery images={images} handleImageClick={handleImageClick} />
      )}
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {modalIsOpen && (
        <ImageModal
          onClose={closeModal}
          isOpen={modalIsOpen}
          image={selectedImage}
        />
      )}
      {showBtn && <LoadMoreBtn loadMore={loadMoreImages} />}
    </>
  );
}

export default App;
