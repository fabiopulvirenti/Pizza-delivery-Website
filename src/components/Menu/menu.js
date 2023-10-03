import { Fragment } from "react";
import styles from "./menu.module.css";
import AvailableMeals from "../AvailableMeals/AvailableMeals";
import MenuTitle from "./MenuTitle";
import AvailableMenuItems from "../AvailableMenuItems/AvailableMenuItems";

const Pizzas = [
  {
    id: "m1",
    name: "Margherita",
    description: "mozzarella, italian tomato sauce, basil, black pepper",
    price: 8.99,
    img: "https://cdn.pixabay.com/photo/2017/07/22/22/57/pizza-2530169_640.jpg",
  },
  {
    id: "m2",
    name: "Gustosa",
    description: "Speck Ham, fiordilatte mozzarella, gorgonzola, basil   ",
    price: 15.99,
    img: "https://cdn.pixabay.com/photo/2017/09/03/10/39/pizza-2709855_640.jpg",
  },
  {
    id: "m3",
    name: "Friarielli e Funghi",
    description: "Fiordilatte mozzarella, neapolitan broccoli, mushrooms",
    price: 14.99,
    img: "https://cdn.pixabay.com/photo/2015/04/03/19/02/pizza-705680_640.jpg",
  },
  {
    id: "m4",
    name: "Ndujua",
    description:
      "Spicy Calabrian sausage, chili pepper, mushrooms, black olive, fiordilatte mozzarella, ",
    price: 15.99,
    img: "https://cdn.pixabay.com/photo/2017/01/03/11/33/pizza-1949183_640.jpg",
  },
  {
    id: "m5",
    name: "Prosciutto",
    description:
      "Parma ham, cherry tomatos, italian tomato sauce, fiordilatte mozzarella",
    price: 12.99,
    img: "https://cdn.pixabay.com/photo/2014/11/14/09/10/pizza-530376_640.png",
  },
  {
    id: "m6",
    name: "Rucola",
    description:
      "rocket,italian tomato sauce, bresaola, cherry tomato, black olive",
    price: 13.99,
    img: "https://cdn.pixabay.com/photo/2018/11/15/10/55/pizza-3816968_640.jpg",
  },
  {
    id: "m7",
    name: "Diavola",
    description: "Italian tomato sauce, fiordilatte mozzarella & spicy salami",
    price: 14,
    img: "https://cdn.pixabay.com/photo/2019/05/22/06/17/pizza-4220756_640.jpg",
  },
  {
    id: "m8",
    name: "Bufala",
    description:
      "Italian tomato sauce, buffalo mozzarella, cherry tomato, basil",
    price: 15.99,
    img: "https://cdn.pixabay.com/photo/2021/01/13/02/48/pizza-5913066_640.jpg",
  },
  {
    id: "m9",
    name: "Acciughe e Olive",
    description:
      "Italian tomato sauce, fiordilatte mozzarella, anchovies , black olive, basil ",
    price: 14.99,
    img: "https://cdn.pixabay.com/photo/2017/11/23/15/40/pizza-2973059_640.jpg",
  },
  {
    id: "m10",
    name: "Carbonara",
    description:
      "Crispy guanciale bacon, Pecorino romano, black pepper, fiordilatte",
    price: 13.5,
    img: "https://cdn.pixabay.com/photo/2015/09/09/20/13/pizza-933032_640.jpg",
  },
  {
    id: "m11",
    name: "Margherita gluten free",
    description: "mozzarella, italian tomato sauce, basil",
    price: 8.99,
    img: "https://cdn.pixabay.com/photo/2018/03/27/09/49/cheese-3265466_640.jpg",
  },
  {
    id: "m12",
    name: "Prosciutto gluten free",
    description:
      "Parma ham,fiordilatte mozzarella, italian tomato sauce, basil",
    price: 11.99,
    img: "https://cdn.pixabay.com/photo/2013/09/16/19/01/pizza-prosciutto-182939_1280.jpg",
  },
  {
    id: "m13",
    name: "Diavola vegan",
    description:
      "Vegan meatballs, onion,red & green peppers,cherry tomato, vegan cheese",
    price: 14.8,
    img: "https://cdn.pixabay.com/photo/2017/09/19/20/41/pizza-2766568_640.jpg",
  },
  {
    id: "m14",
    name: "Ortolana vegan",
    description:
      "vegan cheese, black& green olives, green pepper, onion, tomato ",
    price: 18.99,
    img: "https://cdn.pixabay.com/photo/2019/09/24/08/49/pizza-4500771_640.jpg",
  },
  {
    id: "m15",
    name: "Zucchine vegan",
    description: "zucchini, onion, red pepper",
    price: 13.99,
    img: "https://cdn.pixabay.com/photo/2017/03/05/19/55/pizza-2119635_640.jpg",
  },
  {
    id: "m16",
    name: "Primavera vegan",
    description:
      "Tomato, italian tomato sauce, basil, black olives, vegan bacon",
    price: 14.99,
    img: "https://cdn.pixabay.com/photo/2016/08/28/15/29/pizza-1626181_640.jpg",
  },
  {
    id: "m17",
    name: "Estate vegan",
    description: "lemons, tomato, vegan cheese, basil",
    price: 15.8,
    img: "https://cdn.pixabay.com/photo/2014/09/11/22/55/pizza-442058_640.jpg",
  },
];

