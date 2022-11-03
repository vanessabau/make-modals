import React, { useState, useRef, createRef } from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import tabbable from 'tabbable';
import FocusTrap from './focus-trap';

jest.mock('tabbable', () => {
  return jest.fn(() => []);
});

beforeEach(() => {
  jest.resetModules();
});

afterEach(cleanup);

it('focuses on first tabbable and last focused elements', () => {
  const tabbables = [
    {
      focus: jest.fn(),
    },
  ];
  tabbable.mockImplementation(() => tabbables);

  // Mock DOM to focus on another element
  document.body.innerHTML = `
    <div>
      <button id="test-btn">Test button</button>
    </div>
`;

  const testBtn = document.getElementById('test-btn');

  testBtn.focus();

  jest.spyOn(testBtn, 'focus');

  const TestStateManager = () => {
    const childRef = useRef();
    const [isOpen, setOpen] = useState(false);

    return (
      <>
        {isOpen ? <FocusTrap childRef={childRef} /> : null}
        <button
          type="button"
          data-testid="button"
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          Toggle
        </button>
      </>
    );
  };
  const { getByTestId } = render(<TestStateManager />);

  expect(tabbables[0].focus).toHaveBeenCalledTimes(0);
  expect(testBtn.focus).toHaveBeenCalledTimes(0);

  fireEvent.click(getByTestId('button'));

  expect(tabbables[0].focus).toHaveBeenCalledTimes(1);
  expect(testBtn.focus).toHaveBeenCalledTimes(0);

  fireEvent.click(getByTestId('button'));

  expect(tabbables[0].focus).toHaveBeenCalledTimes(1);
  expect(testBtn.focus).toHaveBeenCalledTimes(1);
});

it('focuses on openFocusRef and closeFocusRef', () => {
  const openFocusRef = {
    current: {
      focus: jest.fn(),
    },
  };
  const closeFocusRef = {
    current: {
      focus: jest.fn(),
    },
  };
  const TestStateManager = () => {
    const childRef = createRef();
    const [isOpen, setOpen] = useState(false);

    return (
      <>
        {isOpen ? (
          <FocusTrap
            childRef={childRef}
            openFocusRef={openFocusRef}
            closeFocusRef={closeFocusRef}
          />
        ) : null}
        <button
          type="button"
          data-testid="button"
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          Toggle
        </button>
      </>
    );
  };
  const { getByTestId } = render(<TestStateManager />);

  fireEvent.click(getByTestId('button'));

  expect(openFocusRef.current.focus).toHaveBeenCalledTimes(1);
  expect(closeFocusRef.current.focus).toHaveBeenCalledTimes(0);

  fireEvent.click(getByTestId('button'));

  expect(openFocusRef.current.focus).toHaveBeenCalledTimes(1);
  expect(closeFocusRef.current.focus).toHaveBeenCalledTimes(1);
});

it('traps focus within the container', () => {
  const tabbables = [
    {
      focus: jest.fn(),
    },
    {
      focus: jest.fn(),
    },
  ];
  tabbable.mockImplementation(() => tabbables);

  const childRef = createRef();
  const { container } = render(
    <FocusTrap childRef={childRef}>
      <div ref={childRef}>
        <button type="button">One</button>
        <button type="button">Two</button>
      </div>
    </FocusTrap>
  );

  expect(tabbables[0].focus).toHaveBeenCalledTimes(1);
  expect(tabbables[1].focus).toHaveBeenCalledTimes(0);

  // Focus on tab catcher element after content
  container.children[container.children.length - 1].dispatchEvent(
    new Event('focusin', {
      bubbles: true,
    })
  );

  expect(tabbables[0].focus).toHaveBeenCalledTimes(2);
  expect(tabbables[1].focus).toHaveBeenCalledTimes(0);

  // Focus on tab catcher element before content
  container.children[0].dispatchEvent(
    new Event('focusin', {
      bubbles: true,
    })
  );

  expect(tabbables[0].focus).toHaveBeenCalledTimes(2);
  expect(tabbables[1].focus).toHaveBeenCalledTimes(1);

  // Focus on button in the content
  container.children[1].dispatchEvent(
    new Event('focusin', {
      bubbles: true,
    })
  );

  expect(tabbables[0].focus).toHaveBeenCalledTimes(2);
  expect(tabbables[1].focus).toHaveBeenCalledTimes(1);
});
