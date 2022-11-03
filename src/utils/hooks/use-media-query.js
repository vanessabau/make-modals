import { useEffect, useState, useCallback } from 'react';

const attachChangeHandler = (mqList, onChange) => {
  if (!mqList.addEventListener) {
    mqList.addListener(onChange);
  } else {
    mqList.addEventListener('change', onChange);
  }
};

const detachChangeHandler = (mqList, onChange) => {
  if (!mqList.removeEventListener) {
    mqList.removeListener(onChange);
  } else {
    mqList.removeEventListener('change', onChange);
  }
};

/**
 * Utility for attaching matchMedia() change listeners and re-rendering a component when a breakpoint changes.
 * queryObj should be defined as a constant outside of your component to ensure the Object instance doesn't change between renders.
 *
 * @example
 * useMediaQuery({
 *   desktop: '(min-width: 992px)',
 *   tablet: '(min-width: 768px)',
 *   mobile: '',
 * });
 * @param {Object} queryObj - Object of key:value pairs where "key" is the name of the breakpoint and "value" is the media query string.
 * @returns The key (name) of the matching media query string from queryObj.
 */
const useMediaQuery = (queryObj) => {
  const getMatchingMq = useCallback(() => {
    const query = Object.entries(queryObj).find(([, value]) => {
      if (typeof window !== 'undefined') {
        return window.matchMedia(value).matches;
      }
      return {};
    });
    return query?.[0];
  }, [queryObj]);

  const [mqState, setMqState] = useState(getMatchingMq);

  useEffect(() => {
    const mqslist = [];

    const mqChangeHandler = () => {
      return setMqState(getMatchingMq);
    };

    if (typeof window !== 'undefined') {
      Object.values(queryObj).forEach((query) => {
        mqslist.push(window.matchMedia(query));
      });

      mqslist.forEach((query) => {
        return attachChangeHandler(query, mqChangeHandler);
      });
    }

    return () =>
      mqslist.forEach((query) => {
        return detachChangeHandler(query, mqChangeHandler);
      });
  }, [getMatchingMq, queryObj]);

  return mqState;
};

export default useMediaQuery;
