import {
  BodyWrapper,
  Header,
  HotelsDetailsContainer,
  LoadingContainer,
  RoomContainer,
  RoomSpan
} from "components/Homepage/Body/styles";
import _ from "lodash";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { GetHotelsDetails } from "redux/actions/hotelsActions";
import { IHotelsDetailsReducer, IHotelsListProps } from "typings/hotels";

const Body = () => {
  const router = useRouter();
  const id = router.query.id;
  const dispatch = useDispatch();
  const hotelsDetails = useSelector(
    (state: IHotelsDetailsReducer) => state.HotelsDetails
  );
  const getData = (id?: number | string | string[]) => {
    dispatch(GetHotelsDetails(id));
  };
  useEffect(() => {
    if (id !== undefined) {
      getData(id);
    } else {
      return;
    }
  }, [id]);
  const showData = () => {
    if (hotelsDetails.loading) {
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
    if (!_.isEmpty(hotelsDetails.data)) {
      return (
        <>
          {hotelsDetails.data.map((hotel: IHotelsListProps) => (
            <HotelsDetailsContainer key={hotel.id}>
              <Header>
                <h1>Detalhes</h1>
              </Header>
              <h3>{hotel.name}</h3>
              <p>{hotel.cityName}</p>
              {hotel.rooms.map((room) => (
                <RoomContainer key={room.roomID}>
                  <h5>Quarto {room.roomID + 1}</h5>
                  <RoomSpan>
                    <p>Categoria: </p>
                    {room.categoryName}
                  </RoomSpan>
                  <RoomSpan>
                    <p>Preço adulto: </p>R$ {room.price.adult}
                  </RoomSpan>
                  <RoomSpan>
                    <p>Preço criança: </p>R$ {room.price.child}
                  </RoomSpan>
                </RoomContainer>
              ))}
            </HotelsDetailsContainer>
          ))}
        </>
      );
    }
    if (hotelsDetails.errorMsg !== "") {
      return <p>{hotelsDetails.errorMsg}</p>;
    }
    return null;
  };
  return (
    <>
      <BodyWrapper>{showData()}</BodyWrapper>
    </>
  );
};

export default Body;
