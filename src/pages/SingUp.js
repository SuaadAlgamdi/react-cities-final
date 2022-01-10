import desirt from "../assets/desirt.jpg"
import { Alert, Col, Row } from "react-bootstrap"
import { useContext } from "react"
import CitiesContext from "../utils/CitiesContext"
function SignUp() {
  const { signUp, errorSignup } = useContext(CitiesContext)
  return (
    <>
      <img className="backsignup" styles={{ backgroundImage: `url(${desirt})` }} />

      <div className="signup-contaner" >
        <form onSubmit={signUp}>
          <img alt="" className="wave" />

          <div className="input-div">
            <h5>First Name</h5>
            <input type="text" name="firstName" class="input" required />
          </div>
          <div className="input-div">
            <h5>Last Name</h5>
            <input type="text" name="lastName" class="input" required />
          </div>

          <div className="input-div">
            <h5>Avatar:</h5>
            <input type="url" name="avatar" class="input" required />
          </div>

          <div className="input-div">
            <h5>Email</h5>
            <input type="email" name="email" class="input" required />
          </div>

          <div className="input-div">
            <h5>Password</h5>
            <input type="password" name="password" class="input" required />
          </div>
          <Row>
            <Col md="10">{errorSignup !== null ? <Alert variant="danger">{errorSignup}</Alert> : null}</Col>
          </Row>
          <button type="button" type="submit" class="btn btn-success">
            Sign Up
          </button>
        </form>
      </div>
     
    </>
  )
}

export default SignUp
