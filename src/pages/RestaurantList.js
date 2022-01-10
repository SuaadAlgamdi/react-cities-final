import { useContext } from "react"
import { Card, Col, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import CitiesContext from "../utils/CitiesContext"
import Carsullist from "../components/Carsullist"

function RestarantList() {
  const { cityId } = useParams()
  const { cities } = useContext(CitiesContext)


  const city = cities.find(city => city._id === cityId)
  if (!city) return <h1>Loading...</h1>
  if (city.restaurants.length === 0) return <h1>No restaurants in this city</h1>

  return (
    <>
      <Carsullist places={city.restaurants} />

      <Row md="10" style={{ margin: "auto" }}>
        {" "}
        {city.restaurants.map(restaurant => (
          <Card border="light" style={{ maxWidth: "200px" }}>
            <Link to={`/Restaurant/${restaurant._id}`}>
              <Card.Img
                variant="top"
                src={restaurant.logo}
                height="220px"
                style={{ borderRadius: "10px", objectFit: "cover" }}
              />
            </Link>
            <Card.Body>
              <Link to={`/Restaurant/${restaurant._id}`} className="text-black" style={{ textDecoration: "none" }}>
                <Card.Title>{restaurant.name}</Card.Title>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </>
  )
}

export default RestarantList
