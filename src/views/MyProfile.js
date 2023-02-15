import React, { useEffect, useState } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import { Button, Container, FormGroup, Input } from "reactstrap";
import axiosInstance from "config/https";
import { LoginModel } from "components/Models/LoginModel";

function MyProfile(props) {
  const [form,setForm] = useState(LoginModel);

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
  useEffect(() => {
    getUserProflie();
  }, []);

  const handleUpdate = () => {
    axiosInstance
      .post("user/update",form)
      .then((res) => {
        if (res.data.status === 200) {
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUserProflie = () => {
    axiosInstance
      .get("user/profile")
      .then((res) => {
        if (res.data.status === 200) {
          let resData = res.data.response;
          setForm(resData)
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setForm({
      ...form,
      [name]:value
    })
  }

  return (
    <>
      <IndexNavbar {...props} />
      <div className="wrapper">
        {/* <IndexHeader /> */}
        <div className="main">
          <Container className="custom-container">
            <h5 className="pt-4">My Profile</h5>
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <FormGroup>
                  <Input 
                  defaultValue="" 
                  placeholder="Name" 
                  type="text" 
                  name="name"
                  value={form.name}
                  onChange={handleChange}>

                  </Input>
                </FormGroup>
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder="Phone"
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder="Email"
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    disabled={true}
                  ></Input>
                </FormGroup>
                <Button
                  block
                  className="btn-round"
                  color="info"
                  onClick={handleUpdate}
                  size="lg"
                >
                  Update
                </Button>
              </div>
              <div className="col-md-4"></div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default MyProfile;
