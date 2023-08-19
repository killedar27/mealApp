// www.themealdb.com/api/json/v1/1/lookup.php?i=52772
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useParams,useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { CartContext } from "./cart/cartProvider";
import { AuthContext } from "./authentication/auth_context";

export const PriceContext = createContext();


export const PriceProvider = ({...props}) => {
    
    const [prices,setPrices]=useState([])//prices is a json object with meal id and prices 
    const {authenticated}=useContext(AuthContext)
    const SetPrice = (costOfMeal) => {
        if(authenticated){
            setPrices([...prices,costOfMeal]);
        }
    }

    return (<PriceContext.Provider value={{prices,SetPrice}} {...props}/>)
}

// const {SetPrice} = useContext(PriceContext)


function DetailsCards({detail}) {
    
    const {addMeal, cart}=useContext(CartContext);
    // useEffect(()=>{
    //     console.log("cart: ", cart)
    // },[cart])
    const navigator=useNavigate();

    const {prices,SetPrice}=useContext(PriceContext)

    const [cost,setCost]=useState()
    
    const handleChange=()=>{
        let product={
            'idMeal':detail?.idMeal,
            'cost':cost
        }
        SetPrice(product);
        navigator('/')

    }
    // console.log(detail)
    return (
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={detail?.strMealThumb} />
          <Card.Body>
              <Card.Title>{detail?.strMeal}</Card.Title>
              
              <input type="text" value={cost} onChange={e=>{setCost(e.target.value)}}/>
              <button className="btn" onClick={handleChange}>Set Price</button>
          </Card.Body>
          </Card>
          
      
    );
}
  

export const MealDetail= () => {
    let {idMeal}=useParams();

    const [meals,setMeals] = useState();

    useEffect(() => {
        const fn = () => {
            const response =axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`).then(response=>{
                    console.log(response.data.meals[0])
                    setMeals(response.data.meals[0])
                }
            )
        }
        fn();
    },[])

    return<>
    <Link to="/cart">Test</Link>

               <Container>
       <Row>
            {
                <Col> <DetailsCards detail={meals}/> </Col> 
            }
       </Row>
       </Container>
    </>
}   