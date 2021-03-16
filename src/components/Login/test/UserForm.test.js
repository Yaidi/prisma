import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import UserForm from '../UserForm';
import { sendData } from '../helpers';

const SUBMIT_LABEL = /registrarme/i;

jest.mock('react-router-dom', () => {
  const MockLink = ({ children }) => {
    return <div>{children}</div>;
  };

  return {
    Link: MockLink,
    useHistory: jest.fn(),
  };
});

jest.mock('../helpers', () => {
  const mockHandler = jest.fn((e) => {
    e.preventDefault();
  });

  return {
    sendData: () => mockHandler,
  };
});

describe('UserForm', () => {
  it('renders a submit button', () => {
    render(<UserForm />);

    const submitButton = screen.getByText(SUBMIT_LABEL);

    expect(submitButton).toBeInTheDocument();
  });

  describe('submit button', () => {
    describe('when the user clicks the button', () => {
      it('calls sendData', async () => {
        const handler = sendData();

        render(<UserForm windowChoose="Register" />);
        expect(handler).not.toHaveBeenCalled();

        const submitButton = screen.getByText(SUBMIT_LABEL);
        fireEvent.click(submitButton);

        await waitFor(() => {
          expect(handler).toHaveBeenCalled();
        });
      });
    });
  });
});
