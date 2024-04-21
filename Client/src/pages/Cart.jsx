import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../apis/cartActions";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";

import "../styles/Cart.css";
import Checkout from "../components/Checkout";

function Cart() {
  const cartState = useSelector((state) => state.cartReducer);
  const { cartItems } = cartState;
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (x, item) =>
      x +
      item.quantity *
        (item.size === "Small" ? item.price.small : item.price.large),
    0
  );

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map((item) => {
            return (
              <div className="item">
                <div className="delete">
                  <div onClick={() => dispatch(deleteFromCart(item))}>
                    <ClearIcon />
                  </div>
                </div>
                <h3>{item.name}</h3>
                <div className="details">
                  <div className="detail">
                    <strong>Size: </strong>
                    <p>{item.size}</p>
                  </div>
                  <div className="detail">
                    <strong>Quantity: </strong>
                    <div className="quantity">
                      <div
                        onClick={() =>
                          dispatch(
                            addToCart(
                              item,
                              item.quantity > 1 ? item.quantity - 1 : 1,
                              item.size
                            )
                          )
                        }
                      >
                        <RemoveIcon />
                      </div>
                      <p>{item.quantity}</p>
                      <div
                        onClick={() => {
                          dispatch(
                            addToCart(
                              item,
                              item.quantity < 10 ? item.quantity + 1 : 10,
                              item.size
                            )
                          );
                        }}
                      >
                        <AddIcon />
                      </div>
                    </div>
                  </div>
                  <div className="detail">
                    <strong>Sub-Total: </strong>
                    <p>
                      {item.quantity *
                        (item.size === "Small"
                          ? item.price.small
                          : item.price.large)}
                      /-{" "}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="place-order">
          <div className="amount">
            <h3>Order Amount:</h3>
            <p>{total}/-</p>
          </div>
          <div className="order-button">
            <Checkout totalAmount={total} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
