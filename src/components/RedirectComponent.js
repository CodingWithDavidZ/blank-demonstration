import React, { useEffect } from 'react';

function RedirectComponent() {
  useEffect(() => {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  }, []);
  return <div></div>;
}

export default RedirectComponent;
