import { CommentsDisabled } from "@mui/icons-material"
import { color } from "@mui/system"
import { useContext } from "react"
import { Button, Card, Carousel, Col, Image, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import AddComment from "../components/AddComments"
import RatingStars from "../components/RatingStars"
import CitiesContext from "../utils/CitiesContext"

function OnePlace() {
  const { restaurantId, museumId, eventId, hotelId, mallId, touristPlaceId, placeId } = useParams()
  const { restaurants, museums, malls, events, hotels, touristPlaces, profile, deleteComment, places } =
    useContext(CitiesContext)

  if (places.length === 0) return <h1>Loading...</h1>

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
  else if (placeId) place = places.find(place => place._id === placeId)

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
            <img variant="top" src={place.video} width="100%" style={{ borderRadius: "10px", margin: "20px" }} />
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
                    style={{ width: "100%", height: "500px", objectFit: "cover" }}
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

        <Row>
          <Col md="4" className="mx-auto">
            <h3 className="textProduct">Products</h3>
          </Col>
          <Row className="mt-5">
            <Row style={{ marginLeft: 20 }}>
              {/* --------------------------------product-----------------هنا عرضت البرودكت داخل البليس-------------------------- */}
              {place.products?.map(product => (
                <>
                  {/* <p>{product.photo}</p> */}

                  <Col md="3" mx="727px">
                    <Card border="light" style={{ maxWidth: "1480px" }}>
                      <Card.Title style={{ fontSize: "30px" }}>{product.name}</Card.Title>
                      <br />
                      <Card.Img
                        variant="top"
                        src={product.photo}
                        height="220px"
                        style={{ borderRadius: "33px", objectFit: "contain " }}
                      />
                      <Card.Body>
                        <Card.Text> {product.description}</Card.Text>

                        {museumId || mallId || eventId ||touristPlaceId ?  null : <Card.Text> {product.price} SAR</Card.Text>}
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              ))}
            </Row>
          </Row>
        </Row>

        {/* ----------------------------------------comments--------------------- */}
        <Row>
          <Col md="10" className="mx-auto">
            <h1 className="textComment2" >
              Comments
            </h1>
          </Col>
          {place.comments.map(comment => (
            <Card style={{ marginLeft: 250, maxWidth: 1100, marginTop: 30, marginBottom: 20 }}>
              <Row>
                <Row style={{ display: "flex", alignItems: "center" }}>
                  <Col md="1">
                    <Image src={comment.owner?.avatar} width="80px" roundedCircle />
                  </Col>
                  <Col>
                    {comment.owner?.firstName} {comment.owner?.lastName}
                  </Col>
                </Row>
                <Row>
                  <Col md="10" style={{ marginTop: 30, fontSize: "25px" }}>
                    {comment.comment}
                  </Col>
                  {profile?._id == comment.owner._id ? (
                    <Col>
                      <Button
                        className="ButtonSerchDeletComment"
                        style={{ marginBottom: 50 }}
                        variant="danger"
                        onClick={() => deleteComment(place._id, comment._id)}
                      >
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
