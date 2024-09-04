"use client"
import React, { useState } from 'react';

const BillSplittingApp = () => {
  const [totalBill, setTotalBill] = useState(0);
  const [percentages, setPercentages] = useState([100]);

  const handleSliderChange = (index, value) => {
    let remaining = 100 - value;
    let others = percentages.filter((_, i) => i !== index);
    let sumOthers = others.reduce((a, b) => a + b, 0);

    const newPercentages = percentages.map((percentage, i) => {
      if (i === index) {
        return value;
      } else {
        return (remaining * (percentage / sumOthers));
      }
    });

    setPercentages(newPercentages);
  };

  const addPerson = () => {
    const newPercentages = percentages.map(p => p * (percentages.length / (percentages.length + 1)));
    newPercentages.push(100 / (percentages.length + 1));
    setPercentages(newPercentages);
  };

  const equalizePercentages = () => {
    const equalShare = 100 / percentages.length;
    setPercentages(percentages.map(() => equalShare));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Bill Splitting App</h1>

      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Total Bill Amount</label>
        <input
          type="number"
          value={totalBill}
          onChange={(e) => setTotalBill(parseFloat(e.target.value))}
          className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter total bill amount"
        />
      </div>

      <div className="w-full max-w-md">
        {percentages.map((percentage, index) => (
          <div key={index} className="mb-4">
            <label className="block text-lg font-medium mb-1">
              Person {index + 1}: {percentage.toFixed(2)}% - $
              {(totalBill * (percentage / 100)).toFixed(2)}
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={percentage}
              onChange={(e) => handleSliderChange(index, parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
        ))}
      </div>

      <div className="flex space-x-4 mt-4">
        <button
          onClick={addPerson}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition"
        >
          Add Person
        </button>
        <button
          onClick={equalizePercentages}
          className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 transition"
        >
          Equalize Percentages
        </button>
      </div>
    </div>
  );
};

export default BillSplittingApp;


