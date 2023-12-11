import React from 'react';
import { Triangle } from 'react-loader-spinner';
import { LoaderWrapper } from './LoaderStyled';

export const Loader = () => {
  return (
    <>
      <LoaderWrapper>
        <Triangle
          height="300"
          width="300"
          color="#b91212"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </LoaderWrapper>
    </>
  );
};
