import React, { useEffect } from 'react';

import Button from '../../atoms/button';
import './style.css';

type Props = {
  totalCount: number,
  postsPerPage: number,
  currentPage: number,
  setCurrentPage: (page: number) => void,
};

const Pagination = (props: Props): React.Element<*> => {
  const { postsPerPage, totalCount, currentPage, setCurrentPage } = props;

  useEffect(() => {
    setCurrentPage(currentPage);
  }, [currentPage]);

  const onNextPage = (): void => {
    setCurrentPage(currentPage + 1);
    console.log(`Next Page: ${currentPage}`);
  };
  const onPreviousPage = (): void => {
    setCurrentPage(currentPage - 1);
    console.log(`Previous Page: ${currentPage}`);
  };

  return (
    <div className="pagination">
      <Button disabled={currentPage === 1} onClick={() => onPreviousPage()}>
        Previous
      </Button>
      <span>{currentPage}</span>
      <Button onClick={() => onNextPage()} disabled={currentPage >= totalCount / postsPerPage}>
        Next
      </Button>
      {/* <Button onClick={() => setCurrentPage((old) => Math.max(old - 1, 1))} disabled={page === 1}>
        Previous
      </Button> */}
      {/* <span>
        {page} / {Math.ceil(totalPeople / 10)}
      </span> */}
      {/* <Button onClick={() => setCurrentPage(page + 1)} disabled={page >= totalPeople / 10}>
        Next
      </Button> */}
    </div>
  );
};

export default Pagination;
