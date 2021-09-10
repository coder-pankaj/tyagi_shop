import React from 'react'
import Rating from '../components/Rating'
import { Button, Col, Row, Container, ListGroup, Image } from 'react-bootstrap'

const product = {
    "title": "Brown eggs",
    "type": "dairy",
    "description": "Raw organic brown eggs in a basket",
    "filename": "0.jpg",
    "height": 600,
    "width": 400,
    "price": 28.1,
    "rating": 4
}

function ProductScreen({ match }) {
    console.log("matchmatch", match.params.id, product)
    return (
        <Container>
            <Row>
                <Col md={8} >
                    <Col md={8}>
                        <Image className="img-fluid" src="https://www.kindpng.com/picc/m/420-4204743_indian-potash-limited-products-hd-png-download.png" />
                    </Col>
                    <Row className="align-items-center justify-content-center">
                        <Col md={4}>
                            <Button className="w-100">ADD TO CART</Button>
                        </Col>
                        <Col md={4}>
                            <Button className="w-100">BUY NOW</Button>
                        </Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            Name: <h3>testPrime</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price:123 <i class="fas fa-rupee-sign"></i>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={3} text={`${120} reviews`} color={'#f8e825'} />
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            Raw organic brown eggs in a basket
                       </ListGroup.Item>

                    </ListGroup>

                </Col>


            </Row>
        </Container>

    )
}

export default ProductScreen
