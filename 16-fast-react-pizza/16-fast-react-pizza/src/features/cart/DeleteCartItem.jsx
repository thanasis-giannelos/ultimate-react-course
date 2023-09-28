import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

function DeleteCartItem(pizzaId) {
  const dispatch = useDispatch();

  function onDelete() {
    dispatch(deleteItem(pizzaId));
  }

  return (
    <div>
      <Button type="small" onClick={onDelete}>
        Delete
      </Button>
    </div>
  );
}

export default DeleteCartItem;
