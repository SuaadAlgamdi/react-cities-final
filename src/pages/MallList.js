import { useContext } from "react"
import { Card, Col, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import CitiesContext from "../utils/CitiesContext"
import Carsullist from "../components/Carsullist"

function MallList() {
  const { cityId } = useParams()
  const { cities } = useContext(CitiesContext)


  const city = cities.find(city => city._id === cityId)
  if (!city) return <h1>Loading...</h1>
  if (city.malls.length === 0) return <h1>No malls in this city</h1>

  return (
    <>
      <Carsullist places={city.malls} />

      <Row md="10" style={{ margin: "auto" }}>
        {" "}
        {city.malls.map(mall => (
          <Card border="light" style={{ maxWidth: "200px" }}>
            <Link to={`/Mall/${mall._id}`}>
              <Card.Img
                variant="top"
                src={mall.logo}
                height="220px"
                style={{ borderRadius: "10px", objectFit: "cover" }}
              />
            </Link>
            <Card.Body>
              <Link to={`/Mall/${mall._id}`} className="text-black" style={{ textDecoration: "none" }}>
                <Card.Title>{mall.name}</Card.Title>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </>
  )
}

export default MallList
