import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";
const InsertProduct=()=>{
    const [input, setInput]= useState({});

    const [myimage, setMyimage]= useState();
    
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }

    const handleImage=(e)=>{
        setMyimage(e.target.files[0]);
        console.log(myimage);
    }

    const handleSubmit=async(e)=>{
      e.preventDefault();

      const formData= new FormData();
      formData.append("file",myimage);
      formData.append('upload_preset', 'xvj9iism');
      formData.append('cloud_name', 'df0akao3b');
      const response = await axios.post('https://api.cloudinary.com/v1_1/df0akao3b/image/upload', formData);
      console.log('Image uploaded:', response.data);
      console.log('Image uploaded:', response.data.url);

      let api1="https://e-comclotheszone-2.onrender.com/product/productsave";

    axios.post(api1,{...input, image:response.data.url}).then((res)=>{
       alert("Data save");
    })
       

    }


    return(
        <>
          <h1> Insert New Product</h1>
          <Form style={{width:'300px'}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Product name</Form.Label>
        <Form.Control type="text" name="name" 
        value={input.name} onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>description</Form.Label>
        <Form.Control type="text" name="description" 
         value={input.description} onChange={handleInput}/>
      </Form.Group>
      <Form.Label> Select Category</Form.Label>
      <Form.Select aria-label="Default select example" name="category" 
      value={input.category} onChange={handleInput} >
      <option value="Men">Men</option>
      <option value="Women">Women</option>
      <option value="Kids">Kids</option>
      </Form.Select>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Price</Form.Label>
        <Form.Control type="text" name="price" value={input.price} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control type="file" name="file" onChange={handleImage}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>

        </>
    )
}
export default InsertProduct;