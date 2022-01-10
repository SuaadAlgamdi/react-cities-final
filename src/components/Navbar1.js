import { useContext } from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import CitiesContext from "../utils/CitiesContext"

function NavbarItem() {
  const { logout } = useContext(CitiesContext)
  return (
    <>
      <Navbar bg="" expand="lg" className="Navbarcss" style={{ borderBbottomStyle: "double", margin: "15px 45px" }}>
        <Link to="/" className="navbar-brand d-flex align-items-center mx-auto" style={{ width: 150 }}>
          <img
            src="https://files.muzli.space/a3579807d6d0b99b8c9c34e63c7e7fb5.jpeg"
            width="80"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <Nav
            className="navitem
            nav-link"
            to="/cities"
            className="  
            navitem navbar-brand d-flex align-items-center mx-auto"
            width="10"
            style={{
              color: "rgb(178, 178, 190)",
              border: "1px solid rgb(178, 178, 190)",
              borderRadius: 6,
              animation: "forwards",
            }}
          >
            {" "}
            City
          </Nav>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navitem me-auto">
            <a
              className="nav-link"
              href="https://mt.gov.sa/Pages/default.aspx"
              target="_blank"
              style={{ color: "rgb(178, 178, 190)", border: "1px solid rgb(178, 178, 190)", borderRadius: 6 }}
            >
              Ministry Of Tourism
            </a>
          </Nav>
          {localStorage.tokenCities ? (
            <Nav className="navitem ms-auto">
              <Link
                className="nav-link"
                to="/profile"
                style={{
                  color: "rgb(178, 178, 190)",
                  marginRight: 20,
                  border: "1px solid rgb(178, 178, 190)",
                  borderRadius: 6,
                }}
              >
                Profile
              </Link>
              <Link
                className="navitem nav-link"
                to="/"
                onClick={logout}
                style={{ color: "rgb(178, 178, 190)", border: "1px solid rgb(178, 178, 190)", borderRadius: 6 }}
              >
                Logout
              </Link>
            </Nav>
          ) : (
            <Nav className="navitem ms-auto">
              <Link
                className="nav-link"
                to="/login"
                style={{
                  color: "rgb(178, 178, 190)",
                  marginRight: 20,
                  border: "1px solid rgb(178, 178, 190)",
                  borderRadius: 6,
                }}
              >
                Login
              </Link>
              <Link
                className="nav-link"
                to="/signup"
                style={{ color: "rgb(178, 178, 190)", border: "1px solid rgb(178, 178, 190)", borderRadius: 6 }}
              >
                Sign Up
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavbarItem
