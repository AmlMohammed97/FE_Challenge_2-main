import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import ListOfComponents from '.';

describe('ListOfComponents', () => {
  describe('snapshot', () => {
    it('renders correctly', () => {
      const listOfComponents = renderer.create(<ListOfComponents columns={3} listOfComponents={[<div key={1} />, <div key={2} />]} />).toJSON();
      expect(listOfComponents).toMatchSnapshot();
    });
  });
  describe('initialize', () => {
    it('renders with three columns', () => {
      render(<ListOfComponents columns={3} listOfComponents={[]} />);
      const listOfComponents = screen.getByTestId('ListOfComponents');
      expect(listOfComponents).toHaveStyle({ 'column-count': '3' });
    });
    it('renders with list of two elements', () => {
      render(<ListOfComponents columns={1} listOfComponents={[<div key={1} />, <div key={2} />]} />);
      const listOfComponents = screen.getByTestId('ListOfComponents');
      expect(listOfComponents.children.length).toEqual(2);
    });
  });
});
