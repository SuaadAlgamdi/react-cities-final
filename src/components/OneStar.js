import { useContext } from "react"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { toast } from "react-toastify"
import CitiesContext from "../utils/CitiesContext"


function OneStar(props) {
  const { fill, setFill, starNumber, placeId, setShow } = props
  const { addRating } = useContext(CitiesContext)
  return starNumber <= fill ? (
    <AiFillStar
      size="25"
      onMouseOver={() => setFill(starNumber)}
      style={{color:"gray"}}
      onClick={() => {
        if (localStorage.tokenCities) addRating(placeId, starNumber)
        else toast.error("please login first")
        setShow(false)
      }}
    />
  ) : (
    <AiOutlineStar size="25" onMouseOver={() => setFill(starNumber)} />
  )
}

export default OneStar
