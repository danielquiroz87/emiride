// import React from 'react';



// function MapWithPointer() {
//   return (
//     <div className="container d-flex justify-content-center align-items-center">

//     <div style={{ position: "relative" }} >
//       <img src="https://emiride.com/wp-content/uploads/2022/11/map-1024x594.png" alt="map" />
//       <img 
//         src="https://emiride.com/wp-content/uploads/2022/11/piont.png" 
//         alt="pointer" 
//         width={'30wh'}
//         style={{ position: "absolute", top: "310px", left: "640px" }}
//         />
//     </div>
//         </div>
//   );
// }

// export default MapWithPointer;




// function MapWithPointer() {
//   const mapRef = useRef(null);
//   const pointerRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting) {
//         pointerRef.current.classList.add("is-visible");
//       }
//     });
//     observer.observe(mapRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div ref={mapRef} style={{ position: "relative" }}>
//       <img src="https://emiride.com/wp-content/uploads/2022/11/map-1024x594.png" alt="map" />
//       <img
//         ref={pointerRef}
//         src="https://emiride.com/wp-content/uploads/2022/11/piont.png"
//         alt="pointer"
//         className="pointer"
//         width={'30wh'}
//         style={{ position: "absolute", top: "310px", left: "640px" }}
//       />
//     </div>
//   );
// }
// export default MapWithPointer;
import React, {useEffect, useRef, useState} from 'react';
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
      <img src="https://emiride.com/wp-content/uploads/2022/11/map-1024x594.png" alt="map"
       />
      <img
        ref={pointerRef}
        src="https://emiride.com/wp-content/uploads/2022/11/piont.png"
        alt="pointer"
        width={'30wh'}
        className={`pointer ${isPointerVisible ? "is-visible" : ""}`}
        style={{ position: "absolute", top: "320px", left: "640px" }}
      />
    </div>
  );
}


export default MapWithPointer;