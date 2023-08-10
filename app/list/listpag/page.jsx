import React from 'react'
import ItemList from '@components/listpag/ItemList';

const items = [
  'Apple',  'Banana',  'Orange',  'Mango',  'Strawberry',  'Grapes', 
   'Pineapple',  'Watermelon',  'Kiwi',  'Cherry',  'Pear',
    'Item 3','Item 6','Item 6','Item 6','Item 6',
    'Item 4','Item 6','Item 6','Item 6','Item 6',
    'Item 5','Item 6','Item 6','Item 6','Item 6',
    'Item 6','Item 6','Item 6','Item 6','Item 6',
    // Add more items...
  ];

const page = () => {
  return (
    <div>
      <h1>Paginated Item List</h1>
      <ItemList items={items} />
    </div>
  )
}

export default page