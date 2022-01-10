import { useContext } from "react"
import { Card, Col } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import CitiesContext from "../utils/CitiesContext"
import Carsullist from "../components/Carsullist"

function MuseumsList() {
  const { cityId } = useParams()
  const { cities } = useContext(CitiesContext)
  if (city.restaurants.length === 0) return <h1>No restaurants in this city</h1>

  if (cities.length === 0) return <h1>Loading...</h1>

  const city = cities.find(city => city._id === cityId)
  if (!city) return <h1>Loading...</h1>
  if (city.museums.length === 0) return <h1>No Museums in this city</h1>

  return (
    <>
      <Carsullist places={city.museums} />
      {city.museums.map(museum => (
        <Col md="2">
          <Card border="light" style={{ maxWidth: "200px" }}>
            <Link to={`/Museum/${museum._id}`}>
              <Card.Img
                variant="top"
                src={museum.logo}
                height="220px"
                style={{ borderRadius: "10px", objectFit: "cover" }}
              />
            </Link>
            <Card.Body>
              <Link to={`/Museum/${museum._id}`} className="text-black" style={{ textDecoration: "none" }}>
                <Card.Title>{museum.name}</Card.Title>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  )
}

export default MuseumsList
