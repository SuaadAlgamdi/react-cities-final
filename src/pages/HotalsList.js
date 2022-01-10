import { useContext } from "react"
import { Card, Col, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import CitiesContext from "../utils/CitiesContext"
import Carsullist from "../components/Carsullist"

function HotalsList() {
  const { cityId } = useParams()
  const { cities } = useContext(CitiesContext)

  if (cities.length === 0) return <h1>Loading...</h1>

  const city = cities.find(city => city._id === cityId)
  if (!city) return <h1>Loading...</h1>
  if (city.hotels.length === 0) return <h1>No hotels in this city</h1>
  return (
    <>
      <Carsullist places={city.hotels} />

      <Row md="4" style={{ margin: "auto" }}>
        {" "}
        {city.hotels.map(hotel => (
          <Card border="light" style={{ maxWidth: "220px" }}>
            <Link to={`/Hotel/${hotel._id}`}>
              <Card.Img
                variant="top"
                src={hotel.logo}
                height="220px"
                style={{ borderRadius: "10px", objectFit: "cover" }}
              />
            </Link>
            <Card.Body>
              <Link to={`/Hotel/${hotel._id}`} className="text-black" style={{ textDecoration: "none" }}>
                <Card.Title>{hotel.name}</Card.Title>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </>
  )
}

export default HotalsList
