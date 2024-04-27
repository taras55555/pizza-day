import { useState, useId } from 'react';

import pizzas from './data.js';
import './Menu.css';
import MenuItem from './MenuItem'

function MenuList() {
    const [pizzasList, setList] = useState(pizzas);

    const menuItems = pizzasList.map((pizza) => <MenuItem key={useId()} parameters={pizza} />);


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