import React from "react";
import defaultNoDataImg from "../../assets/images/accreditations/no-data.png";
import "../../Styles/accreditation/NoDataCard.css";

export default function NoDataCard({
  image = defaultNoDataImg,
  title = "No Data Available",
  subtitle = "There are currently no records to display. Please check back later.",
}) {
  return (
    <div className="no-data-card" aria-label="No Records Available">
      <div className="no-data-media">
        <img
          src={image || defaultNoDataImg}
          alt="No Records"
          className="no-data-illustration"
          loading="lazy"
        />
      </div>
      <h2 className="no-data-title">{title}</h2>
      <p className="no-data-subtitle">{subtitle}</p>
    </div>
  );
}
