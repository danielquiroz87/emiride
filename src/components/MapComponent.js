import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

function MapComponent({ latitude, longitude }) {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const { top, bottom } = mapRef.current.getBoundingClientRect();
      const isIntersecting = top < window.innerHeight && bottom >= 0;

      if (isIntersecting) {
        setShouldLoadMap(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (shouldLoadMap && !window.google) {
      // Load the Google Maps JavaScript API script
      const googleMapsScript = document.createElement('script');
      googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCTB40SU4FspBupqEDIRYg3PlrVNcrNsBQ`;
      googleMapsScript.async = true;
      googleMapsScript.addEventListener('load', initializeMap);
      window.document.body.appendChild(googleMapsScript);

      return () => {
        googleMapsScript.removeEventListener('load', initializeMap);
        window.document.body.removeChild(googleMapsScript);
      };
    } else if (shouldLoadMap && window.google) {
      initializeMap();
    }
  }, [shouldLoadMap]);

  const initializeMap = () => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: latitude, lng: longitude },
      zoom: 16,
    });

    const marker = new window.google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: map,
      title: 'E M I Ride Rent a Car', // Set the title for the marker
    });

    const infoWindow = new window.google.maps.InfoWindow({
      content: marker.getTitle(), // Use the marker's title as the content of the info window
    });

    infoWindow.open(map, marker); // Open the info window immediately

    // Store the marker reference for later use
    markerRef.current = marker;
  };

  return (
    <div ref={mapRef} style={{ width: '100%', height: '650px', margin: '40px' }}>
      {location.pathname === '/' || location.pathname === '/inicio' || location.pathname === '/INICIO' ? null : (
        <p>Map Component should be rendered on the root ("/") or "/inicio" routes.</p>
      )}
    </div>
  );
}

export default MapComponent;
