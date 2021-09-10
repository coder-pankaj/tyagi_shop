import React from 'react'
// import products from '../utils/products'
import ProductCard from '../components/ProductCard'
import { Col, Row, Container } from 'react-bootstrap'
import Carousel from "../components/Carousel"
import { _Api, END_POINT } from '../api/Api'

function HomeScreen() {
    const [products, setProducts] = React.useState([])
    const [sliderImages, setSliderImages] = React.useState([])

    React.useEffect(() => {
        _Api(END_POINT.GET_PRODUCTS_LIST.method, END_POINT.GET_PRODUCTS_LIST.endPoint)
            .then(resp => {
                const { result } = resp
                setProducts(result)
            })
        _Api(END_POINT.GET_HOME_SLIDER_IMAGES.method, END_POINT.GET_HOME_SLIDER_IMAGES.endPoint)
            .then(resp => {
                const { result } = resp
                setSliderImages(result)
            })

    }, [])

    return (
        <>
            <Carousel
                images={sliderImages}
            />
            <Container>
                <Row>
                    {
                        products.map((item, index) => {
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
