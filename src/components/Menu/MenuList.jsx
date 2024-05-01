import pizzas from './data.js';
import MenuItem from './MenuItem';

function MenuList() {
    const menuItems = pizzas.map((pizza) =>
        <MenuItem
            key={pizza.id}
            parameters={pizza}
        />);

    return (
        <ul>
            {menuItems}
        </ul>
    )
}

export default MenuList;