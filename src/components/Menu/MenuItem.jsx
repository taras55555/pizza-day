import classNames from 'classnames';
import Button from './Button';

function MenuItem({ parameters, onAddToCart, calculateCountInCart, onDeleteFromCart }) {

    const { id, imageUrl, ingredients, name, soldOut, unitPrice } = parameters;

    const imgClass = classNames({
        'pizza-image': true,
        'pizza-image-soldout': soldOut,
    });

    const addToCard = () => onAddToCart(id);
    const deleteFromCardAllPositions = () => onDeleteFromCart(id, true);
    const deleteFromCardById = () => onDeleteFromCart(id);

    function CalculatedPizzaInCart() {
        return (
            <div className='quantity-controls'>
                <div className='quantity-buttons-block'>
                    <Button
                        onClick={deleteFromCardById}
                        className='menu-button quantity-buttons'
                        text='-'
                    />
                    <span className='item-count'>{calculateCountInCart}</span>
                    <Button
                        onClick={addToCard}
                        className='menu-button quantity-buttons'
                        text='+'
                    />
                </div>
                <div className='quantity-buttons-block'>
                    <Button
                        onClick={deleteFromCardAllPositions}
                        className='menu-button'
                        text='DELETE'
                    />
                </div>
            </div>
        );
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

                    {(() => {
                        if (!soldOut) {
                            return (calculateCountInCart === 0
                                ? <Button
                                    onClick={addToCard}
                                    className='menu-button'
                                    text='ADD TO CART'
                                />
                                : <CalculatedPizzaInCart />)
                        }
                        return null
                    })()}

                </div>
            </div>
        </li>)
}

export default MenuItem;