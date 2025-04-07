import React from "react";
import biblioteka from "./biblioteka_wat.jpg";
import dziekan from "./dziekan_wig.jpg";
import promocja from "./promocja_wat.jpg";
import sztab from "./sztab_wat.jpg";
import "./Services.css";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="services">
      <div className="services_bottom">
        <div className="services_bottomLeft">
          <div className="services_top">
            <h1 className="home_title">Dostępne usługi</h1>
          </div>

          <div className="services_buttons">
            <Link to="map">
              <button className="services_button" id="mapa">
                MAPA
              </button>
            </Link>
            <Link to="militaryUnits">
              <button className="services_button" id="lista">
                WYKAZ lub lista CZEGOŚ
              </button>
            </Link>
          </div>
        </div>
        <div className="services_bottomRight">
          <div className="services_imageItem">
            <img src={biblioteka} alt="" />
          </div>
          <div className="services_imageItem">
            <img src={dziekan} alt="" />
          </div>
          <div className="services_imageItem">
            <img src={promocja} alt="" />
          </div>
          <div className="services_imageItem">
            <img src={sztab} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
