import { useContext } from "react"

import { Alert, Col, Row } from "react-bootstrap"
import CitiesContext from "../utils/CitiesContext"

function LogIn() {
  const { login, errorLogin } = useContext(CitiesContext)
  return (
    <>
      <img className="backsignup" />

      <div className="signup-contaner">
        <form onSubmit={login}>
          <img alt="" className="wave" />

          <div className="input-div">
            <h5>Email</h5>
            <input type="email" name="email" class="input" required />
          </div>

          <div className="input-div">
            <h5>Password</h5>
            <input type="password" name="password" class="input" required />
          </div>
          <Row>
            <Col md="10">{errorLogin !== null ? <Alert variant="danger">{errorLogin}</Alert> : null}</Col>
          </Row>
          <button type="button" type="submit" class="btn btn-success">
            Login
          </button>
        </form>
      </div>
    </>
  )
}

export default LogIn
