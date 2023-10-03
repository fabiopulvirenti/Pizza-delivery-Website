import classes from "./MenuTitle.module.css";

const MenuTitle = ({ children }) => {
  return (
    <section className={classes.summary}>
      <h2>{children}</h2>
    </section>
  );
};

export default MenuTitle;
