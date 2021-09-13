import React from 'react'
// import products from '../utils/products'
import ProductCard from '../components/ProductCard'
import { Col, Row, Container } from 'react-bootstrap'
import Carousel from "../components/Carousel"
import { _Api, END_POINT } from '../api/Api'
import { useSelector, useDispatch } from 'react-redux'
// import {listProducts, sliderImages} from '../redux/actions/home'

function HomeScreen() {
    const homeState = useSelector(state => state.homeReducer)
    const sliderState = useSelector(state => state.sliderReducer)

    React.useEffect(() => { }, [])

    return (
        <>
            <Carousel
                images={sliderState.sliderImages}
            />
            <Container>
                <Row>
                    {
                        homeState.products.map((item, index) => {
                            return (

                                <Col sm={12} md={6} lg={4} xl={3}>
                                    <ProductCard
                                        product={item}
                                    />
                                </Col>

                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default HomeScreen
