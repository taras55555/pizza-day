import { useState, useEffect } from 'react';
import './Menu.css';
import MenuList from './MenuList';

function Menu() {
    const [pizzasList, setPizzasList] = useState([]);

    useEffect(() => {
        async function fetchPizzas() {
            const url = `https://react-fast-pizza-api.onrender.com/api/menu/`;
            try {
                const response = await fetch(url);
                const { data } = await response.json();
                if (!response.ok) {
                    throw new Error(response.status)
                }
                setPizzasList(data);
            } catch (error) {
                console.log(`Something went wrong: ${error.message}`)
            }
        }
        fetchPizzas();
    }, []);

    return (
        <main>
            <MenuList pizzasList={pizzasList} />
        </main>
    )
}

export default Menu;