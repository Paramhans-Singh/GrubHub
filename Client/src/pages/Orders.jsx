import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../apis/orderActions";
import Order from "../components/Order";
import "../styles/Orders.css";

export default function Orders() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOrders());
  }, []);

  const ordersState = useSelector((state) => state.getUserOrdersReducer);
  const { orders, loading, error } = ordersState;
  console.log(orders);

  return (
    <div className="orders-screen">
      <h1>My orders</h1>
      <div className="orders-container">
        {orders.map((order) => (
          <Order key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
}
