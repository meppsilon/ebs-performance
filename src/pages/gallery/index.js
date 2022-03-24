import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Layout from '../../components/Layout';
import { range } from 'lodash';

const wideImages = [2,3,4]

const images = range(1, 16).map((x) => ({
  src: `/img/carousel-${x}.jpg`,
  ...(wideImages.includes(x) ? {
    width: 4,
    height: 3,
  } : {
    width: 3,
    height: 4,
  })
}));

const PhotoGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((_, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Layout className="bg-ebsBlack">
      <div className="max-w-screen-md md:mx-auto mx-6 my-10">
        <h1>Photo Gallery</h1>
        <div className="bg-white">
          <Gallery photos={images} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={images.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </div>
    </Layout>
  );
};

export default PhotoGallery;
