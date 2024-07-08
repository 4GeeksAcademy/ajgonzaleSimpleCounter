import React, { useState, useEffect } from 'react';

function SecondsCounter() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a load event
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>Content Loaded</div>;
}

export default SecondsCounter;