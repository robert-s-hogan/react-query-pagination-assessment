import React from "react";

import Button from "../../atoms/button";

import "./style.css";

const index = ({ page, setPage }) => {
    return (
        <div className="pagination">
            <Button
                onClick={() => setPage(old => Math.max(old - 1, 1))}
                disabled={page === 1}
            >
                Previous
            </Button>
            <span> {page} </span>
            <Button
                onClick={() => setPage(page + 1)}
                // disabled={
                //     page >= data.data.count / data.data.results.length
                // }
                disabled={page === 9}
            >
                Next
            </Button>
        </div>
    );
};

export default index;
