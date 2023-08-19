import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useParams,useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { CartContext } from "./cart/cartProvider";
import { AuthContext } from "./authentication/auth_context";
import { PriceContext, PriceProvider } from "./setPrice";
import { OrderContext,OrderProvider } from "./order/orderProvider";



function DetailsCards(props) {
    
    const {addMeal, cart}=useContext(CartContext);
    const {addOrder,order}=useContext(OrderContext)
    const {authenticated}=useContext(AuthContext);
    // useEffect(()=>{
    //     console.log("cart: ", cart)
    // },[cart])
    const navigator=useNavigate();
    
    let {prices} = useContext(PriceContext)

    let cost=prices.find(e=>e.idMeal==props.detail.idMeal);
    return (
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.detail.strMealThumb} />
          <Card.Body>
              <Card.Title>{props.detail.strMeal}</Card.Title>
                {
                    cost&&<Card.Subtitle>Just:- {cost.cost} Rs</Card.Subtitle>
                }
              <button className="btn" onClick={()=>{addMeal(props.detail)}}>Add to cart</button>
              {
                authenticated&&<button className="btn" onClick={()=>{navigator(`/setPrice/${props.detail.idMeal}`)}}>setPrice</button>
              }
              <button className="btn" onClick={()=>{addOrder(props.detail)}}>Place Order</button>
          </Card.Body>
          </Card>
      
    );
}


export const CategoryDetail= () => {
    let {categoryName}=useParams();

    const [meals,setMeals] = useState();


    useEffect(() => {
        const fn = () => {
            const response =axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`).then(response=>{
                    console.log(response.data.meals)
                    setMeals(response.data.meals)
                }
            )
        }
        fn();
    },[])

    return<>
    {/* <Link to="/cart">Cart</Link> */}

               <Container>
       <Row>
            {
                meals?.map((item,index) =><Col> <DetailsCards detail={item}/> </Col> )
            }
       </Row>
       </Container>
    </>
}   