import axios from 'axios'
import { useState,useEffect } from 'react'
import {Button,Card} from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const Itemcard=()=>{
    

    return <>
        <h1></h1>
    </>
}

function Cards(props) {
  return (
    <Link to={`category/${props.detail.strCategory}`}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.detail.strCategoryThumb} />
        <Card.Body>
            <Card.Title>{props.detail.strCategory}</Card.Title>
            <Card.Text>
                {props.detail.strCategoryDescription.substring(0,50)}
            </Card.Text>
            {/* <Button variant="primary" onClick={()=>{Navigate(`category/${props.detail.strCategory}`)}}>Look for detail</Button> */}
        </Card.Body>
        </Card>
    </Link>
  );
}


const HomePage= ()=>{
    
    const [data,setData]=useState()
    const [categories,setCategories]=useState()
    // const fn = async () => {
    //     const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    //     setData(response.data)
    //     console.log(data)
    // }
    // fn();

    
    useEffect(() => {
        const fn = () => {
            const response =axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then(response=>{
                    console.log(response.data.categories)
                    setCategories(response.data.categories)
                }
            )
        }
        fn();
    },[])
    return <>
       <Container>
       <Row>
            {
                categories?.map((item,index) =><Col> <Cards detail={item}/> </Col> )
            }
       </Row>
       </Container>
    </>
    
}
export default HomePage;