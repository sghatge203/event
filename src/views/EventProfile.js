import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import { Container } from "reactstrap";
import img4 from "../assets/images/show.jpg";

function EventProfile(props) {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar {...props} />
      <div className="wrapper">
        {/* <IndexHeader /> */}
        <div className="main">
          <Container className="custom-container">
            <h5 className="pt-4">Event Profile</h5>
            <div className="row">
              <div className="col-md-2">
                <div className="upcoming-box">
                  <img src={img4} alt="bassi" className="image-event" />
                </div>
              </div>

              <div className="col-md-4"></div>
              <div className="col-md-4"></div>
            </div>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default EventProfile;
