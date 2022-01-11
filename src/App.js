import Navbar from "./components/Navbar1"
import Home from "./pages/Home"
import "./App.css"
import Showcase from "./components/Showcase"
import { toast, ToastContainer } from "react-toastify"
import { Route, Routes, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import CitiesContext from "./utils/CitiesContext"
import OneCity from "./pages/OneCity"
import OnePlace from "./pages/OnePlace"
import SingUp from "./pages/SingUp"
import LogIn from "./pages/LogIn"
import Profile from "./pages/Profile"
import RestaurantList from "./pages/RestaurantList"
import MuseumsList from "./pages/MuseumsList"
import EventsList from "./pages/EventsList"
import HotalsList from "./pages/HotalsList"
import TouristPlaceList from "./pages/TouristPlacesList"
import Carsullist from "./components/Carsullist"

function App() {
  const [cities, setCities] = useState([])
  const [places, setPlaces] = useState([])
  const [restaurants, setRestaurants] = useState([])
  const [events, setEvents] = useState([])
  const [hotels, setHotels] = useState([])
  const [museums, setMuseums] = useState([])
  const [touristPlaces, setTouristPlaces] = useState([])
  const [malls, setMalls] = useState([])
  const [profile, setProfile] = useState(null)
  const navigate = useNavigate()

  const getCities = async () => {
    const response = await axios.get("http://localhost:5000/api/cities")
    setCities(response.data)
    console.log(response.data)
  }

  const getPlaces = async () => {
    const response = await axios.get("http://localhost:5000/api/places")
    setPlaces(response.data)
    setRestaurants(response.data.filter(place => place.type === "Restaurant"))
    setEvents(response.data.filter(place => place.type === "Event"))
    setMuseums(response.data.filter(place => place.type === "Museum"))
    setHotels(response.data.filter(place => place.type === "Hotel"))
    setTouristPlaces(response.data.filter(place => place.type === "TouristPlace"))
    setMalls(response.data.filter(place => place.type === "Mall"))
  }
  ///---------------------------------------------------------------------------signUp------------
  const signUp = async e => {
    e.preventDefault()

    try {
      const form = e.target
      const uesrBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }
      await axios.post("http://localhost:5000/api/auth/singup", uesrBody)
      toast.success("signup success")
      navigate("/login")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      console.log(error.response)
    }
  }
  //----------------------------------------------------logIn---------------------//
  const login = async e => {
    e.preventDefault()

    try {
      const form = e.target

      const uesrBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:5000/api/auth/login", uesrBody)
      const token = response.data

      localStorage.tokenCities = token

      toast.success("logIn success")
      navigate("/")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      console.log(error.response)
    }
  }

  const logout = () => {
    localStorage.removeItem("tokenCities")
    toast.success("logout succss")
  }
  // ------------------------------------------profile-----------------------------------------

  const getProfile = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/profile", {
      headers: {
        Authorization: localStorage.tokenCities,
      },
    })
    setProfile(response.data)

    console.log(response)
  }

  // ---------------------------------------addcomment----------------------------

  const addComment = async (e, placeId) => {
    e.preventDefault()
    try {
      const form = e.target
      const commentBody = {
        comment: form.elements.comment.value,
      }

      form.reset()
      await axios.post(`http://localhost:5000/api/places/${placeId}/comments`, commentBody, {
        headers: {
          Authorization: localStorage.tokenCities,
        },
      })
      getPlaces()
      toast.success("Comment added")
    } catch (error) {
      if (error.response) toast.error("you have to logIn")
      else console.log(error)
    }
  }
  //---------------------------------------------delete Comment--------------------------
  const deleteComment = async (placeId, commentId) => {
    console.log(placeId)
    await axios.delete(`http://localhost:5000/api/places/${placeId}/comments/${commentId}`, {
      headers: {
        Authorization: localStorage.tokenCities,
      },
    })

    getPlaces()
    toast.success("Comment Deleted")
  }
  // ------------------------------------------likes---------------------------

  const likeCity = async cityId => {
    try {
      const response = await axios.get(`http://localhost:5000/api/cities/${cityId}/likes`, {
        headers: {
          Authorization: localStorage.tokenCities,
        },
      })

      getCities()
      getProfile()
      toast.success(response.data)
    } catch (error) {
      if (error.response) toast.error("you have to logIn")
      else console.log(error)
    }
  }
  // --------------------------------------------------------search---------
  const citySearch = e => {
    e.preventDefault()
    const form = e.target
    const searchText = form.elements.citySearch.value
    const cityFound = cities.find(city => city.name === searchText)
    const placeFound = places.find(place => place.name === searchText)

    if (cityFound) return navigate(`/city/${cityFound._id}`)
    else if (placeFound) return navigate(`/place/${placeFound._id}`)
    // console.log(placeFound)
    toast.error("not found")
  } 

  

  // ------------------------------------add reting--------------------

  const addRating = async (placeId, rating) => {
    try {
      const ratingBody = {
        rating,
      }
      await axios.post(`http://localhost:5000/api/places/${placeId}/ratings`, ratingBody, {
        headers: {
          Authorization: localStorage.tokenCities,
        },
      })
      getCities()
      getPlaces()
      toast.success("Your rate is added")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  useEffect(() => {
    getCities()
    getPlaces()
    if (localStorage.tokenCities) getProfile()
  }, [])

  const store = {
    cities,
    places,
    restaurants,
    museums,
    hotels,
    events,
    malls,
    touristPlaces,
    signUp,
    login,
    logout,
    profile,
    addComment,
    deleteComment,
    likeCity,
    citySearch,
    
    addRating,
  }

  return (
    <CitiesContext.Provider value={store}>
      <ToastContainer />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:cityId" element={<OneCity />} />
        <Route path="/place/:placeId" element={<OnePlace />} />
        <Route path="/city/:cityId/Restaurant" element={<RestaurantList />} />
        <Route path="/city/:cityId/Event" element={<EventsList />} />
        <Route path="/city/:cityId/Museum" element={<MuseumsList />} />
        <Route path="/city/:cityId/Hotel" element={<HotalsList />} />
        <Route path="/city/:cityId/TouristPlace" element={<TouristPlaceList />} />
        <Route path="/Restaurant/:restaurantId/" element={<OnePlace />} />
        <Route path="/Event/:eventId/" element={<OnePlace />} />
        <Route path="/Hotel/:hotelId/" element={<OnePlace />} />
        <Route path="/TouristPlace/:touristPlaceId/" element={<OnePlace />} />
        <Route path="/Museum/:museumId/" element={<OnePlace />} />
        <Route path="/Mall/:mallId/" element={<OnePlace />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </CitiesContext.Provider>
  )
}

export default App
