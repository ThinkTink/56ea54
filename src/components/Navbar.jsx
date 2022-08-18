import React from "react";
import PropTypes from "prop-types";
import StyledButton from "./StyledButton";

import {
  FilmIcon,
  CalendarIcon,
  RssIcon,
  TicketIcon,
  UserIcon,
} from "@heroicons/react/outline";

import "../css/navbar.scss";

function Navbar({ selectedMovie }) {
  return (
    <div className="navbarWrapper">
      <div className="imageContainer">
        {selectedMovie?.bannerImage && <img src={selectedMovie.bannerImage} />}
        <div className="after">
          <h1>
            <FilmIcon className="icon" /> Hatchways Cinema
          </h1>

          <div className="menuContainer">
            <p>
              Schedules <CalendarIcon className="icon" />
            </p>
            <p>
              News <RssIcon className="icon" />
            </p>
            <p>
              Tickets <TicketIcon className="icon" />
            </p>
            <p>
              Signup <UserIcon className="icon" />
            </p>
          </div>

          <div className="titleContainer">
            <h2> {selectedMovie?.title} </h2>
            <p> {selectedMovie?.synopsis} </p>
            <StyledButton text="Watch Trailer >" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

Navbar.propTypes = {
  selectedMovie: PropTypes.object,
};
