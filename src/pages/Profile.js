import { useContext } from "react"
import { Col, Row, Container, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import CityItem from "../components/CityItem"
import CityList from "../components/CityList"
import CitiesContext from "../utils/CitiesContext"

function Profile() {
  const { profile } = useContext(CitiesContext)
  if (!profile) return <h1>Loading...</h1>

  console.log(profile)

  return (
    <>
      <Container style={{ backgroundColor: "lavender", margin: "80px" }}>
        <Row
          style={{
            backgroundColor: ` gray`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Col md="4">
            <img
              variant="top"
              src={profile.avatar}
              width="100%"
              style={{ borderRadius: "10px", margin: "20px", backgroundSize: "cover" }}
            />
          </Col>
          <Col>
            <h1>
              {profile.firstName} {profile.lastName}
            </h1>

            <p>{profile.email}</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h1 style={{ margin: "25px" }}>Favourite Cities</h1>
            {profile.likes.map(city => (
              <CityItem city={city} />
              // <Col key={city._id}>
              //   <Card border="light" style={{ maxWidth: "200px" }}>
              //     <Link to={`/city/${city._id}`}>
              //       <Card.Img variant="top" src={city.photo} height="220px" style={{ borderRadius: "10px" }} />
              //     </Link>
              //     <Card.Body>
              //       <Link to={`/city/${city._id}`} className="text-black" style={{ textDecoration: "none" }}>
              //         <Card.Title>{city.name}</Card.Title>
              //       </Link>
              //       <Card.Text className="text-muted">{city.description}</Card.Text>
              //     </Card.Body>
              //   </Card>
              // </Col>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Profile
