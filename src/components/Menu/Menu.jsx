import { useState } from 'react';

import pizzas from './data.js';
import './Menu.css';
import MenuItem from './MenuItem'

function MenuList() {
    const [cart, setCart] = useState([]);

    const addToCart = (id) => setCart(previousState => [...previousState, id]);
    const findIndex = (array, id) => array.indexOf(id);
    const deleteFromCart = (id, deleteAll = false) => {
        if (deleteAll) {
            setCart(previousState => previousState.filter(pizzaId => pizzaId !== id))
        } else {
            setCart(previousState => [
                ...previousState.slice(0, findIndex(previousState, id)),
                ...previousState.slice(findIndex(previousState, id) + 1)
            ])
        }
    }

    const menuItems = pizzas.map((pizza) =>
        <MenuItem
            key={pizza.id}
            parameters={pizza}
            onAddToCart={addToCart}
            onDeleteFromCart={deleteFromCart}
            calculateCountInCart={cart.reduce((count, currentItem) => pizza.id === currentItem ? ++count : count, 0)}
        />);

    return (
        <ul>
            {menuItems}
        </ul>
    )
}

function Menu() {
    return (
        <main>
            <MenuList />
        </main>
    )
}

export default Menu;