import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlices";
import Loader from "../components/Loader";
import Message from "../components/Message";
const HomeScreen = () => {

    const{data:products,isLoading,error}= useGetProductsQuery();


    return(
        <>
        
        {
            
            isLoading?(<Loader/>):error?(<Message variant='danger'>{error.error}</Message>):(<>
             <h1>Latest products</h1>
        <Row>
            
            {products.map((product,index)=>
            (
                <Col sm={12} md={6} lg={4} xl={3}>
                   <Product  product={product} key={index} />
                </Col>
            ))}
        </Row>
            </>)
        }
       
        </>
    );
}
export default HomeScreen;