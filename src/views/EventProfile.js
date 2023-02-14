import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import { Container } from "reactstrap";

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
          <Container className="custom-container">Event Profile</Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default EventProfile;
