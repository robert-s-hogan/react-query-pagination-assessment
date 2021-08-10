import React from 'react';

import Button from '../../atoms/button';

import './style.css';

const index = ({ totalPeople, data, page, setPage, peoplePerPage }) => {
  return (
    <div className="pagination">
      <Button onClick={() => setPage((old) => Math.max(old - 1, 1))} disabled={page === 1}>
        Previous
      </Button>
      <span>
        Page:
        {page} / {Math.ceil(totalPeople / 10)}
      </span>
      <Button onClick={() => setPage(page + 1)} disabled={page >= totalPeople / 10}>
        Next
      </Button>
    </div>
  );
};

export default index;
