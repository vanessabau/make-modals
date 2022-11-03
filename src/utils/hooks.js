import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { getBreakpoint, BREAKPOINTS } from './breakpoints';

const canUseDOM = typeof document !== 'undefined';

export const usePortal = () => {
  const portalContainerRef = useRef();

  if (canUseDOM && !portalContainerRef.current) {
    portalContainerRef.current = window.document.createElement('div');
  }

  // Portal DOM node
  useLayoutEffect(() => {
    document.body.appendChild(portalContainerRef.current);

    return () => {
      const el = portalContainerRef.current;
      el.parentNode.removeChild(el);
    };
  }, []);

  return portalContainerRef;
};

export const useAriaHideSiblings = (active, selector, ref) => {
  // Manage aria-hidden on other DOM nodes
  useEffect(() => {
    if (active) {
      const rootNodes = document.querySelectorAll(selector);
      const transformedNodes = Array.prototype.map.call(rootNodes, (node) => {
        // eslint-disable-next-line sonarjs/no-duplicate-string
        const ariaHidden = node.getAttribute('aria-hidden');

        // Side-effect in map!
        if (node !== ref) {
          node.setAttribute('aria-hidden', 'true');
        }

        return { node, ariaHidden };
      });

      if (ref.getAttribute('aria-hidden') !== null) {
        ref.removeAttribute('aria-hidden');
      }

      return () => {
        transformedNodes.forEach((item) => {
          if (item.ariaHidden === null) {
            item.node.removeAttribute('aria-hidden');
          } else {
            item.node.setAttribute('aria-hidden', item.ariaHidden);
          }
        });
      };
    }

    return () => {};
  }, [active, ref, selector]);
};

export const useHandleEscapeKey = (active, callback) => {
  // Escape key handling
  useEffect(() => {
    const handleEscapeKey = (ev) => {
      const escapeCode = 27;

      if (ev.keyCode === escapeCode) {
        callback();
      }
    };

    if (active) {
      window.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [active, callback]);
};

let modalsOpen = 0;

export const usePreventBodyScroll = (active) => {
  useEffect(() => {
    if (active && canUseDOM) {
      Object.assign(document.body.style, {
        top: `-${window.pageYOffset}px`,
        position: 'fixed',
        width: '100%',
      });
      modalsOpen += 1;

      return () => {
        modalsOpen -= 1;

        if (modalsOpen < 1) {
          const scrollY = document.body.style.top;
          Object.assign(document.body.style, {
            position: '',
            top: '',
            width: '',
          });
          window.scrollTo(0, parseInt(scrollY || 0, 10) * -1);
        }
      };
    }

    return () => {};
  }, [active]);
};

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(BREAKPOINTS.DESKTOP);

  useEffect(() => {
    const handleResize = () => setBreakpoint(getBreakpoint());
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
};
