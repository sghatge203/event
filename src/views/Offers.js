import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import { Container } from "reactstrap";
import offer from "../assets/images/offer.jpg";
function Offers(props) {
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

  var array = [
    {
      img: offer,
      name: "Offer1",
    },
    {
      img: offer,
      name: "Offer1",
    },
    {
      img: offer,
      name: "Offer1",
    },
    {
      img: offer,
      name: "Offer1",
    },
    {
      img: offer,
      name: "Offer1",
    },
    {
      img: offer,
      name: "Offer1",
    },
  ];
  return (
    <>
      <IndexNavbar {...props} />
      <div className="wrapper">
        {/* <IndexHeader /> */}
        <div className="main">
          <Container className="custom-container pb-4">
            <h5 className="pt-4">Current Offers</h5>
            <div className="row">
              {array.map((item, index) => {
                return (
                  <div className="col-md-4 p-2" key={index}>
                    <img src={item.img} alt={item.name} />
                  </div>
                );
              })}
            </div>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Offers;
