import { CommentsDisabled } from "@mui/icons-material"
import { useContext } from "react"
import { Button, Card, Carousel, Col, Image, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import AddComment from "../components/AddComments"
import RatingStars from "../components/RatingStars"
import CitiesContext from "../utils/CitiesContext"

function OnePlace() {
  const { restaurantId, museumId, eventId, hotelId, mallId, touristPlaceId } = useParams()
  const { restaurants, museums, malls, events, hotels, touristPlaces, profile, deleteComment } =
    useContext(CitiesContext)

  // if (
  //   restaurants?.length === 0 &&
  //   museums?.length === 0 &&
  //   hotels?.length === 0 &&
  //   malls?.length === 0 &&
  //   events?.length === 0 &&
  //   touristPlaces?.length === 0
  // )
  //   return <h1>Loading...</h1>
  let place
  if (restaurantId) place = restaurants.find(restaurant => restaurant._id === restaurantId)
  else if (museumId) place = museums.find(museum => museum._id === museumId)
  else if (eventId) place = events.find(event => event._id === eventId)
  else if (mallId) place = malls.find(mall => mall._id === mallId)
  else if (touristPlaceId) place = touristPlaces.find(touristPlace => touristPlace._id === touristPlaceId)
  else if (hotelId) place = hotels.find(hotel => hotel._id === hotelId)
  console.log(place)

  if (!place) return <h1>Loading...</h1>
  return (
    <>
      <div>
        <Row
          style={{
            backgroundImage: `linear-gradient(rgba(2,25,160, 0.5), rgba(255,255,255, 0.3)),  url("${place.logo}")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
            color: "white",
            minHeight: 400,
          }}
        >
          <Col md="5">
            <img variant="top" src={place.logo} width="100%" style={{ borderRadius: "10px", margin: "20px" }} />
          </Col>
          <Col md={{ offset: 1 }}>
            <h1>{place.name}</h1> <h3>{place.description}</h3>
            <h5> {place.location}</h5>
          </Col>
        </Row>
        <Row>
          <Col md="8" className="mx-auto">
            <Carousel className="m-4">
              {place.photos?.map(photo => (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={photo}
                    alt="First slide"
                    style={{ width: "100px", height: "500px", objectFit: "cover" }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          {/*    -----------------------------------------reting--------------------- */}

          <Col className="d-flex flex-column align-items-center justify-content-center" style={{ color: "gray" }}>
            <h3>Rating</h3>
            <Row>
              <Col>
                <Col>
                  <span>{place.ratingAvarage.toFixed(1)} / 5</span>
                  <span className="ms-2">({place.ratings.length})</span>
                </Col>
                <Col className="mt-3">
                  <RatingStars placeId={place._id} />
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mt-5">
          <h3>Products</h3>
          {/* -------------------------------------------------هنا عرضت البرودكت داخل البليس-------------------------- */}
          {place.products?.map(product => (
            <>
              {/* <p>{product.photo}</p> */}

              <Col md="3" mx="77px">
                <Card border="light" style={{ maxWidth: "200px" }}>
                  <Card.Title>{product.name}</Card.Title>
                  <br />
                  <Card.Img
                    variant="top"
                    src={product.photo}
                    height="220px"
                    style={{ borderRadius: "33px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Text> {product.description}</Card.Text>
                    <Card.Text> {product.price} SAR</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </>
          ))}
        </Row>

        {/* ----------------------------------------comments----------------------- */}
        <Row>
          <h3>Comments</h3>
          {place.comments.map(comment => (
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
                  <Col md="10">{comment.comment}</Col>
                  {profile?._id == comment.owner._id ? (
                    <Col>
                      <Button variant="danger" onClick={() => deleteComment(place._id, comment._id)}>
                        delete
                      </Button>
                    </Col>
                  ) : null}
                </Row>
              </Row>
            </Card>
          ))}
        </Row>
        <Row>
          <AddComment placeId={place._id} />
        </Row>
      </div>
    </>
  )
}

export default OnePlace
