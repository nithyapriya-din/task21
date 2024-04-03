import "./App.css";
import { Navbar } from "./Navbar";
import Section from "./Section";
import { Header } from "./Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Cart";
import { useState } from "react";

function App() {
  let items = [
    {
      id: 1,
      title: "Fancy Product",
      price: "$40.00 - $80.00",
      badge: false,
    },
    {
      id: 2,
      title: "Special Item",
      cost: 18,
      badge: true,
      star: true,
    },
    {
      id: 3,
      title: "Sale Item",
      cost: 25,
      badge: true,
    },
    {
      id: 4,
      title: "Popular Item",
      price: "$40.00",
      cost: 40,
      badge: false,
      star: true,
    },
    {
      id: 5,
      title: "Sale Item",
      cost: 25,
      badge: true,
    },
    {
      id: 6,
      title: "Fancy Product",
      price: "$120.00 - $280.00",
      badge: false,
    },
    {
      id: 7,
      title: "Special Item",
      cost: 18,
      badge: true,
      star: true,
    },
    {
      id: 8,
      title: "Popular Item",
      price: "$40.00",
      cost: 40,
      badge: false,
      star: true,
    },
  ];

  const [cartList, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  let addTocart = (card) => {
    setCart([...cartList, { ...card, quantity: 1 }]);
    setTotal(total + card.cost);
  };

  let removeCart = (card) => {
    let itemIndex = cartList.findIndex((item) => card.id === item.id);
    cartList.splice(itemIndex, 1);
    setCart([...cartList]);
    setTotal(total - card.cost * card.quantity);
  };

  const incQuantity = (cartItem) => {
    let itemIndex = cartList.findIndex((item) => cartItem.id === item.id);
    cartList[itemIndex].quantity = cartList[itemIndex].quantity + 1;
    setCart([...cartList]);
    setTotal(total + cartItem.cost);
  };

  const decQuantity = (cartItem) => {
    if (cartItem.quantity !== 1) {
      let itemIndex = cartList.findIndex((item) => cartItem.id === item.id);
      cartList[itemIndex].quantity = cartList[itemIndex].quantity - 1;
      setCart([...cartList]);
      setTotal(total - cartItem.cost);
    }
  };
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      {/* <Header></Header> */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="row">
                {items.map((card) => {
                  return (
                    <Section
                      card={card}
                      addTocart={addTocart}
                      cartList={cartList}
                    ></Section>
                  );
                })}
              </div>
            </div>
            <div className="col-lg-3">
              <h3>Cart </h3>
              <Cart
                cartList={cartList}
                removeCart={removeCart}
                incQuantity={incQuantity}
                decQuantity={decQuantity}
              ></Cart>
              <h3>Total : {total}</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
