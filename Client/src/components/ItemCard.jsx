import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../apis/cartActions";
import "../styles/ItemCard.css";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box, Typography, Modal } from "@mui/material";

function ItemCard({ item }) {
  const [size, setSize] = useState("Small");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(item.price.small);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleSize(event) {
    setSize(event.target.value);
  }

  function handleQuantity(event) {
    setQuantity(event.target.value);
  }

  const dispatch = useDispatch();
  function addtocart() {
    dispatch(addToCart(item, quantity, size));
  }

  const style = {
    position: "absolute",
    overflow: "auto",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="card-container">
      <div className="image-container" onClick={handleOpen}>
        <img src={item.imgUrl} />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{item.name}</h3>
        </div>
        <div className="card-body">
          <p>{item.desc}</p>
        </div>
      </div>
      <div className="card-selection">
        <div className="size">
          <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
            <InputLabel>
              <h3>Size</h3>
            </InputLabel>
            <Select
              value={size}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              onChange={handleSize}
            >
              {item.sizes.map((size, index) => (
                <MenuItem key={index} value={size}>
                  {size}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="quantity">
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel>
              <h3>Quantity</h3>
            </InputLabel>
            <Select value={quantity} label="Quantity" onChange={handleQuantity}>
              {[...Array(10)].map((entry, index) => (
                <MenuItem key={index} value={index + 1}>
                  {index + 1}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="btn">
        <div className="price">
          <h3>Price</h3>
          <p>
            {size === "Small"
              ? item.price.small * quantity
              : item.price.large * quantity}{" "}
            /-
          </p>
        </div>
        <button onClick={addtocart}>
          <a href={item.link}>Add to Cart</a>
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {item.name}
          </Typography>
          <div className="image-container">
            <img src={item.imgUrl} />
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {item.desc}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default ItemCard;
