import { GetHotelsList } from "actions/hotelsActions";
import _ from "lodash";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { IHotelsListProps } from "typings/hotels";

const Body = () => {
  const [city, setCity] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(0);
  const dispatch = useDispatch();
  const hotelsList = useSelector((state: RootStateOrAny) => state.HotelsList);
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
      </ul>
    ));
  const handleData = () => {
    setPageNumber(0);
    let id = 0;
    if (city === "Porto Seguro") {
      id = 1032;
    } else if (city === "Rio de Janeiro") {
      id = 7110;
    } else if (city === "São Paulo") {
      id = 9626;
    }
    getData(id);
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
        {showData()}
      </div>
    </>
  );
};

export default Body;
