import React, { useState, useEffect } from 'react';

import './style.css';

export default function App({ children }) {
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
}
