import Modal from "components/Modal";
import Portal from "HOC/portal";
import _ from "lodash";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { GetHotelsList } from "redux/actions/hotelsActions";
import { IHotelsListProps, IHotelsListReducer } from "typings/hotels";
import Filter from "./filter";

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
      <ul key={hotel.id}>
        <li>{hotel.name}</li>
        <li>{hotel.cityName}</li>
        <a href={`/${hotel.id}`}>Detalhes</a>
      </ul>
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
      return <p>loading</p>;
    }
    if (!_.isEmpty(hotelsList.data)) {
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

    if (hotelsList.errorMsg !== "") {
      return <p>{hotelsList.errorMsg}</p>;
    }
    return null;
  };
  return (
    <>
      <div>
        <label>
          Nome da cidade
          <input
            type="text"
            placeholder="Insira a cidade aqui..."
            onChange={(el) => setCity(el.target.value)}
          />
        </label>
        <button onClick={() => handleData()}>Pesquisar</button>
       
        <Filter />
        <Portal>
          <Modal open={openModal} closeModal={() => setOpenModal(false)}>
            {showData()}
          </Modal>
        </Portal>
      </div>
    </>
  );
};

export default Body;
