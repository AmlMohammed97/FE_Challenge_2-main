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
      render(<MultiCheck label="test checkbox label" onChange={() => {}} options={[]} values={[]} />);
      const label = screen.getByText('test checkbox label');
      expect(label).toBeInTheDocument();
    });
    it('renders with one column', () => {
      render(<MultiCheck label="" onChange={() => {}} options={[]} values={[]} />);
      const MultiCheckColumns = screen.getByTestId('MultiCheckColumns');
      expect(MultiCheckColumns).toHaveStyle({ 'column-count': '1' });
    });
    it('renders with three columns', () => {
      render(<MultiCheck label="" onChange={() => {}} options={[]} columns={3} values={[]} />);
      const MultiCheckColumns = screen.getByTestId('MultiCheckColumns');
      expect(MultiCheckColumns).toHaveStyle({ 'column-count': '3' });
    });
    it('renders unchecked select all checkbox', () => {
      render(<MultiCheck label="" onChange={() => {}} options={options} values={[]} />);
      const selectAllCheckbox = screen.getByTestId('SelectAll');
      expect(selectAllCheckbox).toBeInTheDocument();
      expect(selectAllCheckbox).not.toBeChecked();
    });
    it('renders checked select all checkbox', () => {
      render(<MultiCheck label="" onChange={() => {}} options={options} values={['111', '222', '333']} />);
      const selectAllCheckbox = screen.getByTestId('SelectAll');
      expect(selectAllCheckbox).toBeInTheDocument();
      expect(selectAllCheckbox).toBeChecked();
    });
    it('renders with two unchecked options', () => {
      render(<MultiCheck label="" onChange={() => {}} options={options} values={[]} />);
      const firstOption = screen.getByText('aaa');
      expect(firstOption).toBeInTheDocument();
      expect(firstOption).not.toBeChecked();
      const secondOption = screen.getByText('bbb');
      expect(secondOption).toBeInTheDocument();
      expect(secondOption).not.toBeChecked();
    });
  });
});
