import React from 'react';
import PropTypes from 'prop-types';
import "./styles.scss";

Banner.propTypes = {
  
};

function Banner(props) {
  return (
    <div>
      <div className="banner">
        {/* video */}
        <video
            type="video/mp4"
            loop
            muted
            autoPlay
          >
            <source src="https://preview.eagle-themes.com/html/zante/videos/hero_video.mp4" />
            Your browser does not support the video tag.
        </video>

        <div className="content">
          <h2>
            KANT RESORT
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Banner;