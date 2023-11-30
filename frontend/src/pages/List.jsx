import React, { useState, useEffect } from 'react';
import axios from 'axios';

const List = () => {
    const [lists, setLists] = React.useState([]);

    useEffect(() => {
        const fetchLists = async () => {
          try {
            // Make an HTTP request to fetch the lists
            const response = await axios.get('http://localhost:5555/grocerylist'); // Replace with your actual API endpoint
            setLists(response.data.data);
          } catch (error) {
            console.error('Error fetching lists:', error.message);
          }
        };
    
        fetchLists();
      }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div className="list-div">
            <img
                className="food-image"
                src="../images/grocery-foods.png"
            />
            <div className="past-groceries-list">My Past Groceries</div>
            <div className="grocery-list-details">
                <ol>
                {lists.map((list) => (
                    <div className="separate-list">
                        <li key={list._id}>
                        <h3 className="list-names">{list.name}</h3>
                        <ol className="list-items">
                            {list.items.map((item, index) => (
                            <li key={index}>- {item}</li>
                            ))}
                        </ol>
                        </li>
                    </div>
                ))}
                </ol>
            </div>
        </div>
    )
}

export default List;