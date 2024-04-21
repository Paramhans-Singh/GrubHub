const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    name: {type: String, require},
    desc: String,
    prices: {small: Number, large: Number},
    sizes: [],
    imgUrl: String
}, {
    timestamps: true
});

const itemModel = mongoose.model('items', itemSchema);

module.exports = itemModel;