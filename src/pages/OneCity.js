import { Restaurant } from "@mui/icons-material"
import { useContext } from "react"
import { Button, Card, Col, Image, Row } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import CitiesContext from "../utils/CitiesContext"
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md"
import Carsullist from "../components/Carsullist"

function OneCity() {
  const { cityId } = useParams()
  const { cities, likeCity, profile } = useContext(CitiesContext)

  if (cities.length === 0) return <h1>Loading...</h1>

  const city = cities.find(city => city._id === cityId)
  if (!city) return <h1>Loading...</h1>

  console.log(profile)
  let liked = false
  if (profile) liked = city.likes.includes(profile._id)

  return (
    <>
      <Row
        style={{
          backgroundImage: `linear-gradient(rgba(2,25,160, 0.5), rgba(255,255,255, 0.3)),  url("${city.photo}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          color: "white",
        }}
      >
        <Col md="4">
          <img variant="top" src={city.photo} width="100%" style={{ borderRadius: "10px", margin: "20px" }} />
        </Col>
        <Col md={{ offset: 1 }}>
          <h1>{city.name}</h1>
          <h3>Overview</h3>
          <p>{city.description}</p>{" "}
          <Button variant="dark" className="ms-3" onClick={() => likeCity(city._id)}>
            {liked ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
          </Button>
        </Col>
      </Row>
      <Row className="mt-5"></Row>
      <Row className="mx-2" md="2">
        {city.restaurants.length > 0 ? (
          <Col className="mt-5">
            <h3 className="titleOfPlace" style={{ alignItems: "center" }}>
              Restaurants
            </h3>

            <Link to={`/city/${cityId}/Restaurant`}>
              <Card.Img
                variant="top"
                src={`https://media.istockphoto.com/photos/empty-restaurant-interior-picture-id1290237592?b=1&k=20&m=1290237592&s=170667a&w=0&h=fgXWrrQ7qWpbiO8O_dpEVlS4JsTZYH8e3FoZ4UeoQH8=`}
                height="220px"
                style={{ borderRadius: "10px", objectFit: "cover" }}
              />
            </Link>
          </Col>
        ) : null}
        {city.museums.length > 0 ? (
          <Col className="mt-5">
            {" "}
            <h3>Museums</h3>
            <Link to={`/city/${cityId}/Museum`}>
              <Card.Img
                variant="top"
                src={city.museums[0]?.logo}
                height="220px"
                style={{ borderRadius: "10px", objectFit: "cover" }}
              />
            </Link>
          </Col>
        ) : null}
        {city.events.length > 0 ? (
          <Col className="mt-5">
            {" "}
            <h3>Events</h3>
            <Link to={`/city/${cityId}/Event`}>
              <Card.Img
                variant="top"
                src={city.events[0]?.logo}
                height="220px"
                style={{ borderRadius: "10px", objectFit: "cover" }}
              />
            </Link>
          </Col>
        ) : null}

        {city.hotels.length > 0 ? (
          <Col className="mt-5">
            {" "}
            <h3>Hotels</h3>
            <Link to={`/city/${cityId}/Hotel`}>
              <Card.Img
                variant="top"
                src={city.hotels[0]?.logo}
                height="220px"
                style={{ borderRadius: "10px", objectFit: "cover" }}
              />
            </Link>
          </Col>
        ) : null}
        {city.touristPlaces.length > 0 ? (
          <Col className="mt-5">
            <h3> TouristPlaces</h3>
            <Link to={`/city/${cityId}/TouristPlace`}>
              <Card.Img
                variant="top"
                src={city.touristPlaces[0]?.logo}
                height="220px"
                style={{ borderRadius: "10px", objectFit: "cover" }}
              />
            </Link>
          </Col>
        ) : null}
      </Row>

      <Row className="mt-5"></Row>

      {localStorage.tokenCitys ? (
        <>
          <Row className="mt-5">
            <h3>Comments</h3>

            {city.comments.map(comment => (
              <Card style={{ margin: 20, maxWidth: 1100 }}>
                <Row>
                  <Row style={{ display: "flex", alignItems: "center" }}>
                    <Col md="1">
                      <Image src={comment.owner.avatar} width="80px" roundedCircle />
                    </Col>
                    <Col>
                      {comment.owner.firstName} {comment.owner.lastName}
                    </Col>
                  </Row>
                  <Row>
                    <Col md={{ offset: 1 }}>{comment.comment}</Col>
                  </Row>
                </Row>
              </Card>
            ))}
          </Row>
        </>
      ) : null}
    </>
  )
}

export default OneCity
