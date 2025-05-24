import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  max-width: 561px;
  justify-content: center;
  @media (max-width: 530px) {
    flex-direction: column;
    align-items: center;
  }
`;
