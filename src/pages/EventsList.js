import { useContext } from "react"
import { Card, Col } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import CitiesContext from "../utils/CitiesContext"
import Carsullist from "../components/Carsullist"

function EventsList() {
  const { cityId } = useParams()
  const { cities } = useContext(CitiesContext)

  if (cities.length === 0) return <h1>Loading...</h1>

  const city = cities.find(city => city._id === cityId)
  if (!city) return <h1>Loading...</h1>
  if (city.events.length === 0) return <h1>No Events in this city</h1>
  return (
      
    <>
    <Carsullist places={city.events} />
      {city.events.map(event => (
        <Col md="2">
          <Card border="light" style={{ maxWidth: "200px" }}>
            <Link to={`/Event/${event._id}`}>
              <Card.Img
                variant="top"
                src={event.logo}
                height="220px"
                style={{ borderRadius: "10px", objectFit: "contain " }}
              />
            </Link>
            <Card.Body>
              <Link to={`/Event/${event._id}`} className="text-black" style={{ textDecoration: "none" }}>
                <Card.Title>{event.name}</Card.Title>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  )
}

export default EventsList
