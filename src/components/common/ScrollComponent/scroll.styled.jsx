import styled from 'styled-components';

export const ScrollWrapper = styled.div`
  overflow-y: scroll;
  padding-right: 12px;
  box-sizing: content-box;
  position: relative;

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE */

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CustomScrollbar = styled.div`
  position: absolute;
  right: 4px;
  width: 6px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.2);
  transition: background 0.2s;
`;
