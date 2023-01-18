import React, {useEffect, useRef, useState} from 'react';

import MapImage from "../static/images/map.png";
import Pointer from "../static/images/emirates_icon.png"

function MapWithPointer() {
  const mapRef = useRef(null);
  const pointerRef = useRef(null);
  const [isPointerVisible, setIsPointerVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsPointerVisible(true);
      }
    });
    if(mapRef.current) observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, [mapRef]);

  return (
    <div ref={mapRef}  style={{ position: "relative" }}>
      <img src={MapImage} alt="map" className='map-image'
        
       />
      <img
        ref={pointerRef}
        src={Pointer}
        alt="pointer"
        width={'30wh'}
        className={`pointer ${isPointerVisible ? "is-visible" : ""}`}
        // style={{ position: "absolute", top: "320px", left: "640px" }}
      />
    </div>
  );
}


export default MapWithPointer;