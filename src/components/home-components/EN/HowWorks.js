import React, { useRef, useEffect } from 'react';

function HowWorks({elements}) {
  const containerRefs = useRef([...Array(elements.length)].map(() => React.createRef()));

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = containerRefs.current.findIndex((ref) => ref.current === entry.target);
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        } else {
          entry.target.classList.remove('fade-in');
        }
      });
    }, { threshold: [0, 1] });

    containerRefs.current.forEach((ref) => observer.observe(ref.current));

    return () => {
      containerRefs.current.forEach((ref) => observer.unobserve(ref.current));
    };
  }, []);

  return (
    <div className="d-flex flex-row">
      {elements.map((element, index) => (
        <div className='container  container-how-works' ref={containerRefs.current[index]} key={index}>
          <div className='row'>
            <div className='col-3'>
              <img className ="w-25" src={element.img} />
            </div>
            <div className='col-3'>
              <b>
                <h3>{element.title}</h3>
              </b>
              <p>{element.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HowWorks;


// import React, { useEffect, useRef } from 'react';
// import LocationAndDate from '../../../static/images/location-step-1.svg'

// function HowWorks() {
//   const containerRefs = useRef([...Array(8)].map(() => React.createRef()));

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         const index = containerRefs.current.findIndex((ref) => ref.current === entry.target);
//         if (entry.isIntersecting) {
//           entry.target.classList.add('fade-in');
//         } else {
//           entry.target.classList.remove('fade-in');
//         }
//       });
//     }, { threshold: [0, 1] });

//     containerRefs.current.forEach((ref) => observer.observe(ref.current));

//     return () => {
//       containerRefs.current.forEach((ref) => observer.unobserve(ref.current));
//     };
//   }, []);

//   return (
//     <div>
//       {[...Array(8)].map((_, index) => (
//         <div className='container container-how-works' ref={containerRefs.current[index]} key={index}>
//           <div className='row'>
//             <div className='col'>
//               <img src={LocationAndDate} />
//             </div>
//             <div className='col'>
//               <b>
//                 <h3>Locations & Dates</h3>
//               </b>
//               <p>Select the pickup and return dates and locations</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default HowWorks;

