import { useContext } from "react"

import { Alert, Col, Row } from "react-bootstrap"
import CitiesContext from "../utils/CitiesContext"

function LogIn() {
  const { login, errorLogin } = useContext(CitiesContext)
  return (
    <>
      <img className="backsignup" />

      <div className="signup-contaner">
        <form  onSubmit={login}>
          <img alt="" className="wave" />
           <h2 style={{color:"white",fontSize:"30px", fontWeight:"800"}} >Login</h2>
          <div className="input-div">
            <h5 style={{color:"white",fontSize:"30px", fontWeight:"800"}} >Email</h5>
            <input type="email" name="email" class="input" required placeholder="Email" />
          </div>

          <div className="input-div">
            <h5 style={{color:"white",fontSize:"30px", fontWeight:"800"}} >Password</h5>
            <input type="password" name="password" class="input" required  placeholder="Password"/>
          </div>
          <Row>
            {/* <Col md="10">{errorLogin !== null ? <Alert variant="danger">{errorLogin}</Alert> : null}</Col> */}
          </Row>
          <button type="button" type="submit" style={{padding:"5px 40px", backgroundColor:"rgb(209, 97, 103)",border:"none" ,marginBottom:"20px"}} class="btn btn-success">
            Login
          </button>
        </form>
      </div>
    </>
  )
}

export default LogIn
