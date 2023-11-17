import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CheckBox from '.';

describe('CheckBox', () => {
  it('renders the label', () => {
    render(<CheckBox label="test checkbox label" onChange={() => {}} isChecked={false} />);
    const label = screen.getByText('test checkbox label');
    expect(label).toBeInTheDocument();
  });
  it('renders un-checked', () => {
    render(<CheckBox label="" onChange={() => {}} isChecked={false} />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).not.toBeChecked();
  });
  it('renders checked', () => {
    render(<CheckBox label="" onChange={() => {}} isChecked={true} />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toBeChecked();
  });
});
