import { useState } from 'react';

import pizzas from './data.js';
import './Menu.css';

function MenuList() {
    const [cart, setCart] = useState([]);
    const [pizzasList, setList] = useState(pizzas);

    function putInCart(e) {
        const itemId = e.target.id;

        const organizeItems = (currentItem) => {
            if (currentItem.id === itemId) {
                currentItem.count++;
                return true;
            }
            return false;
        }

        setCart(previousState => {
            const isItemInCart = Object.values(previousState).some(organizeItems);

            const updatedCart = isItemInCart
                ? [...previousState]
                : [...previousState, { id: itemId, count: 1 }];

            console.log(updatedCart);
            return updatedCart;
        });

    }

    return (
        <ul>
            {pizzasList.map((pizza) => {
                const { id, imageUrl, ingredients, name, soldOut, unitPrice } = pizza;

                let imgClass = 'pizza__image';
                if (soldOut) imgClass += ' pizza__image__soldout';

                function PizzaActions() {
                    return (
                        <>
                            <p className='pizza__price'>
                                {soldOut ? `SOLD OUT` : `€${unitPrice.toFixed(2)}`}
                            </p>

                            {!soldOut &&
                                <button id={id} className='menu-button' onClick={putInCart}>
                                    ADD TO CART
                                </button >
                            }
                        </>
                    )
                }

                return (<li key={id} className='pizza'>
                    <img
                        src={imageUrl}
                        alt={name}
                        className={imgClass}
                    />
                    <div className='pizza__info'>
                        <p className='pizza__name'>{name}</p>
                        <p className='pizza__ingredients'>{ingredients.join(', ')}</p>
                        <div className='pizza__actions'>
                            <PizzaActions />
                        </div>
                    </div>
                </li>)
            })}
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