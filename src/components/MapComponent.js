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
      googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBUh1HZCtb0h9Q3pfvLGyGh5YMOTHl6v-4`;
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

// import { Map, GoogleApiWrapper, Marker,InfoWindow } from 'google-maps-react';


// class MapContainer extends React.Component {
//   render() {
//     const { google, latitude, longitude } = this.props;

//     // Create an object with the latitude and longitude coordinates
//     const position = { lat: latitude, lng: longitude };
//     const markerStyle = {
//       position: 'absolute',
//       transform: 'translate(-50%, -50%)',
//       left: '50%',
//       top: '40%',
//       fontWeight: 'bold',
//     };
//     const containerStyle = {
//       width: '200px',
//       height: '200px',
//       position: 'relative', // Add this line to set the position of the container
//       top: '50%', // Center the map vertically
//       left: '50%', // Center the map horizontally
//     };

//     const mapStyle = {
//       position: 'absolute', // Add this line to position the map absolutely
//       top: '50%', // Center the map vertically
//       left: '50%', // Center the map horizontally
//       transform: 'translate(-50%, -50%)', // Adjust the transform to center the map accurately
//     };

//     return (
//       <div className='inside-container-map' style={containerStyle}>

//         <Map
//         className="map"
//         zoom={16}
//         google={this.props.google}
//         initialCenter={{ lat: 25.2523202169424, lng: 55.334763524835 }}
//         containerStyle={mapStyle}        
//         >
//             <Marker position={position} title={'E M I Ride Rent a Car'}>
//             </Marker>
//             {/* <div style={markerStyle}>E M I Ride Rent a Car</div> */}
//         </Map>
      
//       </div>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyBUh1HZCtb0h9Q3pfvLGyGh5YMOTHl6v-4'
// })(MapContainer);
