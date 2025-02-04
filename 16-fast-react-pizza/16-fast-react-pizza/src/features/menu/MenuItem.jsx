import { useDispatch, useSelector } from 'react-redux';

import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem } from '../cart/cartSlice';

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  function handleAddToCart() {
    dispatch(addItem(pizza));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <>
              <p className="text-sm">{formatCurrency(unitPrice)}</p>
              {cart.find((item) => item.pizzaId === id) ? (
                <>
                  <Button type="small">+</Button>
                  <span></span>
                  <Button type="small">-</Button>
                </>
              ) : (
                <Button type="small" onClick={handleAddToCart}>
                  Add to cart
                </Button>
              )}
            </>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
