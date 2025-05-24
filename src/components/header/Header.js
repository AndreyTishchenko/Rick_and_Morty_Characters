import styled from 'styled-components';
import { Logo } from './Logo';
import { FilterForm } from '../FilterForm';

export function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <FilterForm />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 15.48px 152px;

  @media (max-width: 1468px) {
    padding: 15.48px 0px;
  }

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`;
