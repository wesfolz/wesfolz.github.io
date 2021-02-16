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
        console.log('onload');
        setTimeout(() => {
          setLoading(false);
        }, 5000);
      }
    }
    return () => image.onload = null;
  }, [imgSrc]);

  return loading;
}