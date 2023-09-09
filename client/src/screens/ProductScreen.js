import React from 'react';
import { useParams } from 'react-router-dom'
import products from '../products'
import { Link } from 'react-router-dom';
import { Row,Col,Image,ListGroup,Card,Button } from 'react-bootstrap';
import Rating from '../components/Rating';


const ProductScreen = () => {
    const {id:productId} =useParams();
    const product = products.find((p)=>p._id === productId);
    console.log(product);

  return (
    <div>
        <Link className='btn btn-light my-3' to='/'>
            Go Back
        </Link>
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
              <ListGroup.Item>
                <Button className='btn-block' type='button' 
                disabled={product.countInStock===0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>

        </Col>
      </Row>
    </div>
  )
}
export default ProductScreen;