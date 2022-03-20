import { GetHotelsDetails } from "actions/hotelsActions";
import _ from "lodash";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    getData(id);
  }, [id]);
  const showData = () => {
    if (hotelsDetails.loading) {
      return <p>loading</p>;
    }
    if (!_.isEmpty(hotelsDetails.data)) {
      return (
        <>
          {hotelsDetails.data.map((hotel: IHotelsListProps) => (
            <ul key={hotel.id}>
              <li>{hotel.name}</li>
              <li>{hotel.cityName}</li>
              <li>{hotel.rooms[0].categoryName}</li>
              <li>R$ {hotel.rooms[0].price.adult}</li>
              <li>R$ {hotel.rooms[0].price.child}</li>
            </ul>
          ))}
        </>
      );
    }
    if (hotelsDetails.errorMsg !== "") {
      return <p>{hotelsDetails.errorMsg}</p>;
    }
    return null;
  };
  return <>{showData()}</>;
};

export default Body;
