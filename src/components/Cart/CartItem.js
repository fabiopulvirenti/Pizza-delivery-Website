import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `£${props.price.toFixed(2)}`;
  console.log(props);

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
          {props.size === null ? (
            <span></span>
          ) : (
            <span className={classes.amount}>{props.size}</span>
          )}
          {props.crust === null ? (
            <span></span>
          ) : (
            <span className={classes.amount}>{props.crust}</span>
          )}
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
