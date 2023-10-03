import { useContext, useState } from "react";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const [price, setPrice] = useState(props.price);
  

  

  const addToCartHandler = (amount, size, crust) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: price,
      size: size,
      crust: crust,
    });
  };

  const onSizeChangeHandler = (size) => {
    if (size === 'Small (8")') {
      setPrice(props.price);
    } else if (size === 'Medium (12")') {
      setPrice(props.price + (props.price * 0.25));
    } else if (size === 'Large (16")') {
      setPrice(props.price + (props.price * 0.5));
    }else{
      setPrice(props.price + (props.price * 0.75));
    }
  }

  return (
    <li className={classes.meal}>
      <div className={classes.mealContainer}>
        <img className={classes.image} src={props.img} alt={props.name} />
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{`£${price.toFixed(2)}`}</div>
        </div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} onSizeChange={onSizeChangeHandler} />
      </div>
    </li>
  );
};

export default MealItem;
