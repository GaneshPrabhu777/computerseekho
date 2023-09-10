import React from 'react';

const Videoad = () => {
  return (
    <div className="video-container">
      <video className="video" autoPlay muted loop>
        <source src="URL_TO_VIDEO_AD.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Videoad;
