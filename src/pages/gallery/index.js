import React, { useState, useCallback } from 'react';
import Layout from '../../components/Layout';
import { range } from 'lodash';
import Lightbox from 'yet-another-react-lightbox';
import Inline from 'yet-another-react-lightbox/plugins/inline';
import 'yet-another-react-lightbox/styles.css';
import { RowsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/rows.css';

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import photos from '../../utils/photos';

const PhotoGallery = () => {
  const [currentImage, setCurrentImage] = useState(-1);

  const updateIndex = ({ index }) => setCurrentImage(index);

  return (
    <Layout className="bg-ebsBlack">
      <div className="max-w-screen-md md:mx-auto mx-6 my-10">
        <h1>Photo Gallery</h1>
        <div className="bg-white p-[15px]">
          <RowsPhotoAlbum
            photos={photos}
            targetRowHeight={150}
            onClick={({ index }) => setCurrentImage(index)}
          />
          <Lightbox
            index={currentImage}
            open={currentImage >= 0}
            slides={photos}
            plugins={[Fullscreen, Zoom, Slideshow, Thumbnails]}
            on={{
              view: updateIndex,
            }}
            close={() => setCurrentImage(-1)}
          />
        </div>
      </div>
    </Layout>
  );
};

export default PhotoGallery;
