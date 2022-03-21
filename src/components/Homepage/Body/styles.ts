import ReactPaginate from "react-paginate";
import styled from "styled-components";

export const BodyWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 50%;
  background: ${(props) => props.theme.main.secondaryText};
  display: flex;
  border-radius: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 4px -1px rgba(0, 0, 0, 0.5);
  font-size: 1.5rem;
  position: relative;
  padding: 2rem;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const HotelImageContainer = styled.div`
  width: 80%;
`;

export const BodyContainer = styled.div`
  width: 100vw;
  display: flex;
  padding: 2rem;
`;

export const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const Form = styled.div`
  margin: 7rem 0 0 0;
  width: 100%;
  height: 100%;
  display: flex;
  @media screen and (max-width: 767px) {
    display: block;
    margin: 4rem 0 0 0;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Header = styled.header`
  padding: 1rem;
  border-radius: 0.5rem 0.5rem 0 0;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  & h1 {
    @media screen and (max-width: 767px) {
      font-size: 2rem;
    }
  }
  & p {
    color: #a1a2aa;
    @media screen and (max-width: 767px) {
      font-size: 1.2rem;
    }
  }
`;

export const PrimaryButton = styled.button`
  background: ${(props) => props.theme.main.secondary};
  color: ${(props) => props.theme.main.secondaryText};
  outline: none;
  width: 100%;
  border: none;
  border-radius: 0.5rem;
  padding: 1rem;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: ${(props) => props.theme.main.secondaryLight};
  }
  &:active {
    background: ${(props) => props.theme.main.secondaryDark};
  }
`;

export const Input = styled.input`
  border-radius: 0.5rem;
  padding: 1rem;
  background: #f5f6f8;
  border: 1px solid transparent;
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.main.primary};
  }
`;

export const SearchContainer = styled.div`
  width: 50%;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const Line = styled.div`
  border-left: 0.1px solid #a1a2aa;
  margin: 0 1rem;
  @media screen and (max-width: 767px) {
    border-bottom: 0.1px solid #a1a2aa;
    border-left: none;
    margin: 1rem 0;
  }
`;

export const InputWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const SearchTitle = styled.h3`
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 1.5rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem;
`;

export const HotelsContainer = styled.div`
  background: ${(props) => props.theme.main.secondaryText};
  display: flex;
  border-radius: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  @media screen and (max-width: 767px) {
    font-size: 1.2rem;
  }
`;


export const HotelsDetailsContainer = styled(HotelsContainer)`
  width: 50vw;
  height: 50vh;
  position: relative;
  & p {
    text-align: left;
  }
`;

export const HotelsList = styled.div`
  box-shadow: 0px 1px 4px -1px rgba(0, 114, 251, 1);
  border-radius: 0.5rem;
  padding: 1rem;
`;

export const PaginationContainer = styled.div`
  background: ${(props) => props.theme.main.primary};
  width: 100%;
  padding: 1rem;
  margin: 1rem 0 0 0;
  border-radius: 0 0 1rem 1rem;
  color: ${(props) => props.theme.main.secondaryText};
`;

export const Pagination = styled(ReactPaginate)`
  &.pagination {
    display: flex;
    width: 50vw;
    @media screen and (max-width: 767px) {
      width: 100%;
    }
    justify-content: space-between;
    list-style: none;
    margin: auto;
    padding: 0;
    & a {
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 10rem;
      &:hover {
        background: ${(props) => props.theme.main.primaryLight};
      }
      &:active {
        background: ${(props) => props.theme.main.primaryDark};
      }
    }
    & .active-page {
      font-weight: bold !important;
      cursor: default !important;
      &:hover {
        background: ${(props) => props.theme.main.primary};
      }
      &:active {
        background: ${(props) => props.theme.main.primary};
      }
    }
    & .disabled-page {
      cursor: default !important;
      font-weight: normal !important;
    }
    & .previous-page,
    .next-page {
      cursor: pointer;
      font-weight: bold;
    }
  }
`;

export const RoomSpan = styled.div`
  display: flex;
  & p {
    font-weight: bold;
    padding: 0 0.3rem 0 0;
  }
`;

export const RoomContainer = styled.div`
  padding: 0.5rem 0;
`;

export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100h;
  display: flex;
  justify-content: center;
  align-items: center;
`;
