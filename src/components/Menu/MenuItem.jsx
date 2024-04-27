import classNames from 'classnames';

function MenuItem({ parameters }) {

    const { id, imageUrl, ingredients, name, soldOut, unitPrice } = parameters;

    const imgClass = classNames({
        'pizza-image': true,
        'pizza-image-soldout': soldOut,
    });

    const printData = () => console.log({ id, imageUrl, ingredients, name, soldOut, unitPrice });

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

                    {!soldOut &&
                        <button className='menu-button' onClick={printData}>
                            ADD TO CART
                        </button>
                    }
                </div>
            </div>
        </li>)
}

export default MenuItem;