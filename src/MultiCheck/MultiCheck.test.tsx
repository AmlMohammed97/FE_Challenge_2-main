import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MultiCheck, { Option } from '.';

const options: Option[] = [
  { label: 'aaa', value: '111' },
  { label: 'bbb', value: '222' },
  { label: 'ccc', value: '333' },
];

describe('MultiCheck', () => {
  describe('initialize', () => {
    it('renders the label if label provided', () => {
      render(<MultiCheck label="test checkbox label" onChange={() => {}} options={[]} />);
      const label = screen.getByText('test checkbox label');
      expect(label).toBeInTheDocument();
    });
    it('renders with one column', () => {
      render(<MultiCheck label="" onChange={() => {}} options={[]} />);
      const MultiCheckColumns = screen.getByTestId('MultiCheckColumns');
      expect(MultiCheckColumns).toHaveStyle({ 'column-count': '1' });
    });
    it('renders with three columns', () => {
      render(<MultiCheck label="" onChange={() => {}} options={[]} columns={3} />);
      const MultiCheckColumns = screen.getByTestId('MultiCheckColumns');
      expect(MultiCheckColumns).toHaveStyle({ 'column-count': '3' });
    });
    it('renders with two options', () => {
      render(<MultiCheck label="" onChange={() => {}} options={options} />);
      const firstOption = screen.getByText('aaa');
      expect(firstOption).toBeInTheDocument();
      const secondOption = screen.getByText('bbb');
      expect(secondOption).toBeInTheDocument();
    });
  });
});
