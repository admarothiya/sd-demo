const mongoose = require('mongoose');

const TyrePaymentSchema = new mongoose.Schema({
  quantity: { type: String, default: '' },
  brand: { type: String, default: '' },
  billNo: { type: String, default: '' },
  amount: { type: String, default: '' }
}, { _id: false });

const TyreDeductionSchema = new mongoose.Schema({
  srNo: { type: String, default: '' },
  quantity: { type: String, default: '' },
  brand: { type: String, default: '' },
  billNo: { type: String, default: '' },
  amount: { type: String, default: '' }
}, { _id: false });

const ExpenseDetailSchema = new mongoose.Schema({
  srNo: { type: String, default: '' },
  details: { type: String, default: '' },
  amount: { type: String, default: '' },
  remaining: { type: String, default: '' }
}, { _id: false });

const TripSchema = new mongoose.Schema({
  freightSlip: { type: String, default: '' },
  bhada: { type: String, default: '' },
  vehicleNo: { type: String, required: true },
  date: { type: Date },
  driverName: { type: String, default: '' },
  mobileNo: { type: String, default: '' },
  startingDate: { type: Date },
  startingPlace: { type: String, default: '' },
  closingDate: { type: Date },
  closingPlace: { type: String, default: '' },
  materialName: { type: String, default: '' },
  poNumber: { type: String, default: '' },
  doNumber: { type: String, default: '' },
  grnNumber: { type: String, default: '' },
  freight: { type: String, default: '' },
  weight: { type: String, default: '' },
  amount: { type: String, default: '' },
  receivingDate: { type: Date },
  tyrePayments: { type: [TyrePaymentSchema], default: [] },
  tyreDeductions: { type: [TyreDeductionSchema], default: [] },
  expenseDetails: { type: [ExpenseDetailSchema], default: [] },

  // metadata
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

TripSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

TripSchema.pre('findOneAndUpdate', function(next) {
  this._update.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Trip', TripSchema);
