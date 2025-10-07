import React, { useState } from 'react';
import { Calendar, Package, CreditCard, IndianRupee, Plus, Trash2, Save, FileText, Download, X } from 'lucide-react';

const ClosingChat = () => {
  const [receiptDate, setReceiptDate] = useState('');
  const [materials, setMaterials] = useState([{ srNo: 1, material: '', amount: '' }]);
  const [tyrePaymentDeduction, setTyrePaymentDeduction] = useState('');
  const [totalFreight, setTotalFreight] = useState('');
  const [totalExpenses, setTotalExpenses] = useState('');
  const [showPreview, setShowPreview] = useState(false);


  const closedata = [receiptDate,materials,tyrePaymentDeduction,totalFreight,totalExpenses]
  


  const addMaterialRow = () => {
    setMaterials([...materials, { srNo: materials.length + 1, material: '', amount: '' }]);
  };

  const removeMaterialRow = (index) => {
    if (materials.length > 1) {
      const newMaterials = materials.filter((_, i) => i !== index);
      const renumbered = newMaterials.map((item, i) => ({ ...item, srNo: i + 1 }));
      setMaterials(renumbered);
    }
  };

  const updateMaterial = (index, field, value) => {
    const newMaterials = [...materials];
    newMaterials[index][field] = value;
    setMaterials(newMaterials);
  };

  const calculateMaterialTotal = () => {
    return materials.reduce((sum, item) => {
      const amount = parseFloat(item.amount) || 0;
      return sum + amount;
    }, 0);
  };

  const calculateAdvancePayment = () => {
    const freight = parseFloat(totalFreight) || 0;
    const expenses = parseFloat(totalExpenses) || 0;
    return freight - expenses;
  };

  const calculateRemainingBalance = () => {
    const materialTotal = calculateMaterialTotal();
    const tyreDeduction = parseFloat(tyrePaymentDeduction) || 0;
    const advancePayment = calculateAdvancePayment();
    return materialTotal - tyreDeduction - advancePayment;
  };

  const handleSave = async() => {
    setShowPreview(true);
     const res = await axios.post('/api/Closing/',closedata)
     console.log(res)
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 print:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileText className="w-8 h-8 text-orange-600" />
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Closing Sheet</h1>
                <p className="text-gray-600">Trip Closure & Settlement</p>
              </div>
            </div>
            <button
              onClick={handleSave}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition"
            >
              <Save className="w-5 h-5" />
              <span>Save & Preview</span>
            </button>
          </div>
        </div>

        {/* Form Sections */}
        <div className="print:hidden">
          {/* 1. Receipt Date */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <Calendar className="w-6 h-6 text-orange-600" />
              <h2 className="text-xl font-bold text-gray-800">1. Receiving Receipt Date</h2>
            </div>
            <div className="text-sm text-gray-600 mb-3">Receipt Date</div>
            <input
              type="date"
              value={receiptDate}
              onChange={(e) => setReceiptDate(e.target.value)}
              className="w-full md:w-1/2 px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none"
            />
          </div>

          {/* 2. Material Shortage */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Package className="w-6 h-6 text-orange-600" />
                <h2 className="text-xl font-bold text-gray-800">2. Material Shortage</h2>
              </div>
              <button
                onClick={addMaterialRow}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition"
              >
                <Plus className="w-5 h-5" />
                <span>Add Row</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-orange-100">
                    <th className="border-2 border-gray-300 px-4 py-3 text-left font-bold">Sr.No</th>
                    <th className="border-2 border-gray-300 px-4 py-3 text-left font-bold">Material</th>
                    <th className="border-2 border-gray-300 px-4 py-3 text-left font-bold">Amount</th>
                    <th className="border-2 border-gray-300 px-4 py-3 text-center font-bold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {materials.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border-2 border-gray-300 px-4 py-3 text-center font-medium">
                        {item.srNo}
                      </td>
                      <td className="border-2 border-gray-300 px-4 py-3">
                        <input
                          type="text"
                          value={item.material}
                          onChange={(e) => updateMaterial(index, 'material', e.target.value)}
                          placeholder="Enter material details"
                          className="w-full px-3 py-2 border border-gray-300 rounded focus:border-orange-600 focus:outline-none"
                        />
                      </td>
                      <td className="border-2 border-gray-300 px-4 py-3">
                        <input
                          type="number"
                          value={item.amount}
                          onChange={(e) => updateMaterial(index, 'amount', e.target.value)}
                          placeholder="0"
                          className="w-full px-3 py-2 border border-gray-300 rounded focus:border-orange-600 focus:outline-none"
                        />
                      </td>
                      <td className="border-2 border-gray-300 px-4 py-3 text-center">
                        <button
                          onClick={() => removeMaterialRow(index)}
                          disabled={materials.length === 1}
                          className={`${
                            materials.length === 1
                              ? 'bg-gray-300 cursor-not-allowed'
                              : 'bg-red-600 hover:bg-red-700'
                          } text-white p-2 rounded transition`}
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-orange-50">
                    <td colSpan="2" className="border-2 border-gray-300 px-4 py-3 text-right font-bold text-lg">
                      Total:
                    </td>
                    <td className="border-2 border-gray-300 px-4 py-3 font-bold text-lg text-orange-600">
                      ₹ {calculateMaterialTotal().toFixed(2)}
                    </td>
                    <td className="border-2 border-gray-300"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. Tyre Payment Deduction */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <CreditCard className="w-6 h-6 text-orange-600" />
              <h2 className="text-xl font-bold text-gray-800">3. Tyre Payment Deduction</h2>
            </div>
            <div className="text-sm text-gray-600 mb-3">Tyre Payment Deduction</div>
            <input
              type="number"
              value={tyrePaymentDeduction}
              onChange={(e) => setTyrePaymentDeduction(e.target.value)}
              placeholder="Enter deduction amount"
              className="w-full md:w-1/2 px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none"
            />
          </div>

          {/* 4. Amount Details */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex items-center space-x-3 mb-6">
              <IndianRupee className="w-6 h-6 text-orange-600" />
              <h2 className="text-xl font-bold text-gray-800">4. Amount Details</h2>
            </div>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total Freight
                  </label>
                  <input
                    type="number"
                    value={totalFreight}
                    onChange={(e) => setTotalFreight(e.target.value)}
                    placeholder="Enter total freight"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total Expenses
                  </label>
                  <input
                    type="number"
                    value={totalExpenses}
                    onChange={(e) => setTotalExpenses(e.target.value)}
                    placeholder="Enter total expenses"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none"
                  />
                </div>
              </div>

              {/* Calculation Results */}
              <div className="mt-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b-2 border-gray-300">
                      <td className="py-3 px-4 font-bold text-gray-700">1. Total Freight</td>
                      <td className="py-3 px-4 text-right font-bold text-green-600">
                        ₹ {(parseFloat(totalFreight) || 0).toFixed(2)}
                      </td>
                    </tr>
                    <tr className="border-b-2 border-gray-300">
                      <td className="py-3 px-4 font-bold text-gray-700">2. Total Expenses</td>
                      <td className="py-3 px-4 text-right font-bold text-red-600">
                        - ₹ {(parseFloat(totalExpenses) || 0).toFixed(2)}
                      </td>
                    </tr>
                    <tr className="border-b-2 border-gray-300 bg-blue-50">
                      <td className="py-3 px-4 font-bold text-gray-700">Advance Payment</td>
                      <td className="py-3 px-4 text-right font-bold text-blue-600">
                        = ₹ {calculateAdvancePayment().toFixed(2)}
                      </td>
                    </tr>
                    <tr className="border-b-2 border-gray-300">
                      <td className="py-3 px-4 font-bold text-gray-700">Total Material Shortage</td>
                      <td className="py-3 px-4 text-right font-bold text-orange-600">
                        + ₹ {calculateMaterialTotal().toFixed(2)}
                      </td>
                    </tr>
                    <tr className="border-b-2 border-gray-300">
                      <td className="py-3 px-4 font-bold text-gray-700">Tyre Payment Deduction</td>
                      <td className="py-3 px-4 text-right font-bold text-red-600">
                        + ₹ {(parseFloat(tyrePaymentDeduction) || 0).toFixed(2)}
                      </td>
                    </tr>
                    <tr className="bg-orange-100">
                      <td className="py-4 px-4 font-bold text-lg text-gray-800">
                        Remaining Balance
                      </td>
                      <td className="py-4 px-4 text-right font-bold text-xl text-orange-600">
                        = ₹ {calculateRemainingBalance().toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Total Expenses = Advance Payment + Total Material Shortage + Tyre Payment Deduction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 print:relative print:bg-white print:p-0">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto print:shadow-none print:max-h-none print:rounded-none">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b-2 border-gray-200 print:hidden">
              <h2 className="text-2xl font-bold text-gray-800">Closing Sheet Preview</h2>
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleDownloadPDF}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-medium flex items-center space-x-2 transition"
                >
                  <Download className="w-5 h-5" />
                  <span>Download PDF</span>
                </button>
                <button
                  onClick={() => setShowPreview(false)}
                  className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-lg transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* PDF Content */}
            <div className="p-8 print:p-12">
              {/* Company Header */}
              <div className="text-center mb-8 border-b-4 border-orange-600 pb-6">
                <h1 className="text-4xl font-bold text-orange-600 mb-2">Nidhi Corporation</h1>
                <p className="text-gray-600 text-lg">Transport & Logistics Services</p>
                <p className="text-gray-500 text-sm mt-2">123 Transport Hub, Delhi | Phone: +91 98765 43210</p>
              </div>

              {/* Document Title */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">CLOSING SHEET</h2>
                <p className="text-gray-600">Trip Closure & Settlement Statement</p>
                <p className="text-sm text-gray-500 mt-2">Date: {new Date().toLocaleDateString('en-IN')}</p>
              </div>

              {/* Receipt Date */}
              <div className="mb-6">
                <div className="bg-gray-100 px-4 py-2 border-l-4 border-orange-600 mb-3">
                  <h3 className="font-bold text-gray-800">Receipt Date</h3>
                </div>
                <p className="px-4 text-gray-700">
                  <strong>Receiving Date:</strong> {receiptDate || 'Not specified'}
                </p>
              </div>

              {/* Material Shortage Table */}
              <div className="mb-6">
                <div className="bg-gray-100 px-4 py-2 border-l-4 border-orange-600 mb-3">
                  <h3 className="font-bold text-gray-800">Material Shortage Details</h3>
                </div>
                <table className="w-full border-collapse mb-2">
                  <thead>
                    <tr className="bg-orange-100">
                      <th className="border-2 border-gray-400 px-4 py-2 text-left">Sr.No</th>
                      <th className="border-2 border-gray-400 px-4 py-2 text-left">Material Description</th>
                      <th className="border-2 border-gray-400 px-4 py-2 text-right">Amount (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {materials.map((item, index) => (
                      <tr key={index}>
                        <td className="border-2 border-gray-400 px-4 py-2 text-center">{item.srNo}</td>
                        <td className="border-2 border-gray-400 px-4 py-2">{item.material || '-'}</td>
                        <td className="border-2 border-gray-400 px-4 py-2 text-right">
                          {parseFloat(item.amount || 0).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-orange-50 font-bold">
                      <td colSpan="2" className="border-2 border-gray-400 px-4 py-2 text-right">
                        Total Material Shortage:
                      </td>
                      <td className="border-2 border-gray-400 px-4 py-2 text-right text-orange-600">
                        ₹ {calculateMaterialTotal().toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Tyre Payment Deduction */}
              <div className="mb-6">
                <div className="bg-gray-100 px-4 py-2 border-l-4 border-orange-600 mb-3">
                  <h3 className="font-bold text-gray-800">Tyre Payment Deduction</h3>
                </div>
                <p className="px-4 text-gray-700">
                  <strong>Deduction Amount:</strong> ₹ {(parseFloat(tyrePaymentDeduction) || 0).toFixed(2)}
                </p>
              </div>

              {/* Financial Summary */}
              <div className="mb-6">
                <div className="bg-gray-100 px-4 py-2 border-l-4 border-orange-600 mb-3">
                  <h3 className="font-bold text-gray-800">Financial Summary</h3>
                </div>
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold text-gray-700">Total Freight</td>
                      <td className="px-4 py-3 text-right font-bold text-green-600">
                        ₹ {(parseFloat(totalFreight) || 0).toFixed(2)}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold text-gray-700">Total Expenses</td>
                      <td className="px-4 py-3 text-right font-bold text-red-600">
                        - ₹ {(parseFloat(totalExpenses) || 0).toFixed(2)}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300 bg-blue-50">
                      <td className="px-4 py-3 font-semibold text-gray-700">Advance Payment</td>
                      <td className="px-4 py-3 text-right font-bold text-blue-600">
                        ₹ {calculateAdvancePayment().toFixed(2)}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold text-gray-700">Total Material Shortage</td>
                      <td className="px-4 py-3 text-right font-bold text-orange-600">
                        + ₹ {calculateMaterialTotal().toFixed(2)}
                      </td>
                    </tr>
                    <tr className="border-b-2 border-gray-400">
                      <td className="px-4 py-3 font-semibold text-gray-700">Tyre Payment Deduction</td>
                      <td className="px-4 py-3 text-right font-bold text-red-600">
                        + ₹ {(parseFloat(tyrePaymentDeduction) || 0).toFixed(2)}
                      </td>
                    </tr>
                    <tr className="bg-orange-100">
                      <td className="px-4 py-4 font-bold text-lg text-gray-800">REMAINING BALANCE</td>
                      <td className="px-4 py-4 text-right font-bold text-2xl text-orange-600">
                        ₹ {calculateRemainingBalance().toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Signatures */}
              <div className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t-2 border-gray-300">
                <div>
                  <div className="border-b-2 border-gray-400 pb-2 mb-2">
                    <p className="text-gray-600 text-sm">Prepared By</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-8">Signature & Date</p>
                </div>
                <div>
                  <div className="border-b-2 border-gray-400 pb-2 mb-2">
                    <p className="text-gray-600 text-sm">Approved By</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-8">Signature & Date</p>
                </div>
              </div>

              {/* Footer */}
              <div className="text-center mt-8 pt-4 border-t border-gray-300 text-xs text-gray-500">
                <p>This is a system generated closing sheet from Nidhi Corporation</p>
                <p className="mt-1">For queries, contact: info@nidhicorporation.com | +91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print\\:relative, .print\\:relative * {
            visibility: visible;
          }
          .print\\:relative {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          @page {
            margin: 1cm;
          }
        }
      `}</style>
    </div>
  );
};

export default ClosingChat;