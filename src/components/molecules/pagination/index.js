import React, { useEffect } from 'react';

import Button from '../../atoms/button';
import './style.css';

type Props = {
  totalCount: number,
  postsPerPage: number,
  currentPage: number,
  setPage: Function,
};

const Pagination = (props: Props): React.Element<*> => {
  const { postsPerPage, totalCount, currentPage, setPage } = props;

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  const onNextPage = (): void => {
    setPage(currentPage + 1);
    console.log(`Next Page: ${currentPage}`);
  };
  const onPreviousPage = (): void => {
    setPage(currentPage - 1);
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
      {/* <Button onClick={() => setPage((old) => Math.max(old - 1, 1))} disabled={page === 1}>
        Previous
      </Button> */}
      {/* <span>
        {page} / {Math.ceil(totalPeople / 10)}
      </span> */}
      {/* <Button onClick={() => setPage(page + 1)} disabled={page >= totalPeople / 10}>
        Next
      </Button> */}
    </div>
  );
};

export default Pagination;
