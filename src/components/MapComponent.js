import React from 'react';

// {useEffect, useRef, useState}
// import MapImage from "../static/images/map.webp";
// import Pointer from "../static/images/emirates_icon.webp"

import MapPointer from '../static/images/map-pointer.webp';

function MapWithPointer() {
  // const mapRef = useRef(null);
  // const pointerRef = useRef(null);
  // const [isPointerVisible, setIsPointerVisible] = useState(false);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     if (entries[0].isIntersecting) {
  //       setIsPointerVisible(true);
  //     }
  //   });
  //   if(mapRef.current) observer.observe(mapRef.current);
  //   return () => observer.disconnect();
  // }, [mapRef]);

  return (

    <img
        
        src={MapPointer}
        alt="pointer"
        className='map-image img-fluid'
        width="855"
        height="495"
        

        // style={{ position: "absolute", top: "320px", left: "640px" }}
      />
    // <div ref={mapRef}  style={{ position: "relative" }}>
    //   <img src={MapImage} alt="map" className='map-image'
        
    //    />
    //   <img
    //     ref={pointerRef}
    //     src={Pointer}
    //     alt="pointer"
    //     width={'30wh'}
    //     className={`pointer ${isPointerVisible ? "is-visible" : ""}`}
    //     // style={{ position: "absolute", top: "320px", left: "640px" }}
    //   />
    // </div>
  );
}


export default MapWithPointer;