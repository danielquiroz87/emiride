import React, { useState } from 'react';

const Accordion = ({tittle,content,tittle_id,content_id}) => {

    return(
    <div className="accordion-item">
        <h2 className="accordion-header faq-acordion-title" id={tittle_id}>
        <button className="accordion-button faq-acordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${content_id}`} aria-expanded="true" aria-controls={content_id}>
            {tittle}
        </button>
        </h2>
        <div id={content_id} className="accordion-collapse collapse faq-acordion-content" aria-labelledby={tittle_id} data-bs-parent="#accordionExample">
        <div className="accordion-body">
            {content}
        </div>
        </div>
    </div>
  );
};

export default Accordion;
