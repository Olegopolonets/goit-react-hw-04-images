import styled from 'styled-components';

export const Card = styled.li`
  display: flex;
  width: 22%;
  height: 250px;
`;

export const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;
