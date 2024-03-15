import React from 'react';
import cl from './PaginationPage.module.css'
import { limitPage } from '../../../API/utils/pagnation';

const PaginationPage = ({totalPage, page, alterPage}) => {
  const allPage = limitPage(totalPage);
    return (
        <div className="container">
        {allPage.map(el =>
          <button
          key={el}
            className={page === el ? 'btn-pagination btn-pagination--active' : 'btn-pagination '}
            onClick={() => alterPage(el)}
          >
            {el}
          </button>)}
      </div>
    );
};

export default PaginationPage;