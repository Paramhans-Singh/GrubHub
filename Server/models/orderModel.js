const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    name: { type: String, require },
    email: { type: String, require },
    userID: { type: String, require },
    orderItems: [],
    shippingAddress: { type: Object},
    orderAmount: { type: Number, require },
    isDelivered: { type: Boolean, require , default:false },
    transactionID: { type: String, require },
}, {
    timestamps: true
}
);

module.exports = mongoose.model('orders', orderSchema);