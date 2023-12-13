import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import { CardsList } from './ImageGalleryStuled';

export const ImageGallery = ({ imagesData, openModal }) => {
  return (
    <div>
      <CardsList>
        {imagesData.map(item => {
          return (
            <ImageGalleryItem key={item.id} {...item} openModal={openModal} />
          );
        })}
      </CardsList>
    </div>
  );
};
