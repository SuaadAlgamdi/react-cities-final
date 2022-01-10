import { useContext } from "react"
import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import CitiesContext from "../utils/CitiesContext"

function CityItem(props) {
  const { city } = props
  const { cities } = useContext(CitiesContext)

  console.log(cities)

  //   if (city)
  let cityFound = cities.find(cityone => cityone._id == city)

  console.log(cityFound)
  return (
    <Col>
      <Card border="light" style={{ maxWidth: "200px", height:400 }}>
        <Link to={`/city/${cityFound._id}`}>
          <Card.Img variant="top" src={cityFound.photo} height="220px" style={{ borderRadius: "10px" }} />
        </Link>
        <Card.Body>
          <Link to={`/city/${cityFound._id}`} className="text-black" style={{ textDecoration: "none" }}>
            <Card.Title>{cityFound.name}</Card.Title>
          </Link>
          <Card.Text
            className="text-muted"
            style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden", wordWrap: "break-word" }}
          >
            {cityFound.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CityItem
