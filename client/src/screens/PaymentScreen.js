import React from 'react';
import { useState } from 'react';
import { Form,Button,Col } from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import FormCotaniner from '../components/FormCotaniner';
import CheckOutSteps from '../components/CheckOutSteps';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { savePaymentMethod } from '../slices/cartSlice';

const PaymentScreen = () => {



    const [paymentMethod,setPaymentMethod] = useState('PayPal');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector((state)=>state.cart);
    const {shippingAddress} = cart;
    useEffect(()=>{
        if(!shippingAddress){
            navigate("/shipping")
        }
    },[shippingAddress,navigate])
    const sumbitHandler= (e)=>{
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        navigate("/placeorder");
    }
    return (
        <FormCotaniner>
            <CheckOutSteps step1 step2 step3/>
            <h1>Payment Method</h1>
            <Form onSubmit={sumbitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>Select Method </Form.Label>
                    <Col>
                    <Form.Check type='radio'
                    className='my-2'
                    label='PayPal or Credit card'
                    id='PayPal'
                    name='paymentMethod'
                    value='PayPal'
                    checked
                    onChange={(e)=>setPaymentMethod(e.target.value)}
                    >

                    </Form.Check>
                    
                    </Col>
                </Form.Group>
                <Button type='submit' variant='primary'>Continue</Button>
            </Form>
        </FormCotaniner>
    );
}

export default PaymentScreen;
