import Card from "../UI/Card";
import MenuItem from "./MenuItem/MenuItem";
import classes from "./AvailableMenuItems.module.css";

function AvailableMenuItems(arg) {
  const mealsList = arg.meals.map((meal) => (
    <MenuItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      img={meal.img}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMenuItems;
