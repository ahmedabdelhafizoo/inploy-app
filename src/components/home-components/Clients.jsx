import React, { Component } from "react";

class Clients extends Component {
  state = {
    features: [
      { id: 1, title: "Free Commission", image: "star.svg" },
      { id: 2, title: "Free Contact Exchange", image: "extchange.svg" },
      { id: 3, title: "30+ Services", image: "services.svg" },
    ],
    clients: [
      { id: 1, logo: "1.svg" },
      { id: 2, logo: "2.svg" },
      { id: 3, logo: "3.svg" },
      { id: 4, logo: "4.svg" },
      { id: 5, logo: "5.svg" },
      { id: 6, logo: "6.svg" },
      { id: 7, logo: "7.svg" },
      { id: 8, logo: "8.svg" },
      { id: 9, logo: "9.svg" },
      { id: 10, logo: "10.svg" },
      { id: 11, logo: "11.svg" },
    ],
  };
  render() {
    return (
      <section className="clients-section">
        <div className="container">
          {/* features */}
          <div className="row features justify-content-center">
            {this.state.features.map((feature) => (
              <div className="col-sm-6 col-lg-4 mb-3" key={feature.id}>
                <div className="card bg-white py-3 px-4 h-100 d-flex align-items-center">
                  <img
                    src={
                      require(`../../assets/images/clients/${feature.image}`)
                        .default
                    }
                    alt="feature img"
                    className="card__img"
                  />
                  <h5 className="mb-0 ml-3 font-weight-bold">
                    {feature.title}
                  </h5>
                </div>
              </div>
            ))}
          </div>
          {/* end features */}

          {/* clients */}
          <div className="clients">
            <h3 className="section__sub-title my-5 py-2 text-center">
              Success stories with 400+ Clients
            </h3>
            <div className="d-flex flex-wrap justify-content-center justify-content-xl-around align-items-center">
              {this.state.clients.map((client) => (
                <div className="client px-4 px-xl-2 mb-5" key={client.id}>
                  <a href="##">
                    <img
                      src={
                        require(`../../assets/images/clients/${client.logo}`)
                          .default
                      }
                      alt="client logo"
                      className="client__img"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
          {/* end clients */}
        </div>
      </section>
    );
  }
}

export default Clients;
