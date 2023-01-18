import React, { useState } from 'react';

const Accordion = ({tittle,content,tittle_id,content_id}) => {

    return(
        <div id="accordion">
            
    <div className="accordion-item">
        <button className="accordion-button faq-acordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target={`#${content_id}`} aria-expanded="true" aria-controls={content_id}>
        <p className="accordion-header " id={tittle_id}>
            {tittle}
        </p>
        </button>
        <div id={content_id} className="accordion-collapse collapse " aria-labelledby={tittle_id} data-bs-parent="#accordionExample">
            <div className="accordion-body faq-acordion-content">
                {content}
            </div>
        </div>
    </div>
        </div>
  );
};

export default Accordion;
