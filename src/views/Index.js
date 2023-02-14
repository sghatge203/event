import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import UpcomingEvents from "./index-sections/UpcomingEvents.js";
import Carousel from "./index-sections/Carousel.js";
import { Container } from "reactstrap";

function Index(props) {
  const {history} = props;
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

  const handleEventProfile = ()=>{
    history.push("/event-profile/1")
  }
  return (
    <>
      <IndexNavbar {...props} />
      <div className="wrapper">
        {/* <IndexHeader /> */}
        <div className="main">
          <Container className="custom-container">
            <div className="content-center brand"></div>
            <Carousel
             clickEvent={handleEventProfile}
            />
          </Container>
          <Container className="upcoming-event-section">
            <div className="content-center brand"></div>
            <UpcomingEvents />
          </Container>
        
          {/* <Images />
          <BasicElements />
          <Navbars />
          <Tabs />
          <Pagination />
          <Notifications />
          <Typography />
          <Javascript />
          <NucleoIcons />
          <CompleteExamples />
          <SignUp />
          <Examples />
          <Download /> */}
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
