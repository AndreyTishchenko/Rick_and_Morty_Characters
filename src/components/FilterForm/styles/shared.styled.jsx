import styled from 'styled-components';

export const Field = `
  padding: 16px 12px;
  font-size: 16px;
  border: #83BF46 1px solid;
  border-radius: 8px;
  box-sizing: border-box;
  color: white;
  background-color: #263750;
  width: 180px;
  height: 40px;

  &::placeholder {
    color: #B3B3B3;
  }

  &:active {
    background-color: #334466;
  }
`;
export const Button = styled.button`
  color: ${({ variant }) => (variant === 'apply' ? '#83BF46' : '#FF5152')};
  border: ${({ variant }) => (variant === 'apply' ? '#83BF46' : '#FF5152')} 1px
    solid;
  width: 85px;
  height: 40px;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 20.5 12;
  background-color: transparent;
  transition-property: background-color, color;
  transition-duration: 0.5s;

  &:hover {
    background-color: ${({ variant }) =>
      variant === 'apply' ? '#83BF46' : '#FF5152'};
    color: white;
  }

  @media (max-width: 530px) {
    width: 100%;
  }
`;
