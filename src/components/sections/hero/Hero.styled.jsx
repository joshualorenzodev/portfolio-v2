import styled, { keyframes } from "styled-components";

export const StyledHero = styled.section`
  width: 100%;
  height: 90vh;
  background: linear-gradient(
      135deg,
      rgba(0, 64, 77, 0.9) 0%,
      rgba(2, 12, 27, 0.8) 100%
    ),
    url("./images/landing-page.png") center no-repeat;
  background-size: contain;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

export const HeroContainer = styled.div`
  width: 100%;
  max-width: 58rem;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    letter-spacing: 1.2rem;
    font-size: 2rem;
    font-weight: 400;
    overflow: hidden;
    white-space: nowrap;
  }
`;
