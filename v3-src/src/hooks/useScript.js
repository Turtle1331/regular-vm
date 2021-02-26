// Based on https://stackoverflow.com/a/34425083

import {useEffect} from 'react';

const useScript = (url, selector, id) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = id;

    script.src = url;
    script.async = true;

    const node = document.querySelector(selector);

    if (node != null) {
        node.appendChild(script);

        return () => {
            node.removeChild(script);
        }
    }

  }, [url, selector, id]);
};

export default useScript;
