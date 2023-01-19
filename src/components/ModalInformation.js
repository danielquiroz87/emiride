import React from 'react';

const CustomModal = ({ triggerImage ,modalContent,IdModal }) => {
  return (

    <div className='d-flex justify-content-center col-lg-3 col-md-3 col-sm-6 col-6'>
      <img className = "modal-image-trigger" type="button"  src={triggerImage} data-bs-toggle="modal" data-bs-target={`#${IdModal}`}/>
  
      <div className="modal fade" id={IdModal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
  
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
     
            <div className="modal-body d-flex justify-content-center align-items-center">
              <img className='modal-image-content' src={modalContent}/>
            </div>

        </div>
      </div>
    </div>
  );
}

export default CustomModal;
