import styled from "styled-components";
import { _LP } from "styles/global.styled";

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.header.backgroundColor};
`;

export const CenterRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: ${_LP.maxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
`;

export const Brand = styled.img`
  max-width: 6.25rem;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textColor};
  background-color: transparent;
  svg {
    font-size: 1.25rem;
    margin-left: .5rem;
  }
`;
