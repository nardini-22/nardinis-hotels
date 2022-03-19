import { GetHotelsList } from "actions/hotelsActions";
import _ from "lodash";
import type { NextPage } from "next";
import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const hotelsList = useSelector((state: RootStateOrAny) => state.HotelsList);
  useEffect(() => {
    getData();
  }, []);
  const getData = (id = 1032) => {
    dispatch(GetHotelsList(id));
  };
  const showData = () => {
    if (hotelsList.loading) {
      return <p>loading</p>;
    }
    if (!_.isEmpty(hotelsList.data)) {
      return (
        <>
          <button onClick={() => console.log(hotelsList.data)}></button>
        </>
      );
    }

    if (hotelsList.errorMsg !== "") {
      return <p>{hotelsList.errorMsg}</p>;
    }
    return null;
  };
  return <>{showData()}</>;
};

export default Home;
