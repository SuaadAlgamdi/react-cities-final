import { Place } from "@mui/icons-material"
import { style } from "@mui/system"
import { useContext } from "react"
import { Col, Form, Row, Button } from "react-bootstrap"
import video1 from "../assets/video.mp4"

import desirt from "../assets/desirt.jpg"
import CitiesContext from "../utils/CitiesContext"

function Showcase() {
  const { cities, citySearch, places } = useContext(CitiesContext)
  return (
    <Row>
      <Col
        style={{
          background: `url("${video1}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 700,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // position: "relative",
        }}
      >
        <video
          style={{
            /** Simulationg background-size: cover */
            objectFit: "cover",
            height: "100vh",
            width: "100%",
            zIndex: -100,
            position: "absolute",
            top: 0,
            left: 0,
            filter: "saturate(0,5)",
          }}
          src={video1}
          autoPlay
          muted
          loop
        ></video>
        <h1 className="text-white mb-3">Welcome</h1>
        <h2 className="text-white"></h2>
        <Form className="mt-5" onSubmit={citySearch}>
          <Row>
            <Col md="8">
              <Form.Group>
                <Form.Control
                  name="citySearch"
                  list="citySearch"
                  type="search"
                  placeholder="Search for a city, place"
                />
              </Form.Group>
              <datalist id="citySearch">
                {cities.map(city => (
                  <option value={city.name} />
                ))}

                {places.map(place => (
                  <option value={`${place.name}`} />
                ))}
              </datalist>
            </Col>
            <Col>
              <Button variant="outline-dark" type="submit" className="navitem ButtonSerch">
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  )
}

export default Showcase
