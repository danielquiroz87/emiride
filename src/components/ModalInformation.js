import React from 'react';

const CustomModal = ({ triggerImage ,modalContent,IdModal }) => {
  return (

    <div className='d-flex align-items-center justify-content-end col-lg-3 col-md-3 col-sm-6'>
      <img className = " " type="button" width={"100vw"} src={triggerImage} data-bs-toggle="modal" data-bs-target={`#${IdModal}`}/>
  
      <div className="modal fade" id={IdModal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
  
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
     
            <div className="modal-body d-flex justify-content-center align-items-center">
              <img src={modalContent}/>
            </div>

        </div>
      </div>
    </div>
  );
}

export default CustomModal;
