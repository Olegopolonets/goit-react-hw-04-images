import styled from 'styled-components';
export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;

  img {
    width: 90%;
    height: 90%;
    object-fit: scale-down;
  }
`;
