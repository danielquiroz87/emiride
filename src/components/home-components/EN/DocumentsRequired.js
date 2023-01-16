import React from 'react';

import UaeResidentsSvg from '../../../static/images/uae_residents.svg';
import UaeTouristsSvg from '../../../static/images/uae_tourist.svg';

function DocumentsRequired(){
    return(
    //  documents required
    <div className='container'>
        <div className='row'>
          <div className='col'>
            <h3>For UAE residents</h3>
            <ul>
              <li>
                <p>
                  Passport copy
                </p>
              </li>
              <li>
                Valid UAE driving license
              </li>
              <li>
                Emirates ID
              </li>
            </ul>
          </div>
          <div className='col'>
            <img
            src={UaeResidentsSvg}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <img 
            src={UaeTouristsSvg}
            />
        
          </div>
          <div className='col'>
            <h3>For UAE residents</h3>
              <ul>
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