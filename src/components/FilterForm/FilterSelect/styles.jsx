import styled from 'styled-components';
import { Field } from '../styles/shared.styled';

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  max-height: 240px;
  background: white;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  margin-top: 4px;
  overflow: hidden;
  box-sizing: border-box;
  padding-top: 8px;
  z-index: 999;
  box-shadow: var(--sds-size-depth-0) var(--sds-size-depth-025)
    var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-200);
`;

export const Option = styled.div`
  padding: 10px 12px;
  cursor: pointer;
  color: black;
  &:hover {
    background: #83bf4633;
  }
`;
export const Wrapper = styled.div`
  position: relative;
  width: 180px;
`;

export const SelectBox = styled.div`
  ${Field};
  display: flex;
  align-items: center;
  padding-right: 36px;
  color: ${({ hasValue }) => (hasValue ? 'white' : '#B3B3B3')};
  position: relative;
  cursor: pointer;
  user-select: none;
`;

export const IconArea = styled.div`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`;
