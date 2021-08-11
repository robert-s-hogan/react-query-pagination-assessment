import * as React from 'react';

import { useState, useEffect } from 'react';

import './style.css';

const LoadingAnimation = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 200000);
    }
  }, [loading]);

  if (!loading)
    return (
      <div className="loader">
        <div className="inner one"></div>
        <div className="inner two"></div>
        <div className="inner three"></div>
      </div>
    );
};

export default LoadingAnimation;
