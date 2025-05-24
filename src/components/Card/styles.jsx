// components/Card/styles.js
import styled from 'styled-components';
import { getStatusColor } from './utils';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  background: #263750;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.2);
  }

  &:hover .card-title {
    color: #83bf46;
  }
`;

export const CardImg = styled.img.attrs({ loading: 'lazy' })`
  border-radius: 10px 10px 0 0;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #fff;
`;

export const CardTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const StyledCardTitle = styled.h2`
  margin-right: 8px;
  font-size: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.3s;
  max-width: 100%;

  @media (max-width: 450px) {
    max-width: 130px;
    font-size: 18px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
`;

export const CardStatusContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledCardStatus = styled.span`
  display: flex;
  align-items: center;
  text-transform: capitalize;

  &::before {
    content: '';
    display: block;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    margin-right: 8px;
    background-color: ${({ $status }) => getStatusColor($status)};
  }
`;

export const CardType = styled.p`
  margin-top: 20px;
  width: 100%;
  color: #ddd;
  font-size: 16px;
`;
