import { Col, Container, Row, Card, Nav } from "react-bootstrap"
import CityList from "../components/CityList"
import Foter from "../components/Foter"
import PlaceList from "../components/PlaceList"

import Showcase from "../components/Showcase"
function Home() {
  return (
    <>
      <Container>
        <Showcase />
        <CityList listTitle="Discover Destinations" />
        <PlaceList listTitle="Restaurants To Visit" type="Restaurant" />
        <PlaceList listTitle="Museums To Visit" type="Museum" />
        <PlaceList listTitle="Events To Visit" type="Event" />
        <PlaceList listTitle="Mall To Visit" type="Mall" />
        <PlaceList listTitle="Tourist To Visit" type="TouristPlace" />
        <PlaceList listTitle="Hotel To Visit" type="Hotel" />
        

        {/* -------------------------foter--------- */}
        <Row></Row>
      </Container>
      <Foter />
    </>
  )
}

export default Home
