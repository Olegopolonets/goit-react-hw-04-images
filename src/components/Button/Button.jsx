import React from 'react';
import { LoadMoreBtn, WrapperBtn } from './ButtonStyled';

export const Button = ({ click }) => {
  return (
    <>
      <WrapperBtn>
        <LoadMoreBtn onClick={click}>Load more</LoadMoreBtn>
      </WrapperBtn>
    </>
  );
};
