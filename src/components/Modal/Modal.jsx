import React, { useEffect } from 'react';
import { StyledModal } from './ModalStyled';

export const Modal = ({ modalImageUrl, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return (
    <StyledModal onClick={closeModal}>
      <img src={modalImageUrl} alt="Modal" />
    </StyledModal>
  );
};
