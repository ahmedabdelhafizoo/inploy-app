import React, { Component } from "react";
import ProviderCard from "./ProviderCard";

class Register extends Component {
  state = {
    providers: [
      {
        id: 1,
        name: "Diko M",
        rating: "5.0",
        isVerified: true,
        profileImgae: "1.png",
        bgImages: [
          "bg1.png",
          "bg2.png",
        ],
        services: ["Architect", "Muralist"],
      },
      {
        id: 2,
        name: "Sohaila Kandil",
        rating: "4.5",
        isVerified: false,
        profileImgae: "2.png",
        bgImages: [
          "bg2.png",
          "bg1.png",
        ],
        services: ["Professional", "Model"],
      },
      {
        id: 3,
        name: "Cairo Walls",
        rating: "4.0",
        isVerified: true,
        profileImgae: "1.png",
        bgImages: [
          "bg1.png",
          "bg2.png",
        ],
        services: ["Architect", "Developer"],
      },
    ],
  }
  render() {
    return (
      <section className="register-section">
        <div className="container">
          <h3 className="section__sub-title mb-4 text-center text-md-left">
            2000+ Service Providers on board
          </h3>
          <div className="row">
            <div className="col-lg-7 col-xl-6">
              <div>
                <div className="d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-md-start provider-wrapper">
                  {this.state.providers.map(provider => (
                      <ProviderCard key={provider.id} provider={provider}/>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-xl-6">
              {/* register form */}
              <div>
                <h2 className="section__title">Register Now</h2>
                <form className="form">
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div>
                        <input
                          type="text"
                          name="full-name"
                          placeholder="Full Name"
                          className="form__input"
                        />
                      </div>
                    </div>

                    <div className="col-md-6 mb-4">
                      <div>
                        <input
                          type="text"
                          name="job-title"
                          placeholder="Job Title"
                          className="form__input"
                        />
                      </div>
                    </div>

                    <div className="col-md-6 mb-4">
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          className="form__input"
                        />
                      </div>
                    </div>

                    <div className="col-md-6 mb-4">
                      <div>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          className="form__input"
                        />
                      </div>
                    </div>

                    <div className="col-xl-6 mb-4">
                      <div className="bg-white">
                        <select
                          name="category"
                          defaultValue={""}
                          className="form__input custom-select"
                        >
                          <option value="" disabled>
                            Category
                          </option>
                          <option value="one">one</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button className="btn btn--red form__btn px-4">
                    Register Now
                  </button>
                </form>
              </div>
              {/* end register form */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Register;
