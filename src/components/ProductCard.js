import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
    console.log("dasmkd", `http://127.0.0.1:8000${product.image}`)
    return (
        <Card key={product.id} className="my-3 p-3 rounded courser-pointer">
            <Link to={`/product/${product.id}`}>

                <Card.Img variant="top" src={`http://127.0.0.1:8000${product.image}`} />
            </Link>
            <Card.Body>
                <Link to={`/product/${1}`}>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        Price: <i className="fas fa-rupee-sign"></i> {product.price}
                    </Card.Text>
                    {/* <Button variant="primary">Add To Cart</Button> */}
                </Link>
            </Card.Body>
        </Card>
    )
}

export default ProductCard
