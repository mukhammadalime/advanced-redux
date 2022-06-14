import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store/cart-slice";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description, id } = props;
  const cart = useSelector((state) => state.cart);

  const addToCartHandler = () => {
    const updatedQuantity = cart.totalQuantity + 1;
    const updatedItems = cart.items.slice(); // [...cart.items];
    const existingItem = updatedItems.find((item) => item.id === id);

    if (existingItem) {
      const updatedItem = { ...existingItem };
      updatedItem.quantity++;
      updatedItem.totalPrice += price;
      const existingItemIndex = updatedItems.findIndex(
        (item) => item.id === id
      );

      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push({
        id,
        name: title,
        price,
        quantity: 1,
        totalPrice: price,
      });
    }

    const newCart = {
      totalQuantity: updatedQuantity,
      items: updatedItems,
    };
    dispatch(cartActions.replaceCart(newCart));

    // dispatch(cartActions.addItemToCart({ title, price, id }));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
