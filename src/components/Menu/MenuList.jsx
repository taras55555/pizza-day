import MenuItem from './MenuItem';

function MenuList({ pizzasList }) {
    const menuItems = pizzasList.map((pizza) =>
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