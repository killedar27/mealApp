import React, { useContext } from "react";

import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { CartContext } from "./cartProvider";


 

function Cart() {

  const { cart } = useContext(CartContext)

  console.log(cart);

  return (

    <Container className="category-container" fluid>

      {cart.map((cartItem) => (
        <CartItem item={cartItem} />

      ))}

      <Button>Order</Button>

    </Container>

  );

}

 

function CartItem({ item }) {

  const { removeMeal } = useContext(CartContext);

  return (

    <>

      <Row>

        <div className="cart-item-container mb-5">

          <Image src={item.strMealThumb} className="" />

          <h3>{item.strMeal}</h3>

          <h3>x {1}</h3>

          <Button variant="danger" onClick={() => removeMeal(item)}>

            Remove from Cart

          </Button>

        </div>

      </Row>

    </>

  );

}

 

export default Cart;