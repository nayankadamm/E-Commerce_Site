import React from "react";
import { useEffect,useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Product from "../components/Product";
const HomeScreen = () => {

    const [products,setProducts] = useState([]);
    useEffect(()=>{
            const fetchproducts = async () =>{
                const {data}=await axios.get("/api/products");
                setProducts(data);
            }
            fetchproducts();
    },[])

    return(
        <>
        <h1>Latest products</h1>
        <Row>
            {products.map((product)=>
            (
                <Col sm={12} md={6} lg={4} xl={3}>
                   <Product product={product}/>
                </Col>
            ))}
        </Row>
        </>
    );
}
export default HomeScreen;