import React from 'react'
import { Carousel } from 'react-bootstrap'

function Carousel1({ images }) {
    console.log("imagesimages", images)
    return (
        <div className="my_carousel">
            <Carousel >
                {
                    images.map(item => {
                        return (
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100"
                                    src={`http://127.0.0.1:8000${item.image}`}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                        )
                    })
                }

                {/* <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src="https://cdn.agrilifetoday.tamu.edu/wp-content/uploads/2020/09/fetilizer-1366x598.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item> */}
                {/* <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.agrilifetoday.tamu.edu/wp-content/uploads/2020/09/fetilizer-1366x598.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item> */}
            </Carousel>
        </div>
    )
}

export default Carousel1
