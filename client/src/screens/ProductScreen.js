import React from "react";
import {useParams,useNavigate} from 'react-router-dom'
import { useState } from "react";
import { useGetProductDetailsQuery } from "../slices/productsApiSlices";
import { Link } from 'react-router-dom';
import {Form, Row,Col,Image,ListGroup,Card,Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from "../components/Message";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
const ProductScreen = () => {
   const {id:productId} = useParams();

  //cart state
  const [qty,setQty] = useState(1);


   const{data:product,isLoading,error}=useGetProductDetailsQuery(productId);

   const dispatch = useDispatch();
   const navigate =useNavigate();

   const addCartHandler =()=>{
   
    dispatch(addToCart({...product,qty}));
   
    navigate("/cart");
    
  }
  return (
    <div>
        <Link className='btn btn-light my-3' to='/'>

            Go Back
            
          </Link>
        

         {
          isLoading?(<Loader/>):error?(<Message variant='danger'>{error.error}</Message>):(
            <>
            <Row>
        <Col md={5}>
      <Image src={product.image} alt='{product.name}' fluid />
        </Col>
        <Col md={4}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup>
                <ListGroup.Item>
                  <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </ListGroup.Item>
                <ListGroup.Item>
                  Price: ${product.price}
                </ListGroup.Item>
              </ListGroup>
            </ListGroup>

        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
              <Row>
                  <Col>Status</Col>
                  <Col>
                    <strong>${product.countInStock > 0 ? 'In Stock': 'Out of stock'}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

            {product.countInStock>0 &&(
              <ListGroup.Item>
                <Row>
                  <Col>Qty</Col>
                  <Col>
                  <Form.Control  as ='select' value={qty} onChange ={(e)=>{
                    
                   return setQty(Number(e.target.value))
                    }} >
                    {[...Array(product.countInStock).keys() ].map((x)=>
                      <option key={x+1} value={x+1} >{x+1}</option>
                  )}
                     </Form.Control >
                  </Col>
                </Row>

              </ListGroup.Item>
            )}

              <ListGroup.Item>
                <Button className='btn-block' type='button' 
                disabled={product.countInStock===0}

                onClick={addCartHandler}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>

        </Col>
      </Row>
            </>
          )
         } 



      
    </div>
  )
}
export default ProductScreen;
