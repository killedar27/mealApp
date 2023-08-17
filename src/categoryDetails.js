import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function DetailsCards(props) {
    return (
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.detail.strMealThumb} />
          <Card.Body>
              <Card.Title>{props.detail.strMeal}</Card.Title>
              
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
               <Container>
       <Row>
            {
                meals?.map((item,index) =><Col> <DetailsCards detail={item}/> </Col> )
            }
       </Row>
       </Container>
    </>
}   