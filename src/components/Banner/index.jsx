import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

Banner.propTypes = {};

function Banner(props) {
  console.log(props.isContact);
  return (
    <div>
      <div className="banner">
        {/* video */}
        {!props.isContact ? (
          <video type="video/mp4" loop muted autoPlay>
            <source src="https://preview.eagle-themes.com/html/zante/videos/hero_video.mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            className="img-banner"
            src="https://reviewedu.net/wp-content/uploads/2021/09/2232cb90-60aa-43e9-9357-c7ec51f4d82b-1400x788.jpeg"
          />
        )}

        <div className="content">
          <h2></h2>
        </div>
      </div>
    </div>
  );
}

export default Banner;
