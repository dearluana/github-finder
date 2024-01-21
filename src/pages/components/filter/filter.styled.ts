import styled from "styled-components";
import { _LP } from "styles/global.styled";

export const FilterContainer = styled.section`
  max-width: ${_LP.maxWidth};
  width: 100%;
  margin: 2rem auto;
  padding: 1rem;
`;

export const CardBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: .5rem 1rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  gap: 1rem;
  width: 100%;
`;

export const IconContainer = styled.span`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 2rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.colors.textColor};
  background-color: transparent;
  border: none;
  outline: none;
  padding: 1rem;
`;
