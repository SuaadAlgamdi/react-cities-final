import { Col, Nav, Row } from "react-bootstrap"
import { BsTwitter, BsInstagram } from "react-icons/bs"
import { AiFillYoutube, AiTwotoneHome } from "react-icons/ai"
import { margin } from "@mui/system"

function Foter() {
  return (
    <>
      {" "}
      <Row className="mt-4" style={{ height: "200px", backgroundColor: "rgb(139, 163, 139)", color: "wheat" }}>
        {/* <Col className="mx-2" className="footer"> </Col> */}
        <Row md={6} style={{ display: "flex", marginLeft:"305px", padding:"auto", alignItems:"center" }}>
          <Col >
            
            <Nav.Item>
              <Nav.Link href="/" style={{ textDecoration: "none", color: "white" }}>
                Home
                <AiTwotoneHome />
              </Nav.Link>
            </Nav.Item>
          </Col>
          <Col >
            <Nav.Item>
              <Nav.Link href="/profile" style={{ textDecoration: "none", color: "white" }}>
                
                Profile
              </Nav.Link>
            </Nav.Item>
          </Col>
          <Col >
            <Nav.Item>
              <Nav.Link href="login" style={{ textDecoration: "none", color: "white" }}>
                
                login
              </Nav.Link>
            </Nav.Item>
          </Col>
          <Col >
            <Nav.Item>
              <Nav.Link href="/signup" style={{ textDecoration: "none", color: "white" }}>
                
                SignUp
              </Nav.Link>
            </Nav.Item>
          </Col>
        </Row>

        <Row>
          <Col className="md-8">
            <h3 style={{ marginLeft: "650px", fontFamily: "Georgia" }}>Contact Us</h3>
          </Col>
        </Row>
        <Row md={4} style={{ display: "flex", marginLeft: "530px", gap:"100px" }}>
          <Col  style={{ width: "20px" }}>
            <Nav.Item >
              <Nav.Link
                href="https://mobile.twitter.com/AlgamdiSuuad"
                style={{ textDecoration: "none", color: "white" }}
              >
                Twitter <BsTwitter />
              </Nav.Link>
            </Nav.Item>
          </Col>
          <Col  style={{ width: "20px" }}>
            <Nav.Item >
              <Nav.Link href="https://www.youtube.com/c/SaudiMT" style={{ textDecoration: "none", color: "white" }}>
                YouTube
                <AiFillYoutube />
              </Nav.Link>
            </Nav.Item>
          </Col>

          <Col  style={{ width: "20px" }}>
            <Nav.Item >
              <Nav.Link href="https://www.instagram.com/saudi.mt/" style={{ textDecoration: "none", color: "white" }}>
                Instagram
                <BsInstagram />
              </Nav.Link>
            </Nav.Item>
          </Col>
        </Row>
      </Row>
    </>
  )
}

export default Foter

//     <Container class="footer">
//       <div class="wrapper">

//          <div class="icon twitter">
//             <div class="tooltip">
//                Twitter
//             </div>
//             <span><i class="fab fa-twitter "> </i></span>
//          </div>
//          <div class="icon instagram">
//             <div class="tooltip">
//                Instagram
//             </div>
//             <span><i class="fab fa-instagram"></i></span>
//          </div>

//          <div class="icon youtube">
//             <div class="tooltip">
//                YouTube
//             </div>
//             <span><i class="fab fa-youtube"> </i></span>
//          </div>
//       </div>
//       </Container>

//     </> );
// }
