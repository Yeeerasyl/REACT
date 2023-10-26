import React from 'react';
import './Video.css'
class Video extends React.Component {
  render() {
    return (
      <div className="photos-container">
        <div className="header">
          <h2>Мои видео</h2>
          <button className="add-photo-button">Добавить видео</button>
        </div>
      </div>
    );
  }
}

export default Video;
