import React from 'react';
import './Photos.css'
class Photos extends React.Component {
  render() {
    return (
      <div className="photos-container">
        <div className="header">
          <h2>Мои фотографии</h2>
          <button className="add-photo-button">Добавить фотографию</button>
        </div>
      </div>
    );
  }
}

export default Photos;
