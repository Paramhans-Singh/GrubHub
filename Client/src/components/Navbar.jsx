import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";
import { logoutUser } from "../apis/userAction";

function Navbar() {
  const cartState = useSelector((state) => state.cartReducer);
  const { cartItems } = cartState;

  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <div className="navbar-title">
          <img src={logo} alt="logo" />
          <h2 className="heading">GrubHub</h2>
        </div>
      </Link>
      <div className="navigation">
        <ul>
          <li>
            {!currentUser ? (
              <Link to="/Login">
                <p>Login</p>
              </Link>
            ) : (
              <div>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <strong>
                    <p>{currentUser.name}</p>
                  </strong>
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={() => (window.location.href = "/orders")}>
                    Orders
                  </MenuItem>
                  <MenuItem onClick={dispatch(logoutUser)}>Logout</MenuItem>
                </Menu>
              </div>
            )}
          </li>
          <Link to="/Cart">
            <li className="cart-navbar">
              <p>Cart</p>
              <div className="cartItem">{cartItems.length}</div>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
