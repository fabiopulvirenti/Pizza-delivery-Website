import { useContext } from "react";

import MenuItemForm from "./MenuItemForm";
import classes from "./MenuItem.module.css";
import CartContext from "../../../store/cart-context";

const MenuItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `£${props.price.toFixed(2)}`;

  const addToCartHandler = (amount, size, crust) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      size: size,
      crust: crust,
    });
  };

  return (
    <li className={classes.meal}>
      <div className={classes.mealContainer}>
        <img className={classes.image} src={props.img} alt={props.name} />
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
      </div>
      <div>
        <MenuItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MenuItem;
