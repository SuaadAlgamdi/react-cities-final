import { useContext } from "react"
import { Card, Col } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import CitiesContext from "../utils/CitiesContext"
import Carsullist from "../components/Carsullist"

function TouristPlaceList() {
  const { cityId } = useParams()
  const { cities } = useContext(CitiesContext)

  if (cities.length === 0) return <h1>Loading...</h1>

  const city = cities.find(city => city._id === cityId)
  if (!city) return <h1>Loading...</h1>
  if (city.touristPlaces.length === 0) return <h1>No TouristPlaces in this city</h1>
  
  return (
    <>
    <Carsullist  places={city.touristPlaces}/>
      {" "}
      {city.touristPlaces.map(touristPlace => (
        <Col md="2">
          <Card border="light" style={{ maxWidth: "200px" }}>
            <Link to={`/TouristPlace/${touristPlace._id}`}>
              <Card.Img
                variant="top"
                src={touristPlace.logo}
                height="220px"
                style={{ borderRadius: "10px", objectFit: "cover" }}
              />
            </Link>
            <Card.Body>
              <Link to={`/TouristPlace/${touristPlace._id}`} className="text-black" style={{ textDecoration: "none" }}>
                <Card.Title>{touristPlace.name}</Card.Title>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  )
}

export default TouristPlaceList
