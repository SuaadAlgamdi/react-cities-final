import { useContext } from "react"
import { Card, Col, Row, Button, CardGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import CitiesContext from "../utils/CitiesContext"

function ProductsList(props) {
  const { listTitle } = props
  const { products } = useContext(CitiesContext)
  const productsType = products.filter(product => product.type === type)
  return (
    <>
      <Row>
        <h4 className="mt-5 mb-4">{listTitle}</h4>
      </Row>
      <Row>
        {productsType.map(products => (
          <Col key={products._id}>
            <Card border="light" style={{ maxWidth: "200px" }}>
              <Link to={`/products/${products._id}`}>
                <Card.Img variant="top" src={products.photo} height="220px" style={{ borderRadius: "10px" }} />
              </Link>
              <Card.Body>
                <Link to={`/products/${products._id}`} className="text-black" style={{ textDecoration: "none" }}>
                  <Card.Title>{products.name}</Card.Title>
                </Link>
                <Card.Text className="text-muted">{products.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default ProductsList
