import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Photos.css';

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/photos');
        setPhotos(response.data.photos);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  const handlePhotoUpload = async (event) => {
    const formData = new FormData();
    formData.append('photo', event.target.files[0]);

    try {
      const response = await axios.post('http://localhost:5000/api/upload', formData);
      setPhotos((prevPhotos) => [...prevPhotos, response.data.photoUrl]);
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
  };
  //const imagePath = '/uploads/photo-1701007470553.JPG';
  return (
    <div className="photos-container">
      <div className="header">
        <h2>Мои фотографии</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
        />
      </div>
      <div className="photo-list">
        {photos.map((photo, index) => (
          //<img src={process.env.PUBLIC_URL + imagePath} alt="My Photo" />
          <img key={index} src={`http://localhost:3000${photo.url}`} alt={`Фото ${index + 1}`} />
          //<img key={index} src={`/uploads${photo.url}`} alt={`Фото ${index + 1}`} />

        ))}
      </div>
    </div>
  );
};

export default Photos;
