"use client"
import React, { useState } from 'react';

const data = [
  { id: 1, name: 'Item 1', brand: 'Brand A', value: 100 },
  { id: 2, name: 'Item 2', brand: 'Brand B', value: 150 },
  { id: 3, name: 'Item 3', brand: 'Brand A', value: 170 },
  // More data...
];

const brands =['S', 'Brand A', 'Brand B'];
const prices =['100', '150', '200'];


const FilterByBrandAndValue = () => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand === selectedBrand ? '' : brand);
  };

  const handlePriceChange = (value) => {
    setSelectedValue(value === selectedValue ? '' : value);
  };

  const filteredData = data.filter(item => {
    // If no brand or value is selected, show all items
    if (!selectedBrand && !selectedValue) return true;
    
    // Check if the item's brand matches the selected brand (if any)
    const brandMatch = !selectedBrand || item.brand === selectedBrand;
    
    // Check if the item's value is within the selected value range (if any)
    const valueMatch = !selectedValue ||
      (selectedValue === '100' && item.value <= 100) ||
      (selectedValue === '150' && item.value <= 150) ||
      (selectedValue === '200' && item.value <= 200);

    return brandMatch && valueMatch;
  });

  return (
    <div>
      <h2>Filter By Brand And Value</h2>
      <div>
         {brands.map((category) => (
            <label key={category}>
              <input
                type="checkbox"
                
                value={category}
                checked={selectedBrand.includes(category)}
                onChange={() => handleBrandChange(category)}
              />
              {category}
            </label>
          ))}
        {prices.map((price) => (
            <label key={price}>
              <input
                type="checkbox"
                
                value={price}
                checked={selectedValue.includes(price)}
                onChange={() => handlePriceChange(price)}
              />
              {price}
            </label>
          ))}
      </div>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterByBrandAndValue;
