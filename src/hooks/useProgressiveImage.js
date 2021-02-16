import { useEffect, useState } from 'react';

export default function useProgressiveImage({ imgSrc }) {
  const [ loading, setLoading ] = useState(true);
  useEffect(() => {
    const image = new Image();
    image.src = imgSrc;
    console.log(image.complete);
    if (image.complete) {
      setLoading(false);
    } else {
      image.onload = () => {
        setLoading(false);
      }
    }
    return () => image.onload = null;
  }, [imgSrc]);

  return loading;
}