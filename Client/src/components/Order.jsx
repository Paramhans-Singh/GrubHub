import "../styles/Order.css";

export default function Order({ order }) {
  const timeStamp = new Date(order.createdAt);
  const date = timeStamp.toLocaleDateString();
  const time = timeStamp.toLocaleTimeString();

  return (
    <div className="order">
      <div className="date">
        <div>
          <p>
            <strong>Date: </strong>
            {date}
          </p>
        </div>
        <div>
          <p>
            <strong>Time: </strong>
            {time}
          </p>
        </div>
      </div>
      <div className="order-content">
        <div className="items">
          <h3>Items</h3>
          {order.orderItems.map((item, index) => (
            <div key={index} className="food-item">
              <h4>
                {index + 1}.) {item.name}
              </h4>
              <p>
                <strong>Size: </strong>
                {item.size}
              </p>
              <p>
                <strong>Quantity: </strong>
                {item.quantity}
              </p>
            </div>
          ))}
        </div>
        <div className="address">
          <h3>Address</h3>
          <div className="street">
            <p>
              <strong>Street: </strong> <br />
              {order.shippingAddress.street}
            </p>
          </div>
          <div className="city">
            <p>
              <strong>City: </strong>
              {order.shippingAddress.city}
            </p>
          </div>
          <div className="zip">
            <p>
              <strong>Zip: </strong>
              {order.shippingAddress.pincode}
            </p>
          </div>
        </div>
      </div>
      <div className="total">
        <p>
          <strong>Total: </strong>
          {order.orderAmount} /-
        </p>
        <p>
          <strong>Transaction ID: </strong>
          {order.transactionID}
        </p>
      </div>
      <div className="status">
        <p>
          <strong>Status: </strong>
          {order.isDelivered ? "Delivered" : "Not Delivered"}
        </p>
      </div>
    </div>
  );
}
