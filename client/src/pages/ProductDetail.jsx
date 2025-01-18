import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addToCard } from '../cardSlice';
const ProductDetail=()=>{
    const {proid} = useParams();
    const [mydata, setMydata]= useState({});
    const dispatch= useDispatch();

    const loadData=()=>{
        let api="https://e-comclotheszone-2.onrender.com/product/productdetail";
        axios.post(api,{id:proid}).then((res)=>{
            setMydata(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    }, []);


    const addcardData=(id, name, desc, categ, price, image)=>{
        dispatch(addToCard({id:id, name:name, description:desc, category:categ, price:price, image:image, qnty:1}))
 }


    return(
        <>
           <h1 align="center"> Product Detail </h1> 
           <div id="proDetail">
              <div id="proImage"> 
                    <img src={mydata.image} width="300" height="300" />                 
              </div>
              <div id="proData">
                  <h2 style={{color:'blue'}}> {mydata.name} </h2>
                  <h5>Product Detail : {mydata.description}</h5>
                  <h4 style={{color:'red'}}>Price- {mydata.price}</h4>
                  <h6> This Product for- {mydata.category}</h6>
              
                <Button
                onClick={()=>{addcardData(mydata._id, mydata.name, mydata.description, mydata.category, mydata.price, mydata.image)}}
                >AddToCart</Button>
              </div>
            </div>       
        </>
    )
}
export default ProductDetail;