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
      <div class="loader">
        <div class="inner one"></div>
        <div class="inner two"></div>
        <div class="inner three"></div>
      </div>
    );
}
