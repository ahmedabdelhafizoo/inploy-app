import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcons = (props) => {
  return (
    <ul className="list-unstyled d-flex flex-wrap social-icons-list m-0">
      {
        props.icons.map(icon => (
          <li key={icon.id}>
          <a
            href={icon.url}
            target="_blank"
            rel="noreferrer"
            className="social-icons-list__item mx-1 my-1 text-center text-white d-inline-block rounded-circle"
          >
            <FontAwesomeIcon icon={icon.icon} />
          </a>
        </li>
        ))
      }

    </ul>
  );
};

export default SocialIcons;
