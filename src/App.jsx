import { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <div className="container">
      <h1>Item List Manager</h1>
      <h2>Item List</h2>
      <input
        type="text"
        value={newItem}
        onChange={handleInputChange}
        placeholder="Enter item"
        className="input-field"
      />
      <button className="add-button" onClick={handleAddItem}>
        Add Item
      </button>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App
