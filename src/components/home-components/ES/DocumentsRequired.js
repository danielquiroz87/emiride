import React from 'react';

import UaeResidentsSvg from '../../../static/images/uae_residents.webp';
import UaeTouristsSvg from '../../../static/images/uae_tourist.webp';

// import UaeResidentsSvg from '../../../static/images/uae_residents_old.svg';
// import UaeTouristsSvg from '../../../static/images/uae_tourist_old.svg';

function DocumentsRequired(){
    return(
    //  documents required
    <div className='container w-100 py-4'>
        <div className='row my-4'>
          
          <div className='col-6'>
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
            className='doc-req-img img-fluid'
            src={UaeResidentsSvg}
            alt="UAE residents"
            width="795"
            height="389"
            />
          </div>

        </div>
        
        <div className='row my-4'>

          <div className='col-6 d-flex align-items-center mx-auto'>
            <img 
            className='doc-req-img img-fluid'
            src={UaeTouristsSvg}
            alt="UAE tourists"
            width="798"
            height="389"
            />
          </div>
          
          <div className='col-6'>
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