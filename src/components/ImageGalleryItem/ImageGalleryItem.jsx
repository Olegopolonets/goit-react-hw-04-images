import React from 'react';
import { Card, CardImage } from './ImageGalleryItemStyled';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  type,
  largeImageURL,
  openModal,
}) => {
  return (
    <>
      <Card>
        <CardImage
          onClick={() => openModal(largeImageURL)}
          src={webformatURL}
          alt={type}
          id={id}
        />
      </Card>
    </>
  );
};
