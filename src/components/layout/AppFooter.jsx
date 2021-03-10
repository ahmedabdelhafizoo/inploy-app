import React, { Component } from "react";

// Components
import SocialIcons from "../home-components/SocialIcons";

// FontAwesomeIcons
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

class AppFooter extends Component {
  state = {
    icons: [
      { id: 1, icon: faFacebookF, url: "##" },
      { id: 2, icon: faInstagram, url: "##" },
      { id: 3, icon: faLinkedinIn, url: "##" },
      { id: 4, icon: faTwitter, url: "##" },
    ],
    footerLinks: [
      { id: 1, name: "SUPPORT", url: "##" },
      { id: 2, name: "UNDERSTAND", url: "##" },
      { id: 3, name: "TERMS & REGULATIONS", url: "##" },
    ],
  };
  render() {
    return (
      <footer className="footer pt-4 pb-2 pb-md-4">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-between">
            <div className="col-sm-6 p-0 pb-2 text-center text-sm-left">
              <img
                src={require("../../assets/images/logo.svg").default}
                alt="logo images"
                className="footer__logo"
              />
            </div>

            <div className="pb-2 social-icons-wrapper">
              <SocialIcons icons={this.state.icons} />
            </div>
          </div>
        </div>

        <hr />

        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between">
            <div className="col-md-6 p-0 pb-2">
              <ul className="footer__nav list-unstyled m-0 d-flex flex-wrap justify-content-center justify-content-md-start">
                {this.state.footerLinks.map((link) => (
                  <li key={link.id}>
                    <a href={link.url} className="footer__nav__link mr-4 mb-3 mb-md-0 d-inline-block">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pb-2 social-icons-wrapper">
              <span>Inploy 2020. All rights reserved</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default AppFooter;
