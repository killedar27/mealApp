import React, { useContext } from "react";

import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { OrderContext } from "./orderProvider";



 

function Order() {

  const { order } = useContext(OrderContext)

  console.log(order);

  return (

    <Container className="category-container" fluid>

      {order.map((orderItem) => (
        <OrderItem item={orderItem} />

      ))}

      {/* <Button>Order</Button> */}

    </Container>

  );

}

 

function OrderItem({ item }) {

  const { removeMeal } = useContext(OrderContext);

  return (

    <>

      <Row>

        <div className="order-item-container mb-5">

          <Image src={item.strMealThumb} className="" />

          <h3>{item.strMeal}</h3>

          <h3>x {1}</h3>

          <Button variant="danger" onClick={() => removeMeal(item)}>

            Remove Order

          </Button>

        </div>

      </Row>

    </>

  );

}

 

export default Order;