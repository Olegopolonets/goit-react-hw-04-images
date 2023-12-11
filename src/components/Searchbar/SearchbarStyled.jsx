import styled from 'styled-components';

export const Header = styled.header`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    to right,
    #6f7280,
    #2a2c3c,
    #181827,
    #833ab4,
    #fd1d1d,
    #fcb045
  );
  background-size: 400% 400%;
  animation: bgHeader 30s infinite ease-in-out;

  @keyframes bgHeader {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;

export const FormSearch = styled.form`
  border: 3px solid #fff;
  display: flex;
  width: 40%;
  justify-content: center;
  align-items: center;
  padding: 5px;
  justify-content: space-between;
`;
export const InputSearch = styled.input`
  background: white;
  color: black;
  width: 87%;
  height: 50px;
  border: none;
  outline: transparent;
  font-size: 24px;
  padding-left: 10px;
`;

export const BtnSearch = styled.button`
  background: white;
  border: none;
  outline: transparent;
  height: 52px;
  width: 10%;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background: transparent;
    transform: scale(1.1);
  }
`;

// export const FaSearch = styled.button`
//   background: red;
//   &:hover {
//     color: white;
//   }
// `;
