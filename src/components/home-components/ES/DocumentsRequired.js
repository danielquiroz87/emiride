import React from 'react';

import UaeResidentsSvg from '../../../static/images/uae_residents.svg';
import UaeTouristsSvg from '../../../static/images/uae_tourist.svg';

function DocumentsRequired(){
    return(
    //  documents required
    <div className='container w-100 py-4'>
        <div className='row my-4'>
          
          <div className='col'>
            <h3 className='required-documents-list-tittle'>Para los residentes de los EAU</h3>
            <ul className='documents-li px-0'>
              <li>
                Copia del pasaporte
              </li>
              <li>
                Licencia de conducir válida de los EAU
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
            alt="UAE residents"
            />
          </div>

        </div>
        
        <div className='row my-4'>

          <div className='col-6 d-flex align-items-center mx-auto'>
            <img 
            className='doc-req-img'
            src={UaeTouristsSvg}
            alt="UAE tourists"
            />
          </div>
          
          <div className='col'>
            <h3 className='required-documents-list-tittle'>Para los turistas que visitan los EAU</h3>
              <ul className='documents-li px-0'>
                <li>
                  Copia del pasaporte
                </li>
                <li>
                  Permiso de conducir internacional valido
                </li>
                <li>
                  Visa/Sello de visa
                </li>
              </ul>
          </div>
        </div>
    </div>
    )
}

export default DocumentsRequired;