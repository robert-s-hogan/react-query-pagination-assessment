import * as React from 'react';

import Button from '../../atoms/button';

import './style.css';
type Props = {
  totalPeople: number,
  page: number,
  setPage: Function,
};

const Pagination = (props: Props): React.Element<*> => {
  const { page, setPage, totalPeople } = props;

  return (
    <div className="pagination">
      <Button onClick={() => setPage((old) => Math.max(old - 1, 1))} disabled={page === 1}>
        Previous
      </Button>
      <span>
        {page} / {Math.ceil(totalPeople / 10)}
      </span>
      <Button onClick={() => setPage(page + 1)} disabled={page >= totalPeople / 10}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
