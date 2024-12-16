import React, { useState } from 'react';

function FilteredList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState([
    'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry',
    'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon',
    'Mango', 'Nectarine', 'Orange', 'Papaya', 'Quince'
  ]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Fruit List</h2>
      <input
        type="text"
        placeholder="Search fruits..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredList;
