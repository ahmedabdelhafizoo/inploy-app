import React from "react";
import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

let focusActiveCard = (e) => {
  if (window.innerWidth <= 767.98) return;
  // for medium devices
  let currentTarget = e.currentTarget.closest(".provider-card");
  let providerCards = currentTarget.parentElement.querySelectorAll(
    ".provider-card"
  );
  providerCards.forEach((card) => {
    // if current card is the first card remove
    currentTarget === providerCards[0]
      ? card.classList.remove("sm")
      : providerCards[0].classList.add("sm"); // else add sm class to the first card

    card.classList.remove("active");
  });
  currentTarget.classList.add("active");
};

const ProviderCard = (props) => {
  return (
    <div className="provider-card mb-4" onMouseEnter={focusActiveCard}>
      <Carousel indicators={false} slide={false} interval={null}>
        {props.provider.bgImages.map((img) => (
          <Carousel.Item key={img + Math.random() * 10}>
            <img
              className="d-block w-100 provider-card__img"
              src={require(`../../assets/images/providers/${img}`).default}
              alt="slider img"
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="provider-card__content text-center px-2">
        <div className="provider-card__content__header d-flex justify-content-center align-items-center">
          <div className="verified-icon rounded-circle text-white d-flex align-items-center justify-content-center">
            {props.provider.isVerified ? (
              <FontAwesomeIcon icon={faCheck} />
            ) : (
              <FontAwesomeIcon icon={faTimes} />
            )}
          </div>
          <img
            src={
              require(`../../assets/images/providers/${props.provider.profileImgae}`)
                .default
            }
            alt="logo images"
            className="provider-img mx-3"
          />
          <div className="provider-rating rounded-circle bg-white d-flex align-items-center justify-content-center">
            <small className="font-weight-bold">{props.provider.rating}</small>
          </div>
        </div>

        <h5 className="font-weight-bold mt-2">{props.provider.name}</h5>
        <p className="provider-services my-2">
          {props.provider.services.map((service) => (
            <span key={service + Math.random() * 10}>{service}</span>
          ))}
        </p>

        <a
          href="##"
          className="mb-4 d-inline-block card_view-link font-weight-normal"
        >
          Quick View
          <span className="ml-3">
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default ProviderCard;
