import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [isListVisible, setListVisibility] = useState(false);
  const [title, setTitle] = useState('');
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  const handleNewListClick = () => {
    setListVisibility(!isListVisible);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleNewItemChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleAddItemClick = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  }

  const handleDeleteItemClick = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }

  const handleSaveListClick = async () => {
    try {
      const response = await axios.post('http://localhost:5555/grocerylist', {
        name: title,
        items: items,
      });
      console.log('List saved successfully:', response.data);
      window.location.reload();
      } catch (error) {
        console.error('Error saving the list:', error.message);
    }
  }

  return (
    <div>
      <div className="text123">
        <div className="text1">Hey Louie!</div>
        <div className="text2">Ready for</div>
        <div className="text3">More Groceries?</div>
      </div>
      <div className="new-list-body">
        <button className="new-list-button" onClick={handleNewListClick}>
          New List
        </button>
        {isListVisible && (
          <div className="new-list-body">
            <div className="title">Title</div>
            <div className="title-div">
              <input
                className="add-title"
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={handleTitleChange}
              />
            </div>
            <div className="item">Item</div>
            <div className="item-div">
              <input
                className="add-item"
                type="text"
                placeholder="Enter item"
                value={newItem}
                onChange={handleNewItemChange}
              />
              <button 
                className="add-item-button" 
                onClick={handleAddItemClick}>Add
              </button>
            </div>
          </div>
        )}

        {items.length > 0 && (
          <div className="list-items-display">
            <div className ="title-and-save-button">
              <h2>Current Items</h2>
              <button 
                className="save-list-button"
                onClick={handleSaveListClick}>Save List
              </button>
            </div>
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <button 
                    className="delete-item-button"
                    onClick={() => handleDeleteItemClick(index)}>delete
                  </button>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="empty-bottom"></div>
    </div>
  );
};

export default Home;