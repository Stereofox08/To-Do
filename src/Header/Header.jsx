import React, { useState } from 'react';
import Item from "../Item/Item";



const Header = () => {
    const [items, setItems] = useState([]);

    const handleAddTask = () => {
        setItems([...items, <Item key={items.length} />]);
    };

    return (
        <div>
            <button onClick={handleAddTask}>Добавить задачу</button>
            {/* Другие элементы заголовка здесь */}
            {items}
        </div>
    );
};

export default Header;
