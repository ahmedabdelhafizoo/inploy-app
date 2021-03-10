import React from "react";

const Intro = () => {
  return (
      <section className="intro-section text-center">
        <div className="container">
          <img
            src={require("../../assets/images/intro-heading.svg").default}
            alt="logo images"
          />
          <p className="my-4 py-2">
            Register now and secure your spot on top of your category
          </p>
          <button className="btn btn--red btn--shadow btn-lg mb-3 mx-2">
            Service Provider
          </button>
          <button className="btn btn--white btn--shadow btn-lg mb-3 mx-2">
            Client
          </button>
        </div>
      </section>
  );
};

export default Intro;
