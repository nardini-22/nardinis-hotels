import Modal from "components/Modal";
import _ from "lodash";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { GetHotelsListFilter } from "redux/actions/hotelsActions";
import {
  IHotelsListFilterReducer,
  IHotelsListProps,
  IHotelsParams
} from "typings/hotels";

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
  const hotelsPerPage = 10;
  const pageCount = Math.ceil(hotelsListFilter.data.length / hotelsPerPage);
  const visitedPages = pageNumber * hotelsPerPage;
  const displayHotels = hotelsListFilter.data
    .slice(visitedPages, visitedPages + hotelsPerPage)
    .map((hotel: IHotelsListProps) => (
      <ul key={hotel.id}>
        <li>{hotel.name}</li>
        <li>{hotel.cityName}</li>
        {hotel.rooms.map((room) =>
          room === null ? null : (
            <ul key={room.roomID}>
              <li>{room.categoryName}</li>
              <li>{room.price.adult}</li>
              <li>{room.price.child}</li>
            </ul>
          )
        )}
      </ul>
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
        "Erro! Insira o nome correta da cidade (Ex: São Paulo, Porto Seguro ou Rio de Janeiro"
      );
    }
  };
  const showData = () => {
    if (hotelsListFilter.loading) {
      return <p>loading</p>;
    }
    if (!_.isEmpty(hotelsListFilter.data)) {
      return (
        <>
          {displayHotels}{" "}
          <ReactPaginate
            nextLabel="Next >"
            previousLabel="< Previous"
            pageCount={pageCount}
            onPageChange={({ selected }) => {
              setPageNumber(selected);
            }}
          />
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
      <label>
        Nome da cidade
        <input
          type="text"
          placeholder="Insira a cidade aqui..."
          onChange={(el) => setCity(el.target.value)}
        />
      </label>
      <label>
        Valor máximo adulto
        <input
          type="number"
          min={0}
          placeholder="Insira a cidade aqui..."
          onChange={(el) => setAdult(parseInt(el.target.value))}
        />
      </label>
      <label>
        Valor máximo criança
        <input
          type="number"
          min={0}
          placeholder="Insira a cidade aqui..."
          onChange={(el) => setChild(parseInt(el.target.value))}
        />
      </label>
      <button onClick={() => handleData()}>Pesquisar</button>
      <Modal open={openModal} closeModal={() => setOpenModal(false)}>
        {showData()}
      </Modal>
    </>
  );
};

export default Filter;
