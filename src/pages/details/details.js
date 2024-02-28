import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { req } from "../../method/method";
import "./details.css";
import Header from "../../components/header/header";
import { Link } from "react-router-dom";

export default function Details({ url, click }) {
  const [information, setInformation] = useState({
    name: null,
    image: null,
    details: null,
  });
  const { id } = useParams();

  useEffect(() => {
    req(`${url}${id}`)
      .then((e) => {
        console.log(e);
        setInformation({
          id: e.id,
          name: e.name,
          image: e.image,
          details: e,
          species: e.species,
          status: e.status,
          gender: e.gender,
          episode: Array.isArray(e.episode) ? e.episode : [e.episode],
          type: e.type,
          dimension: e.dimension,
          residents: e.residents,
          air_date: e.air_date,
          characters: e.characters,
        });
      })
      .catch(() => {});
  }, [id, url]);

  return (
    <>
      <Header click={click}></Header>

      <div className="page">
        {url === "https://rickandmortyapi.com/api/character/" && (
          <div className="page-details">
            <div className="details-name">{information.name}</div>
            <div className="page-details-descr">
              <div className="details-iamage">
                <img src={information.image} alt={information.name}></img>
                <div className="details-iamage-inf">
                  Picture «{information.name}»
                </div>
              </div>
              <div className="details-information">
                <div className="details-information-item">
                  <div className="details-information-title">Species:</div>
                  <div className="details-information-text">
                    {information.species}
                  </div>
                </div>
                <div className="details-information-item">
                  <div className="details-information-title">Status:</div>
                  <div className="details-information-text">
                    {information.status}
                  </div>
                </div>
                <div className="details-information-item">
                  <div className="details-information-title">Gender:</div>
                  <div className="details-information-text">
                    {information.gender}
                  </div>
                </div>

                <div className="details-information-item">
                  <div className="details-information-title">Episode:</div>
                  <div className="details-information-episode">
                    {information.episode ? (
                      information.episode.map((episode) => (
                        <div className="details-information-item-episode">
                          <Link
                            to={
                              episode
                                ? episode.replace(
                                    "https://rickandmortyapi.com/api",
                                    ""
                                  )
                                : ""
                            }
                          >{`Episode ${episode.replace(
                            "https://rickandmortyapi.com/api/episode/",
                            ""
                          )}`}</Link>
                        </div>
                      ))
                    ) : (
                      <div className="details-information-text">
                        No episodes available
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {url === "https://rickandmortyapi.com/api/location/" && (
          <div className="page-details">
            <div className="details-name">{information.name}</div>
            <div className="details-information">
              <div className="details-information-item">
                <div className="details-information-title">Type:</div>
                <div className="details-information-text">
                  {information.type}
                </div>
              </div>
              <div className="details-information-item">
                <div className="details-information-title">Dimension:</div>
                <div className="details-information-text">
                  {information.dimension}
                </div>
              </div>

              <div className="details-information-item">
                <div className="details-information-title">Residents:</div>
                <div className="details-information-episode">
                  {information.residents ? (
                    information.residents.map((residents) => (
                      <div className="details-information-item-episode">
                        <Link
                          to={
                            residents
                              ? residents.replace(
                                  "https://rickandmortyapi.com/api",
                                  ""
                                )
                              : ""
                          }
                        >{`Character ${residents.replace(
                          "https://rickandmortyapi.com/api/character/",
                          ""
                        )}`}</Link>
                      </div>
                    ))
                  ) : (
                    <div className="details-information-text">
                      No episodes available
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {url === "https://rickandmortyapi.com/api/episode/" && (
          <div className="page-details">
            <div className="details-name">{information.name}</div>
            <div className="details-information">
              <div className="details-information-item">
                <div className="details-information-title">Air_date:</div>
                <div className="details-information-text">
                  {information.air_date}
                </div>
              </div>
              <div className="details-information-item">
                <div className="details-information-title">Episode</div>
                <div className="details-information-text">
                  {information.episode}
                </div>
              </div>
              <div className="details-information-item">
                <div className="details-information-title">Characters:</div>
                <div className="details-information-episode">
                  {information.characters ? (
                    information.characters.map((characters) => (
                      <div className="details-information-item-episode">
                        <Link
                          to={
                            characters
                              ? characters.replace(
                                  "https://rickandmortyapi.com/api",
                                  ""
                                )
                              : ""
                          }
                        >{`Character ${characters.replace(
                          "https://rickandmortyapi.com/api/character/",
                          ""
                        )}`}</Link>
                      </div>
                    ))
                  ) : (
                    <div className="details-information-text">
                      No episodes available
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
