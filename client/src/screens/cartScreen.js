import React from 'react'
import { Row,Col,Image,Form,ListGroup,Button,Card } from 'react-bootstrap'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Message from '../components/Message'
import { Link } from 'react-router-dom'
import { addToCart, removeFromCart } from '../slices/cartSlice'
import { FaTrash } from 'react-icons/fa'
const cartScreen = () => 
{
    const cart = useSelector((state)=>state.cart);
    const {cartItems} = cart;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addToCartHandler=(product,qty)=>{
            dispatch(addToCart({...product,qty}))
    }
    const removeFromCartHandler=(id)=>{
        dispatch(removeFromCart(id))
    }

    const proceedToCheckOut=()=>{
        navigate('/login?redirect=/shipping')
    }
return(

    <div>
        <Row>
        <Col md={8}>
        <h1 style={{marginBottom:'20px',color:"black"}}>Shoping Cart</h1>

        {
            cartItems.length === 0 ? (<Message >
                Your cart is empty <Link to="/" >Go back</Link>
            </Message>):
            <ListGroup variant='flush' >
                {
                    cartItems.map((item)=>(
                        <ListGroup.Item variant='flush' key={item._id}>
                            <Row>
                                <Col md={2}>
                                    <Image src={item.image}  fluid rounded/>
                                </Col>
                                <Col md={3} >
                                    {
                                        <Link to='/'>{item.name}</Link>
                                    }
                                
                                </Col>
                                <Col md={2}>
                                   ${item.price}
                                </Col>
                                <Col md={2}>
                                <Form.Control
                            as="select"
                            value={item.qty}
                            onChange={(e) => {
                                addToCartHandler(item,Number(e.target.value));
                              
                            }}
                          >
                            {[...Array(item.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                                </Col>

                                <Col md={2}>
                                    <Button type='button' variant='light' 
                                        onClick={()=>removeFromCartHandler(item._id)}
                                    >
                                    <FaTrash></FaTrash>
                                    </Button>
                                </Col>
                            </Row>

                        </ListGroup.Item>
                    ))
                }


            </ListGroup>
        }

        <Row>

        </Row>


        </Col>
        <Col md={4}>
            <Card>
                <ListGroup variant='flush' >
                    <ListGroup.Item variant='flush'>

                        
                        <h3>Subtotal ({cartItems.reduce((acc,item)=>acc+item.qty,0)}) items</h3>
                        ${
                            cartItems.reduce((acc,item)=>acc+item.price*item.qty,0)
                        }
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button variant='secondary'
                            disabled ={cartItems.length===0}
                            onClick={proceedToCheckOut}
                        >
                            Proceed To checkout

                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>

        </Col>

    </Row>
    </div>
)
   
  

}

export default cartScreen
