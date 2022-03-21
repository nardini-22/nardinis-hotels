import Modal from "components/Modal";
import Portal from "HOC/portal";
import _ from "lodash";
import { useState } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { GetHotelsList } from "redux/actions/hotelsActions";
import { HotelImage } from "svg";
import { IHotelsListProps, IHotelsListReducer } from "typings/hotels";
import Filter from "./filter";
import {
  BodyContainer,
  BodyWrapper, Form,
  FormContainer,
  Grid,
  Header,
  HotelImageContainer,
  HotelsContainer,
  HotelsList,
  ImageContainer,
  Input,
  InputWrapper,
  Line,
  LoadingContainer,
  Pagination,
  PaginationContainer,
  PrimaryButton,
  SearchContainer,
  SearchTitle
} from "./styles";

const Body = () => {
  const [city, setCity] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const hotelsList = useSelector(
    (state: IHotelsListReducer) => state.HotelsList
  );
  const getData = (id: number) => {
    dispatch(GetHotelsList(id));
  };
  const hotelsPerPage = 10;
  const pageCount = Math.ceil(hotelsList.data.length / hotelsPerPage);
  const visitedPages = pageNumber * hotelsPerPage;
  const displayHotels = hotelsList.data
    .slice(visitedPages, visitedPages + hotelsPerPage)
    .map((hotel: IHotelsListProps) => (
      <HotelsList key={hotel.id}>
        <h3>{hotel.name}</h3>
        <p>{hotel.cityName}</p>
        <a href={`/${hotel.id}`}>Detalhes</a>
      </HotelsList>
    ));
  const handleData = () => {
    setPageNumber(0);
    let id = 0;
    if (city === "Porto Seguro") {
      id = 1032;
      getData(id);
      setOpenModal(true);
    } else if (city === "Rio de Janeiro") {
      id = 7110;
      getData(id);
      setOpenModal(true);
    } else if (city === "São Paulo") {
      id = 9626;
      getData(id);
      setOpenModal(true);
    } else {
      window.alert(
        "Erro! Insira o nome correta da cidade (Ex: São Paulo, Porto Seguro ou Rio de Janeiro"
      );
    }
  };
  const showData = () => {
    if (hotelsList.loading) {
      return (
        <LoadingContainer>
          <Oval
            secondaryColor="#001F69"
            color="#0072FB"
            height={80}
            width={80}
          />
        </LoadingContainer>
      );
    }
    if (!_.isEmpty(hotelsList.data)) {
      return (
        <>
          <HotelsContainer>
            <Grid>{displayHotels}</Grid>
            <PaginationContainer>
              <Pagination
                nextLabel="Next >"
                previousLabel="< Previous"
                previousClassName="previous-page"
                nextClassName="next-page"
                disabledClassName="disabled-page"
                activeClassName="active-page"
                className="pagination"
                pageRangeDisplayed={1}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                onPageChange={({ selected }) => {
                  setPageNumber(selected);
                }}
              />
            </PaginationContainer>
          </HotelsContainer>
        </>
      );
    }

    if (hotelsList.errorMsg !== "") {
      return <p>{hotelsList.errorMsg}</p>;
    }
    return null;
  };
  return (
    <>
      <BodyWrapper>
        <BodyContainer>
          <ImageContainer>
            <HotelImageContainer>
              <HotelImage />
            </HotelImageContainer>
          </ImageContainer>
          <FormContainer>
            <Header>
              <h1>Comece reservando um lugar</h1>
              <p>Ache o lugar que atenda sua necessidade, é facil!</p>
            </Header>
            <Form>
              <SearchContainer>
                <SearchTitle>Pesquisa simples</SearchTitle>
                <InputWrapper>
                  <label>Nome da cidade</label>
                  <Input
                    type="text"
                    placeholder="Insira a cidade aqui..."
                    onChange={(el) => setCity(el.target.value)}
                  />
                </InputWrapper>
                <PrimaryButton onClick={() => handleData()}>
                  Pesquisar
                </PrimaryButton>
              </SearchContainer>
              <Line />
              <Filter />
            </Form>
          </FormContainer>
        </BodyContainer>
        <Portal>
          <Modal open={openModal} closeModal={() => setOpenModal(false)}>
            {showData()}
          </Modal>
        </Portal>
      </BodyWrapper>
    </>
  );
};

export default Body;
