import React, { useState } from 'react';
import { 
  Truck, FileText, User, Phone, MapPin, Calendar,
  Package, DollarSign, Fuel, Menu, X, Save, Printer
} from 'lucide-react';

const TripVerificationForm = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    freightSlip: '',
    bhada: '',
    vehicleNo: '',
    date: '',
    driverName: '',
    mobileNo: '',
    startingDate: '',
    startingPlace: '',
    closingDate: '',
    closingPlace: '',
    materialName: '',
    poNumber: '',
    doNumber: '',
    grnNumber: '',
    freight: '',
    weight: '',
    amount: '',
    receivingDate: ''
  });

  const [tyrePayments, setTyrePayments] = useState([
    { quantity: '', brand: '', billNo: '', amount: '' }
  ]);

  const [tyreDeductions, setTyreDeductions] = useState([
    { srNo: '1', quantity: '', brand: '', billNo: '', amount: '' },
    { srNo: '2', quantity: '', brand: '', billNo: '', amount: '' }
  ]);

  const [expenseDetails, setExpenseDetails] = useState([
    { srNo: '1', details: 'Advance/Cash', amount: '', remaining: '' },
    { srNo: '2', details: 'Material Shortage', amount: '', remaining: '' },
    { srNo: '3', details: 'Tyre Payment Deduct', amount: '', remaining: '' }
  ]);

  const addTyrePayment = () => {
    setTyrePayments([...tyrePayments, { quantity: '', brand: '', billNo: '', amount: '' }]);
  };

  const updateTyrePayment = (index, field, value) => {
    const updated = [...tyrePayments];
    updated[index][field] = value;
    setTyrePayments(updated);
  };

  const updateTyreDeduction = (index, field, value) => {
    const updated = [...tyreDeductions];
    updated[index][field] = value;
    setTyreDeductions(updated);
  };

  const updateExpenseDetail = (index, field, value) => {
    const updated = [...expenseDetails];
    updated[index][field] = value;
    setExpenseDetails(updated);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Truck className="w-8 h-8 text-orange-600" />
              <span className="text-2xl font-bold text-gray-800">Nidhi Corporation</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-600 font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-orange-600 font-medium">Services</a>
              <a href="#verification" className="text-orange-600 font-medium">Trip Verification</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 font-medium">Contact</a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              <a href="#home" className="block text-gray-700 hover:text-orange-600 font-medium">Home</a>
              <a href="#services" className="block text-gray-700 hover:text-orange-600 font-medium">Services</a>
              <a href="#verification" className="block text-orange-600 font-medium">Trip Verification</a>
              <a href="#contact" className="block text-gray-700 hover:text-orange-600 font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Header Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <FileText className="w-12 h-12" />
            <div>
              <h1 className="text-4xl font-bold mb-2">Trip Verification Form</h1>
              <p className="text-orange-100">Freight Slip | Bhada Parchi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            
            {/* Basic Details */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Truck className="w-6 h-6 text-orange-600 mr-2" />
                Vehicle & Driver Details
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Vehicle No.</label>
                  <input
                    type="text"
                    name="vehicleNo"
                    value={formData.vehicleNo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter vehicle number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Driver's Name</label>
                  <input
                    type="text"
                    name="driverName"
                    value={formData.driverName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter driver name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile No.</label>
                  <input
                    type="tel"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter mobile number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Starting/Departure Date</label>
                  <input
                    type="date"
                    name="startingDate"
                    value={formData.startingDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Starting/Departure Place</label>
                  <input
                    type="text"
                    name="startingPlace"
                    value={formData.startingPlace}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter starting place"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Closing/Arrival Date</label>
                  <input
                    type="date"
                    name="closingDate"
                    value={formData.closingDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Closing/Destination Place</label>
                  <input
                    type="text"
                    name="closingPlace"
                    value={formData.closingPlace}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter destination"
                  />
                </div>
              </div>
            </div>

            {/* Material Details */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Package className="w-6 h-6 text-orange-600 mr-2" />
                Material Details
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Material Name</label>
                  <input
                    type="text"
                    name="materialName"
                    value={formData.materialName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter material name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">P.O. Number</label>
                  <input
                    type="text"
                    name="poNumber"
                    value={formData.poNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter P.O. number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">D.O. Number</label>
                  <input
                    type="text"
                    name="doNumber"
                    value={formData.doNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter D.O. number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">GRN Number</label>
                  <input
                    type="text"
                    name="grnNumber"
                    value={formData.grnNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter GRN number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Freight</label>
                  <input
                    type="text"
                    name="freight"
                    value={formData.freight}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter freight"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Weight</label>
                  <input
                    type="text"
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter weight"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Amount</label>
                  <input
                    type="text"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter amount"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Receiving Receipt Date</label>
                  <input
                    type="date"
                    name="receivingDate"
                    value={formData.receivingDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Diesel Details */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Fuel className="w-6 h-6 text-orange-600 mr-2" />
                Diesel Details (Complete Table)
              </h2>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-gray-600">Complete diesel consumption and expense details</p>
              </div>
            </div>

            {/* Material Shortage */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Material Shortage (Complete Table)</h2>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-gray-600">Details of any material shortage during transport</p>
              </div>
            </div>

            {/* Tyre Payment Deductions */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <DollarSign className="w-6 h-6 text-orange-600 mr-2" />
                Tyre Payment Deductions
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead className="bg-orange-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Quantity</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Brand</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Bill No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tyrePayments.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">
                          <input
                            type="text"
                            value={item.quantity}
                            onChange={(e) => updateTyrePayment(index, 'quantity', e.target.value)}
                            className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="Qty"
                          />
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <input
                            type="text"
                            value={item.brand}
                            onChange={(e) => updateTyrePayment(index, 'brand', e.target.value)}
                            className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="Brand"
                          />
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <input
                            type="text"
                            value={item.billNo}
                            onChange={(e) => updateTyrePayment(index, 'billNo', e.target.value)}
                            className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="Bill No"
                          />
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <input
                            type="text"
                            value={item.amount}
                            onChange={(e) => updateTyrePayment(index, 'amount', e.target.value)}
                            className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="Amount"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  onClick={addTyrePayment}
                  className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
                >
                  Add Row
                </button>
              </div>
            </div>

            {/* Tyre Payment Deduction Summary */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Tyre Payment Deduction</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead className="bg-orange-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Sr. No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Quantity</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Brand</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Bill No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tyreDeductions.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">{item.srNo}</td>
                        <td className="border border-gray-300 px-4 py-2">
                          <input
                            type="text"
                            value={item.quantity}
                            onChange={(e) => updateTyreDeduction(index, 'quantity', e.target.value)}
                            className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                          />
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <input
                            type="text"
                            value={item.brand}
                            onChange={(e) => updateTyreDeduction(index, 'brand', e.target.value)}
                            className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                          />
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <input
                            type="text"
                            value={item.billNo}
                            onChange={(e) => updateTyreDeduction(index, 'billNo', e.target.value)}
                            className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                          />
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <input
                            type="text"
                            value={item.amount}
                            onChange={(e) => updateTyreDeduction(index, 'amount', e.target.value)}
                            className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Amount/Payment Details */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Amount/Payment Details</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead className="bg-orange-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Sr. No.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Details</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Amount</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Remaining Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expenseDetails.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">{item.srNo}</td>
                        <td className="border border-gray-300 px-4 py-2 font-medium">{item.details}</td>
                        <td className="border border-gray-300 px-4 py-2">
                          <input
                            type="text"
                            value={item.amount}
                            onChange={(e) => updateExpenseDetail(index, 'amount', e.target.value)}
                            className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="₹"
                          />
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          <input
                            type="text"
                            value={item.remaining}
                            onChange={(e) => updateExpenseDetail(index, 'remaining', e.target.value)}
                            className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="₹"
                          />
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-orange-50 font-bold">
                      <td colSpan="2" className="border border-gray-300 px-4 py-3 text-right">Total Expenses:</td>
                      <td className="border border-gray-300 px-4 py-3"></td>
                      <td className="border border-gray-300 px-4 py-3"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="flex items-center justify-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-bold transition">
                <Save className="w-5 h-5" />
                <span>Save Form</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition">
                <Printer className="w-5 h-5" />
                <span>Print Form</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Truck className="w-8 h-8 text-orange-600" />
            <span className="text-xl font-bold text-white">Nidhi Corporation</span>
          </div>
          <p className="text-sm">&copy; 2025 Nidhi Corporation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TripVerificationForm;