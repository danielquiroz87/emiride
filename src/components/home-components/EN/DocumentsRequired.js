import React from 'react';

import UaeResidentsSvg from '../../../static/images/uae_residents.svg';
import UaeTouristsSvg from '../../../static/images/uae_tourist.svg';

function DocumentsRequired(){
    return(
    //  documents required
    <div className='container w-100 py-4'>
        <div className='row my-4'>
          
          <div className='col'>
            <h3 className='required-documents-list-tittle'>For UAE residents</h3>
            <ul className='documents-li px-0'>
              <li>
                Passport copy
              </li>
              <li>
                Valid UAE driving license
              </li>
              <li>
                Emirates ID
              </li>
            </ul>
          </div>

          <div className='col-6 d-flex align-items-center mx-auto'>
            <img
            className='doc-req-img'
            src={UaeResidentsSvg}
            alt="UAE Residents"
            />
          </div>

        </div>
        
        <div className='row my-4'>

          <div className='col-6 d-flex align-items-center mx-auto'>
            <img 
            className='doc-req-img'
            src={UaeTouristsSvg}
            alt="UAE Tourists"
            />
          </div>
          
          <div className='col'>
            <h3 className='required-documents-list-tittle'>For UAE tourists</h3>
              <ul className='documents-li px-0'>
                <li>
                  Passport copy
                </li>
                <li>
                  Vald international driving license
                </li>
                <li>
                  Visa/Visa stamp
                </li>
              </ul>
          </div>
        </div>
    </div>
    )
}

export default DocumentsRequired;