const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
  srNo: Number,
  material: String,
  amount: Number
});

const closingSchema = new mongoose.Schema(
  {
    receiptDate: { type: Date, required: true },
    materials: [materialSchema],
    tyrePaymentDeduction: { type: Number, default: 0 },
    totalFreight: { type: Number, default: 0 },
    totalExpenses: { type: Number, default: 0 },
    remainingBalance: { type: Number, default: 0 }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Closing', closingSchema);
