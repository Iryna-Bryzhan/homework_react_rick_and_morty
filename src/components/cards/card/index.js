import { Link } from "react-router-dom";
import React from "react";
import "../card.css";

function Card({ data, category, id }) {
  let name, species, image, type, dimension, air_date, episode;

  switch (category) {
    case "character":
      id = data.id;
      name = data.name;
      species = data.species;
      image = data.image;
      break;
    case "location":
      id = data.id;
      name = data.name;
      type = data.type;
      dimension = data.dimension;
      break;
    case "episode":
      id = data.id;
      name = data.name;
      air_date = data.air_date;
      episode = data.episode;
      break;
    default:
      break;
  }

  return (
    <>
      {category === "character" && (
        <div className="card">
          <Link to={`/character/${id}`}>
            <div className="card-image">
              <img src={image} alt={name} />
            </div>
            <div className="card-info">
              <p className="card-name">{name}</p>
              <p className="card-small-p">{species}</p>
            </div>
          </Link>
        </div>
      )}
      {category === "location" && (
        <>
          <div className="card-small">
            <Link to={`/location/${id}`}>
              <p className="card-name">{name}</p>
              <p className="card-small-p">{type}</p>
              <p className="card-small-p">{dimension}</p>
            </Link>
          </div>
        </>
      )}
      {category === "episode" && (
        <>
          <div className="card-small">
            <Link to={`/episode/${id}`}>
              <p className="card-name">{name}</p>
              <p className="card-small-p">{air_date}</p>
              <p className="card-small-p-m">{episode}</p>
            </Link>
          </div>
        </>
      )}
    </>
  );
}

export default Card;