const Drinks = [
  {
    id: "d1",
    name: "Still Water",
    price: 1.5,
    img: "https://www.dominos.com.au/ManagedAssets/AU/product/D071B/AU_D071B_en_hero_3980.jpg?v578723000",
  },
  {
    id: "d2",
    name: "Pepsi",
    price: 2.5,
    img: "https://www.dominos.com.au/ManagedAssets/AU/variety/Variety.Pepsi/AU_Variety.Pepsi_en_menu_12324.jpg?v-1367151555",
  },
  {
    id: "d3",
    name: "Pepsi Max",
    price: 2.99,
    img: "https://www.dominos.com.au/ManagedAssets/AU/variety/Variety.PepsiMax/AU_Variety.PepsiMax_en_menu_12324.jpg?v-1028337703",
  },
  {
    id: "d4",
    name: "Dr Pepper",
    price: 2.5,
    img: "https://scottishgrocers.co.uk/wp-content/uploads/2020/11/Dr-Pepper-500ml.jpg",
  },
  {
    id: "d5",
    name: "7-up",
    price: 2.5,
    img: "https://www.dominos.com.au/ManagedAssets/AU/variety/Variety.7UP/AU_Variety.7UP_en_menu_12324.jpg?v1489547200",
  },
  {
    id: "d6",
    name: "Tango",
    price: 2.5,
    img: "https://youings.com/content/images/thumbs/0003187_550.jpeg",
  },
];

const Side = [
  {
    id: "s1",
    name: "Salad",
    price: 3.5,
    img: "https://cdn.pixabay.com/photo/2015/09/06/00/58/salad-926809_640.jpg",
  },
  {
    id: "s2",
    name: "Garlic Bread",
    price: 3.0,
    img: "https://cdn.pixabay.com/photo/2017/10/01/13/50/bread-2805578_640.jpg",
  },
  {
    id: "s3",
    name: "Cheesy Garlic Bread",
    price: 3.99,
    img: "https://media.istockphoto.com/id/1095108944/photo/garlic-bread-with-cheese.jpg?s=612x612&w=0&k=20&c=YUIAIzrOP0UwJe3N7Ua4Ktwf-szzOfy1INNi2SHmo3c=",
  },
  {
    id: "s4",
    name: "Coleslaw",
    price: 2.5,
    img: "https://media.istockphoto.com/id/171109215/photo/coleslaw-salad.jpg?s=612x612&w=0&k=20&c=mRpLpoE5IUpwgEMw-1AANlnv1JLuhkFIasUzP3fr_80=",
  },
  {
    id: "s5",
    name: "Chicken Wings",
    price: 4.5,
    img: "https://cdn.pixabay.com/photo/2017/09/03/01/17/wings-2709068_640.jpg",
  },
];

const Menu = () => {
  return (
    <div className={styles.container}>
      <MenuTitle>Choose Your Favorite Pizza</MenuTitle>
      <AvailableMeals meals={Pizzas} />
      <MenuTitle>Choose Yuor Favorite Drink</MenuTitle>
      <AvailableMenuItems meals={Drinks} />
      <MenuTitle>Choose Your Favorite Side</MenuTitle>
      <AvailableMenuItems meals={Side} />
    </div>
  );
};

export default Menu;
