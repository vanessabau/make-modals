import { cleanup, render } from '@testing-library/react';
import React from 'react';
import useMediaQuery from './use-media-query';

describe('useMediaQuery', () => {
  const mqs = {
    desktop: '(min-width: 992px)',
    tablet: '(min-width: 768px)',
    mobile: '',
  };

  const TestComponent = () => {
    const mq = useMediaQuery(mqs);
    return <>{mq}</>;
  };

  const matchMediaMockDefaults = {
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };

  afterEach(() => {
    cleanup();
  });

  it('returns the first matching query when all match', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        matches: true,
        ...matchMediaMockDefaults,
      })),
    });
    const { getByText } = render(<TestComponent />);
    expect(getByText('desktop')).not.toBeNull();
  });

  it('returns the first matching query', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: query === mqs.tablet || query === mqs.mobile,
        ...matchMediaMockDefaults,
      })),
    });
    const { getByText } = render(<TestComponent />);
    expect(getByText('tablet')).not.toBeNull();
  });

  it('returns a fallback matching query', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: query === mqs.mobile,
        ...matchMediaMockDefaults,
      })),
    });
    const { getByText } = render(<TestComponent />);
    expect(getByText('mobile')).not.toBeNull();
  });
});
