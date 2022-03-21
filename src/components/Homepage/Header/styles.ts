import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 10vh;
  position: absolute;
  top: 0;
  background: transparent;
  display: flex;
  padding: 1rem 10rem;
  @media screen and (max-width: 767px) {
    padding: 1rem 1rem;
  }
`;

export const LogoContainer = styled.div`
  width: 5rem;
  height: 5rem;
`;

export const LogoWrapper = styled.div`
  color: ${(props) => props.theme.main.secondaryText};
  display: flex;
  align-items: center;
  cursor: pointer;
  & h1 {
    padding: 0 0 0 1rem;
  }
`;
