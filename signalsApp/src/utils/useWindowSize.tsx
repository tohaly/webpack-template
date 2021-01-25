import { useState, useEffect } from 'react';

const getWindowSize = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const resizeHandle = () => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener('resize', resizeHandle);

    return () => {
      window.removeEventListener('resize', resizeHandle);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
