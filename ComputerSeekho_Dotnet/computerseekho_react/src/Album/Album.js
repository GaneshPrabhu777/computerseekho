import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Album  () {
  const { albumname } = useParams();
  const [album, setAlbum] = useState({});
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/getAlbumsByname/${albumname}`)
      .then(response => {
        setAlbum(response.data);
        setImages(response.data.images); 
      })
      .catch(error => {
        console.error('Error fetching album:', error);
      });
  }, [albumname]);

  return (
    <div className="album-container">
      <h2>{album.album_name}</h2>
      <p>Description: {album.album_description}</p>
      <div className="image-gallery">
        {images.map(image => (
          <img key={image.image_id} src={image.image_path} alt={image.image_path} />
        ))}
      </div>
    </div>
  );
};

export default Album;
