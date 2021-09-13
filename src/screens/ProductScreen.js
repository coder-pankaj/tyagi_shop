import React from 'react'
import Rating from '../components/Rating'
import { Button, Col, Row, Container, ListGroup, Image } from 'react-bootstrap'
import {Link} from 'react-router-dom'

import {useDispatch, useSelector} from 'react-redux'

import ContentLoader from 'react-content-loader'
import {productDetail} from '../redux/actions/product'


function ProductScreen({ match }) {
    const dispatch = useDispatch() 
    
    const {product} = useSelector(state => state.productReducer)
    
   
    
 

   

    React.useEffect(() => {
        console.log("kdjshhj", match.params.id);
        
        dispatch(productDetail(match.params.id))      
       

    }, [])




    return (
        <Container>
           
  {/* <ContentLoader
    width={700}
    height={300}
    viewBox="0 0 700 300"
    backgroundColor="#f5f5f5"
    foregroundColor="#dbdbdb"
  
  >
    <rect x="4" y="8" rx="3" ry="3" width="7" height="288" />
    <rect x="6" y="289" rx="3" ry="3" width="669" height="8" />
    <rect x="670" y="9" rx="3" ry="3" width="6" height="285" />
    <rect x="55" y="42" rx="16" ry="16" width="274" height="216" />
    <rect x="412" y="113" rx="3" ry="3" width="102" height="7" />
    <rect x="402" y="91" rx="3" ry="3" width="178" height="6" />
    <rect x="405" y="139" rx="3" ry="3" width="178" height="6" />
    <rect x="416" y="162" rx="3" ry="3" width="102" height="7" />
    <rect x="405" y="189" rx="3" ry="3" width="178" height="6" />
    <rect x="5" y="8" rx="3" ry="3" width="669" height="7" />
    <rect x="406" y="223" rx="14" ry="14" width="72" height="32" />
    <rect x="505" y="224" rx="14" ry="14" width="72" height="32" />
    <rect x="376" y="41" rx="3" ry="3" width="231" height="29" />
  </ContentLoader> */}

            <div className="my-3">
                <Link className="btn btn-dark" to="/" ><i className="fas fa-long-arrow-alt-left"></i> Back</Link>
                </div>
            <Row>
               
                <Col md={8} >
                
                    <Col md={8}>
                        <Image className="img-fluid" src={`http://127.0.0.1:8000${product.image}`} />
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
                         Name: <h3>{product?.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: <i className="fas fa-rupee-sign"></i>{product?.price} 
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={3} text={`${120} reviews`} color={'#f8e825'} />
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            {product?.description}
                       </ListGroup.Item>

                    </ListGroup>

                </Col>


            </Row>
        </Container>

    )
}

export default ProductScreen
