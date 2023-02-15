import authGuard from "config/authguard";
import React from "react";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Input,
  FormGroup,
} from "reactstrap";

function IndexNavbar(props) {
  const { history } = props;
  const [navbarColor, setNavbarColor] = React.useState("navbar-custom-black");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-custom-black");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  const redirectToLogin = () => {
    history.push("/login-page");
  };
  const redirectToLogout = () => {
    localStorage.clear();
    history.push("/index");
  };
  const redirectToOffers = () => {
    history.push("/offers");
  };
  const redirectToHelp = () => {
    history.push("/help");
  };
  const redirectToHome = () => {
    history.push("/index");
  };
  const redirectToMyTickets = () => {
    history.push("/myTickets");
  };
  const redirectToMyProfile = () => {
    history.push("/myProfile");
  };
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand onClick={() => redirectToHome()} id="navbar-brand">
              TIcketCounty
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder="Search Events"
                    type="text"
                  ></Input>
                </FormGroup>
              </NavItem>
              {authGuard() ? (
                <NavItem>
                  <NavLink onClick={() => redirectToMyProfile()}>
                    <i className="now-ui-icons users_single-02"></i>
                    <p>My Profile</p>
                  </NavLink>
                </NavItem>
              ) : null}
              {authGuard() ? (
                <NavItem>
                  <NavLink onClick={() => redirectToMyTickets()}>
                    <i className="now-ui-icons location_bookmark"></i>
                    <p>My tickets</p>
                  </NavLink>
                </NavItem>
              ) : null}
              <NavItem>
                <NavLink
                  onClick={(e) => {
                    redirectToOffers();
                  }}
                >
                  <i className="now-ui-icons shopping_tag-content"></i>
                  <p>Offers</p>
                </NavLink>
              </NavItem>
              {!authGuard() ? (
                <NavItem>
                  <NavLink
                    onClick={(e) => {
                      redirectToLogin();
                    }}
                  >
                    <i className="now-ui-icons arrows-1_minimal-right"></i>
                    <p>Sign In</p>
                  </NavLink>
                </NavItem>
              ) : (
                <NavItem>
                  <NavLink
                    onClick={(e) => {
                      redirectToLogout();
                    }}
                  >
                    <i className="now-ui-icons media-1_button-power"></i>
                    <p>Logout</p>
                  </NavLink>
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
