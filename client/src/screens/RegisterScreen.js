import React, { useEffect, useState } from 'react';
import FormCotaniner from '../components/FormCotaniner';
import { Form,Button,Row,Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { useLocation,useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import Loader from "../components/Loader";

import {useRegisterMutation }from "../slices/usersApliSlice"
import {setCredentials} from "../slices/authSlice"
import { toast } from 'react-toastify';

const RegisterScreen = () => {
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //destructured array for userAPislice
    const[register,{isLoading}]= useRegisterMutation();

    //stored info in the auth state
    const{userInfo} = useSelector((state)=>state.auth)

    //if we procced to checkout in the cart it will check if the user is logged in or not
    //so for that
    const {search} = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get('redirect') || '/';

    useEffect(()=>{
        if(userInfo){
            navigate(redirect)
        }

    },[navigate,redirect,userInfo])





    const submitHandler =async(e)=>{
        e.preventDefault();
        if(password!==confirmPassword){
            alert("password and confirm password does not matched")
        }
        else{
            try {
                const res = await register({email,name,password}).unwrap();
            dispatch(setCredentials({...res }));
            navigate(redirect);
            } catch (err) {
                alert("Inavlid Creds")
                
                
            }

        }
      
            
            
       
    }
    return (
        <FormCotaniner>
            <h1>Sign Up</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email' className='my-3'>
                    <Form.Label>Email Adress</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email....'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />

                </Form.Group>
                <Form.Group controlId='name' className='my-3'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Enter name....'
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />

                </Form.Group>
                
                <Form.Group controlId='password' className='my-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password....'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <Form.Group controlId='confirmpassword' className='my-3'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter confirm password....'
                        value={confirmPassword}
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                    />

                </Form.Group>

                </Form.Group>
                <Button type='submit'
                variant='primary'
                className='my-3'
                disabled ={isLoading}
                >Sign in </Button>
                {
                    isLoading && <Loader/>
                }

            </Form>
            <Row className='py-3'>
                <Col>
                Already Signed In? <Link to = {redirect ? `/login?redirect=${redirect}`:'/login'} >Login</Link>
                </Col>

            </Row>

            
        </FormCotaniner>
    );
}

export default RegisterScreen;
