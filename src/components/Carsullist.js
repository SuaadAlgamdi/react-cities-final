import { Carousel } from "react-bootstrap"
import { useContext } from "react"
// import learn from "../Images/learn.png"
// import links from "../Images/links.png"
import { Link } from "react-router-dom"
function CarouselInfo(props) {
  const { places } = props

  return (
    <>
      <Carousel className="m-4">
        {" "}
        {places.map(place => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={place.logo}
              alt="First slide"
              style={{ opacity: 0.5, height: "500px" }}
            />
            <Carousel.Caption>
              <Link className="nav-link" to={`/${place.type}/${place._id}`}>
                {" "}
                <h3>{place.name}</h3>
              </Link>
              <p>{place.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
          /* <Carousel.Item>
      <img
        className="d-block w-100 "
        // src={learn}
        alt="Second slide"
        style={{opacity:0.5, height:"500px"}}
      />
      <Carousel.Caption>
       <Link  className="nav-link" to="/Learn" > <h3></h3></Link>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item >
      <img
        className="d-block w-100"
        // src={links}
        alt="Third slide"
        style={{opacity:0.5, height:"500px"}}
      />
      <Carousel.Caption>
       <Link className="nav-link"  to="/PlatForms" > <h3></h3></Link>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item> */
        ))}
      </Carousel>
    </>
  )
}
export default CarouselInfo
