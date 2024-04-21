import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllItems } from "../apis/itemActions";
import Error from "../components/Error";

import ItemCard from "../components/ItemCard";
import Loading from "../components/Loading";
import "../styles/Home.css";

function Home() {
  const dispatch = useDispatch();

  const itemstate = useSelector((state) => state.getAllItemsReducer);
  const { items, error, loading } = itemstate;

  useEffect(() => {
    dispatch(getAllItems());
  }, []);

  return (
    <div>
      <h1>Be Healthy ! Be Foodie !!</h1>

      {loading ? (
        <Loading />
      ) : error ? (
        <Error error="Woah, something went wrong!!" />
      ) : (
        <div className="items-container">
          {items.map((item) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
