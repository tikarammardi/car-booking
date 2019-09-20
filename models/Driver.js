const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const driverSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  pricing: {
    type: Number,
    required: true
  }
});

const Driver = mongoose.model('driver', driverSchema);
