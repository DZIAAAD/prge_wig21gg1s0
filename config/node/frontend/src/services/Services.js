import React from "react";
import biblioteka from "./biblioteka_wat.jpg";
import dziekan from "./dziekan_wig.jpg";
import promocja from "./promocja_wat.jpg";
import sztab from "./sztab_wat.jpg";
import "./Services.css";

function Services() {
  return (
    <div className="services">
      <div className="services_bottom">
        <div className="services_bottomLeft">
          <div className="services_top">
            <h1 className="home_title">Dostępne usługi</h1>
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
