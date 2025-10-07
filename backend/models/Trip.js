const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
  vehicleNo: String,
  date: Date,
  driverName: String,
  mobileNo: String,
  startingDate: Date,
  startingPlace: String,
  closingDate: Date,
  closingPlace: String,
  materialName: String,
  poNumber: String,
  doNumber: String,
  grnNumber: String,
  freight: String,
  weight: String,
  amount: String,
  receivingDate: Date,
  tyreDeductions: [
    {
      srNo: String,
      quantity: String,
      brand: String,
      billNo: String,
      amount: String
    }
  ],
  expenseDetails: [
    {
      srNo: String,
      details: String,
      amount: String,
      remaining: String
    }
  ]
});

module.exports = mongoose.model('Trip', TripSchema);
