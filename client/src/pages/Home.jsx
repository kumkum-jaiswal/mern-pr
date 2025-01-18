import Carousel from 'react-bootstrap/Carousel';
import ban1 from "../images/b1.avif";
import ban2 from "../images/b2.avif";
import ban3 from "../images/b3.webp";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCard } from '../cardSlice';
import { useNavigate } from 'react-router-dom';

const Home=()=>{
const [mydata, setMydata]=useState([]);
const dispatch= useDispatch();
const navigate= useNavigate();

  const loadData=()=>{
    let api="https://e-comclotheszone-2.onrender.com/product/showproduct";
    axios.get(api).then((res)=>{
      setMydata(res.data);
      console.log(res.data);
      
    })
  }
  useEffect(()=>{
    loadData();
  }, []);


  const addcardData=(id, name, desc, categ, price, image)=>{
         dispatch(addToCard({id:id, name:name, description:desc, category:categ, price:price, image:image, qnty:1}))
  }

  const ans=mydata.map((key)=>{
    return(
      <>
        <Card style={{ width: '18rem', marginTop:'20px' }}>

     <a href='#' onClick={()=>{navigate(`/prodetail/${key._id}`)}}>
      <Card.Img variant="top" src={key.image} style={{height:'300px'}} />
      </a>
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
          {key.description}
          <br/>
          For- {key.category}
          <br/>
         <span style={{color:'red', fontWeight:'bold'}}> Price : {key.price} </span> 
        </Card.Text>
        <Button variant="primary"
         onClick={()=>{addcardData(key._id, key.name, key.description, key.category, key.price, key.image)}}
        >Add to Cart</Button>
      </Card.Body>
    </Card>
      
      </>
    )
  })


    return(
        <>
           
           <Carousel>
      <Carousel.Item>
          <img src={ban1} width="100%" height="300" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={ban2} width="100%" height="300" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={ban3} width="100%" height="300" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
         


          <h1 align="center"> Our Trending Collections</h1>
        <div id="carddata">
        {ans}
        </div>
        
        </>
    )
}

export default Home;