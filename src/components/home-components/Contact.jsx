import React, { Component } from "react";
// Components
import ProviderCard from "./ProviderCard";
import SocialIcons from "./SocialIcons";

// FontAwesomeIcons
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faBehance,
  faYoutube,
  faVimeoV,
} from "@fortawesome/free-brands-svg-icons";

class Register extends Component {
  state = {
    provider: {
      id: 1,
      name: "Diko M",
      rating: "5.0",
      isVerified: true,
      profileImgae: "1.png",
      bgImages: ["bg1.png", "bg2.png"],
      services: ["Architect", "Muralist"],
    },
    icons: [
      { id: 1, icon: faFacebookF, url: "##" },
      { id: 2, icon: faTwitter, url: "##" },
      { id: 3, icon: faInstagram, url: "##" },
      { id: 4, icon: faLinkedinIn, url: "##" },
      { id: 5, icon: faBehance, url: "##" },
      { id: 6, icon: faYoutube, url: "##" },
      { id: 7, icon: faVimeoV, url: "##" },
    ],
  };
  render() {
    return (
      <section className="contact-section overflow-hidden">
        <div className="container">
          <div className="row no-gutters">
            {/* contact form */}
            <div className="form-wrapper order-2 order-lg-1 mb-5">
              <h2 className="section__title">
                Contact <br />
                <a href="##">
                  <u>info@inploy.me</u>
                </a>
              </h2>

              <form className="form">
                <p>For further assistance with projects or pre registration</p>
                <div className="mb-4">
                  <h6 className="font-weight-bold">
                    How would like us to contact you?
                  </h6>
                </div>
                <div className="mb-2">
                  <label className="custom-radio-btn align-items-center">
                    <input
                      type="radio"
                      name="contact-type"
                      value="call"
                      className="d-none"
                    />
                    <span className="label-value">Call</span>
                  </label>
                </div>

                <div className="mb-3">
                  <label className="custom-radio-btn align-items-center">
                    <input
                      type="radio"
                      name="contact-type"
                      value="email"
                      className="d-none"
                    />
                    <span className="label-value">Email</span>
                  </label>
                </div>

                <div className="mb-4 col-lg-9 p-0">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form__input"
                  />
                </div>

                <button className="btn btn--red form__btn px-5">Send</button>
              </form>
            </div>
            {/* end contact form */}

            {/* contact info wrapper */}
            <div className="contact-wrapper col order-1 order-lg-2 mb-5">
              <img
                src={require(`../../assets/images/contact-bg.png`).default}
                alt="contact bg"
                className="bg-image d-none d-xl-block"
              />
              <div className="d-flex flex-wrap flex-md-nowrap">
                {/* also we can add a condition to render the card if window.innerWidth >= 1200 */}
                <div className="d-none d-xl-block">
                  <ProviderCard provider={this.state.provider} />
                </div>
                <div className="col text-center px-0 pl-md-4">
                  {/* also we can add a condition to render the image if window.innerWidth >= 1200 */}
                  <img
                    src={
                      require(`../../assets/images/contact-icon.svg`).default
                    }
                    alt="contact img"
                    className="d-block m-auto"
                  />
                  <div className="contact-info rounded-pill text-white mt-5 mb-4 d-inline-flex flex-wrap justify-content-center align-items-center">
                    <a href="##">011-123-45678</a>
                    <span className="mx-2 icon  d-none d-lg-inline">|</span>
                    <a href="##"> Sohaila-Kandil@hotmail.com</a>
                    <span className="mx-2 icon  d-none d-lg-inline">
                      &#8249;
                    </span>
                  </div>
                    <br/>
                  <div className="social-icons-wrapper d-inline-block shadow rounded-pill px-2 py-1">
                    <SocialIcons icons={this.state.icons} />
                  </div>
                </div>
              </div>
            </div>
            {/* end  contact info wrapper */}
          </div>
        </div>
      </section>
    );
  }
}

export default Register;
