import { useState } from 'react';
import classNames from 'classnames';
import Button from './Button';

function MenuItem({ parameters }) {
    const { id, imageUrl, ingredients, name, soldOut, unitPrice } = parameters;

    const [counter, setCounter] = useState(0);
    const incrementPizza = () => setCounter(counter + 1);
    const decrementPizza = () => setCounter(counter - 1);
    
    
    const imgClass = classNames({
        'pizza-image': true,
        'pizza-image-soldout': soldOut,
    });

    function PizzaCounter() {
        return (
            counter === 0
                ? <Button className='menu-button' text='ADD TO CART' onClick={incrementPizza} />
                : <div className='quantity-controls'>
                    <div className='quantity-buttons-block'>
                        <Button
                            onClick={decrementPizza}
                            className='menu-button quantity-buttons'
                            text='-'
                        />
                        <span className='item-count'>{counter}</span>
                        <Button
                            onClick={incrementPizza}
                            className='menu-button quantity-buttons'
                            text='+'
                        />
                    </div>
                    <div className='quantity-buttons-block'>
                        <Button
                            onClick={() => setCounter(0)}
                            className='menu-button'
                            text='DELETE'
                        />
                    </div>
                </div>
        )
    }

    return (
        <li key={id} className='pizza'>
            <img
                src={imageUrl}
                alt={name}
                className={imgClass}
            />
            <div className='pizza-info'>
                <p className='pizza-name'>{name}</p>
                <p className='pizza-ingredients'>{ingredients.join(', ')}</p>
                <div className='pizza-actions'>
                    <p className='pizza-price'>
                        {soldOut ? `SOLD OUT` : `€${unitPrice.toFixed(2)}`}
                    </p>
                    {!soldOut && <PizzaCounter />}
                </div>
            </div>
        </li>)
}

export default MenuItem;