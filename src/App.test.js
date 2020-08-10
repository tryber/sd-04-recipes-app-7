import React from 'react';
import App from './App';
import { renderWithContext } from './tests/test-serveces/renderWithContext';
// import { render } from '@testing-library/react';

describe('App', () => {
  describe('Login', () => {
    test('should be rendered', () => {
      const { getByText } = renderWithContext(<App />, '/');
      expect(getByText('Login')).toBeInTheDocument();
    });
  });
});
