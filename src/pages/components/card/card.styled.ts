import styled from "styled-components";
import { _LP } from "styles/global.styled";

export const CardContainer = styled.section`
  max-width: ${_LP.maxWidth};
  width: 100%;
  margin: 2rem auto;
  padding: 1rem;
`;

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  gap: 1rem;
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media ${_LP.mediaQuery} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
  }
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 1rem;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media ${_LP.mediaQuery} {
    justify-content: start;
    align-items: start;
  }
`;

export const Name = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textColor};
  margin: 1rem 0;
  padding: 0;
`;

export const Username = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
`;

export const About = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textColor};
  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.25rem;
    margin-right: 0.5rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;

  @media ${_LP.mediaQuery} {
    flex-direction: row;
    gap: 4rem;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border};
`;

export const GitInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media ${_LP.mediaQuery} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media ${_LP.mediaQuery} {
    flex-direction: column;
  }
`;

export const Total = styled.p`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 3.125rem;
  font-weight: 700;
`;
