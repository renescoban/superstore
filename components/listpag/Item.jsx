import React from 'react';

const Item = ({ item }) => {
  return (
    <div className="item">
      {/* Display the content of the item */}
      <p>{item}</p>
    </div>
  );
};

export default Item;