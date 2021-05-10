import React from 'react';
import { DataProps } from '../page/home';

interface PaginationProps {
  data?: DataProps[];
  total?: number;
  page?: number;
  handleFetchMore: (value: number) => void;
}

function Pagination({ data, total, page, handleFetchMore }: PaginationProps) {
  return (
    <>
      {total && total > 0 ? (
        <div className="pagination">
          <button>&laquo;</button>
          {Array.from({ length: Number(total) }, (_, index) => (
            <button
              key={index}
              className={`${page && page - 1 === index ? 'active' : ''}`}
              onClick={() => handleFetchMore(Number(index + 1))}
            >
              {index + 1}
            </button>
          ))}
          <button>&raquo;</button>
        </div>
      ) : null}
    </>
  );
}

export default Pagination;
