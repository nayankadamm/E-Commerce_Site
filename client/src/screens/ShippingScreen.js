import React from 'react';
import FormCotaniner from '../components/FormCotaniner';
import { Form,Button,Row,Col } from 'react-bootstrap';
import { useEffect,useState } from 'react';

import { saveShippingAddress } from '../slices/cartSlice';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CheckOutSteps from '../components/CheckOutSteps';
const ShippingScreen = () => {
    const cart = useSelector((state) =>state.cart);
   const {shippingAddress} = cart;
    const [address,setAdress] = useState(shippingAddress.address || '')
    const [city,setCity] = useState(shippingAddress.city || '')
    const [pincode,setPincode] = useState(shippingAddress.pincode || '')
    const [country,setCountry] = useState(shippingAddress.city || '')
    const dispatch = useDispatch();
    const navigate = useNavigate();

   

    const submitHandler =(e)=>{
        e.preventDefault();
        dispatch(saveShippingAddress({address,city,pincode,country}));
        navigate("/payment")

    }
    return (
       <FormCotaniner>
        <CheckOutSteps step1/>
        <h1>Shipping</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group className='my-2' controlId='address'>
                <Form.Label >Adress</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='enter the address...'
                    value={address}
                    onChange={(e)=>setAdress(e.target.value)}
                    
                    >

                    </Form.Control>
                

            </Form.Group>
            <Form.Group className='my-2' controlId='city'>
                <Form.Label >City</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='enter the city...'
                    value={city}
                    onChange={(e)=>setCity(e.target.value)}
                    
                    >

                    </Form.Control>
                

            </Form.Group>
            <Form.Group className='my-2' controlId='pincode'>
                <Form.Label >Pincode</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='enter the pincode...'
                    value={pincode}
                    onChange={(e)=>setPincode(e.target.value)}
                    
                    >

                    </Form.Control>
                

            </Form.Group>
            <Form.Group className='my-2' controlId='country'>
                <Form.Label >Country</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='enter the country...'
                    value={country}
                    onChange={(e)=>setCountry(e.target.value)}
                    
                    >

                    </Form.Control>
                

            </Form.Group>
            <Button type='submit' className='my-3' >Continue</Button>
           
        </Form>

       </FormCotaniner>
    );
}

export default ShippingScreen;
