import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../apis/orderActions";
import Loading from "./Loading";
import Success from "./Success";
import Error from "./Error";

export default function Checkout({ totalAmount }) {
  const dispatch = useDispatch();

  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, success, error } = orderState;

  const cartState = useSelector((state) => state.cartReducer);
  const { cartItems } = cartState;

  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, totalAmount));
  }

  return (
    <div>
      {!localStorage.getItem("currentUser") ? (
        <Error error="Please Login first!" />
      ) : (
        <StripeCheckout
          amount={totalAmount * 100}
          shippingAddress
          token={tokenHandler}
          stripeKey="pk_test_51MigHSSHTcSHB7wrmtCRu7RcIGaH48NmStUBYbliRoFd2jnbbKZ0PLmNrqJUAepsLsj4MFaAertSAM408ElusXDv00wOigxBf0"
          currency="INR"
        >
          {loading && <Loading />}
          {success && <Success message="Order Placed!!" />}
          {error && <Error error="Opps, something went wrong" />}

          <button>Order now!</button>
        </StripeCheckout>
      )}
    </div>
  );
}
