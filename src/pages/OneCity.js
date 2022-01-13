import { Restaurant } from "@mui/icons-material"
import { useContext, useEffect, useState } from "react"
import { Button, Card, Col, Image, Row } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import CitiesContext from "../utils/CitiesContext"
import { MdFavorite, MdOutlineFavoriteBorder, MdOutlineNightlight } from "react-icons/md"
import Carsullist from "../components/Carsullist"
import {
  BsSun,
  BsCloudSun,
  BsCloudSunFill,
  BsClouds,
  BsCloudHail,
  BsCloudLightningRain,
  BsThermometerSnow,
  BsFillCloudHaze2Fill,
  BsCloudMinus,
  BsCloudDrizzle,
} from "react-icons/bs"

import { AiTwotoneCloud } from "react-icons/ai"
import { RiMistLine } from "react-icons/ri"

import axios from "axios"
import { WiNightCloudy, WiNightAltSnowThunderstorm } from "react-icons/wi"
function OneCity() {
  const { cityId } = useParams()
  const { cities, likeCity, profile } = useContext(CitiesContext)
  const [city, setCity] = useState(null)
  const [cityWither, setCityWither] = useState(null)

  const GetWeather = async () => {
    let cityLat = city.lat
    let cityLong = city.long

    console.log(cityLat)
    console.log(cityLong)

    const response = await axios.get(
      "http://api.openweathermap.org/data/2.5/weather?lat=" +
        cityLat +
        "&lon=" +
        cityLong +
        "&appid=087f039cbb00ac0f449ea634557c6881&units=metric&lang=ar"
     )            

    //  2e893f791d8153ce8cfe9e231cb63066
    setCityWither(response.data)
  }
  useEffect(() => {
    setCity(cities.find(city => city._id === cityId))
  }, [cities])

  useEffect(() => {
    if (city) GetWeather()
  }, [city])

  if (cities.length === 0) return <h1>Loading...</h1>

  if (!city) return <h1>Loading...</h1>

  console.log(city)
  let liked = false
  if (profile) liked = city.likes.includes(profile._id)

  console.log(cityWither?.main.temp.toFixed(1))

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
        {/* ------------------------------------wether  */}
        <Col>
          <Card className="text-center" style={{ backgroundColor: "cornsilk" ,marginRight:"32px" }}>
            {/* <Card.Header style={{ color: "black" }}>{city.name}</Card.Header> */}
            <Card.Body style={{ backgroundColor: "cornsilk", width: "350px", height: "150px" ,marginRight:"22px"}}>
              <Row>
                <Col>
                  <Card.Title style={{ color: "black" }}>{city.name}</Card.Title>
                  <Card.Text style={{ color: "black" }}>{cityWither?.main.temp.toFixed(1)} ° </Card.Text>
                  <Card.Text style={{ color: "black" }}>min {cityWither?.main.temp_min.toFixed(1)}° </Card.Text>
                  <Card.Text style={{ color: "black" }}> max {cityWither?.main.temp_max.toFixed(1)}° </Card.Text>
                </Col>
                <Col>
                  {cityWither?.weather[0].icon == "01d" ? (
                    <BsSun style={{ color: " rgb(134, 126, 9)", fontSize: 50,fontWeight:800  }} />
                  ) : cityWither?.weather[0].icon == "02d" ? (
                    <BsCloudSun style={{ color: "black", fontSize: 50 }} />
                  ) : cityWither?.weather[0].icon == "01n" ? (
                    <MdOutlineNightlight style={{ color: "black", fontSize: 50 }} />
                  ) : cityWither?.weather[0].icon == "03d" ? (
                    <BsCloudSunFill style={{ color: "black", fontSize: 50 }} />
                  ) : cityWither?.weather[0].icon == "04d" ? (
                    <BsClouds style={{ color: "black", fontSize: 50 }} />
                  ) : cityWither?.weather[0].icon == "09d" ? (
                    <BsCloudHail style={{ color: "black", fontSize: 50 }} />
                  ) : cityWither?.weather[0].icon == "10d" ? (
                    <BsCloudLightningRain style={{ color: "black", fontSize: 50 }} />
                  ) : cityWither?.weather[0].icon == "11d" ? (
                    <BsCloudLightningRain style={{ color: "black", fontSize: 50 }} />
                  ) : cityWither?.weather[0].icon == "13d" ? (
                    <BsThermometerSnow style={{ color: "black", fontSize: 50 }} />
                  ) : cityWither?.weather[0].icon == "05d" ? (
                    <BsFillCloudHaze2Fill style={{ color: "black", fontSize: 50 }} />
                  ) : cityWither?.weather[0].icon == "02n" ? (
                    <WiNightCloudy style={{ color: "black", fontSize: 50 }} />
                  ) : cityWither?.weather[0].icon == "03n" ? (
                    <AiTwotoneCloud style={{ color: "black", fontSize: 50 }} />
                  ) : cityWither?.weather[0].icon == "04n" ? (
                    <BsCloudMinus style={{ color: "black", fontSize: 50 }} />
                  ) : cityWither?.weather[0].icon == "09n" ? (
                    <BsCloudDrizzle style={{ color: "black", fontSize: 50 }} />
                  ) : cityWither?.weather[0].icon == "10n" ? (
                    <BsCloudLightningRain />
                  ) : cityWither?.weather[0].icon == "11n" ? (
                    <WiNightAltSnowThunderstorm style={{ color: "black", fontSize: 50 }} />
                  ) : cityWither?.weather[0].icon == "13n" ? (
                    <BsThermometerSnow style={{ color: "black", fontSize: 50 }} />
                  ) : cityWither?.weather[0].icon == "50n" ? (
                    <RiMistLine />
                  ) : null}
                  <Card.Text style={{ color: "black" }}>{cityWither?.weather[0].description}</Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
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
