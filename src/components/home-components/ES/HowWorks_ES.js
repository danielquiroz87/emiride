import React, { useRef, useEffect } from 'react';

function HowWorks({elements}) {
  const containerRefs = useRef([...Array(elements.length)].map(() => React.createRef()));

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        
        // const index = containerRefs.current.findIndex((ref) => ref.current === entry.target);

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
          <div className='row d-flex align-items-center justify-content-center'>
            <div className='col-4 px-0'>
              <img className ="w-75" src={element.img} alt="..."/>
            </div>
            <div className='col-8'>
              <b>
                <p className='steps-tittle-desktop'>{element.title}</p>
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

