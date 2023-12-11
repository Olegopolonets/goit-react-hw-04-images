import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  width: 20%;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 5px solid white;
  border-radius: 20px;
  font-size: 25px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;
export const WrapperBtn = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
