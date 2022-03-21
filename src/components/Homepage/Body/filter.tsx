import Modal from "components/Modal";
import _ from "lodash";
import { useState } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { GetHotelsListFilter } from "redux/actions/hotelsActions";
import {
  IHotelsListFilterReducer,
  IHotelsListProps,
  IHotelsParams
} from "typings/hotels";
import {
  Grid,
  HotelsContainer,
  HotelsList,
  Input,
  InputWrapper,
  LoadingContainer,
  Pagination,
  PaginationContainer,
  PrimaryButton,
  RoomContainer,
  RoomSpan,
  SearchContainer,
  SearchTitle,
  Select
} from "./styles";

const Filter = () => {
  const [city, setCity] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [adult, setAdult] = useState<number>(0);
  const [child, setChild] = useState<number>(0);
  const dispatch = useDispatch();
  const hotelsListFilter = useSelector(
    (state: IHotelsListFilterReducer) => state.HotelsListFilter
  );
  const getData = ({ id, adult, child }: IHotelsParams) => {
    dispatch(GetHotelsListFilter({ id, adult, child }));
  };
  const hotelsPerPage = 4;
  const pageCount = Math.ceil(hotelsListFilter.data.length / hotelsPerPage);
  const visitedPages = pageNumber * hotelsPerPage;
  const displayHotels = hotelsListFilter.data
    .slice(visitedPages, visitedPages + hotelsPerPage)
    .map((hotel: IHotelsListProps) => (
      <HotelsList key={hotel.id}>
        <h3>{hotel.name}</h3>
        <p>{hotel.cityName}</p>
        {hotel.rooms.map((room) =>
          room === null ? null : (
            <RoomContainer key={room.roomID}>
              <h5>Quarto {room.roomID + 1}</h5>
              <RoomSpan>
                <p>Categoria: </p>
                {room.categoryName}
              </RoomSpan>
              <RoomSpan>
                <p>Preço adulto: </p>
                R$ {room.price.adult}
              </RoomSpan>
              <RoomSpan>
                <p>Preço criança </p>
                R$ {room.price.child}
              </RoomSpan>
            </RoomContainer>
          )
        )}
      </HotelsList>
    ));
  const handleData = () => {
    setPageNumber(0);
    let id = 0;
    if (city === "Porto Seguro") {
      id = 1032;
      getData({ id, adult, child });
      setOpenModal(true);
    } else if (city === "Rio de Janeiro") {
      id = 7110;
      getData({ id, adult, child });
      setOpenModal(true);
    } else if (city === "São Paulo") {
      id = 9626;
      getData({ id, adult, child });
      setOpenModal(true);
    } else {
      window.alert(
        "Erro! Escolha uma cidade!"
      );
    }
  };
  const showData = () => {
    if (hotelsListFilter.loading) {
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
    if (!_.isEmpty(hotelsListFilter.data)) {
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

    if (hotelsListFilter.errorMsg !== "") {
      return <p>{hotelsListFilter.errorMsg}</p>;
    }
    return null;
  };
  return (
    <>
      <SearchContainer>
        <SearchTitle>Pesquisa avançada</SearchTitle>
        <InputWrapper>
          <label>Nome da cidade</label>
          <Select onChange={(el) => setCity(el.target.value)}>
            <option disabled={true} selected>
              Escolha a cidade
            </option>
            <option value="São Paulo">São Paulo</option>
            <option value="Porto Seguro">Porto Seguro</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
          </Select>
        </InputWrapper>
        <InputWrapper>
          <label>Valor máximo adulto</label>
          <Input
            type="number"
            min={0}
            placeholder="Insira o valor aqui..."
            onChange={(el) => setAdult(parseInt(el.target.value))}
          />
        </InputWrapper>
        <InputWrapper>
          <label>Valor máximo criança</label>
          <Input
            type="number"
            min={0}
            placeholder="Insira o valor aqui..."
            onChange={(el) => setChild(parseInt(el.target.value))}
          />
        </InputWrapper>
        <PrimaryButton onClick={() => handleData()}>Pesquisar</PrimaryButton>
      </SearchContainer>
      <Modal open={openModal} closeModal={() => setOpenModal(false)}>
        {showData()}
      </Modal>
    </>
  );
};

export default Filter;
