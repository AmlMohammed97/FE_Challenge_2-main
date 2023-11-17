import CheckBox from './CheckBox';
import React from 'react';

export type Option = {
  label: string;
  value: string;
};

/**
 * Notice:
 * 1. There should be a special `Select All` option with checkbox to control all passing options
 * 2. If columns > 1, the options should be placed from top to bottom in each column
 *
 * @param {string} label - the label text of this component
 * @param {Option[]} options - options
 * @param {string[]} values - default checked option values
 * @param {number} columns - default value is 1
 * @param {Function} onChange - when checked options are changed,
 *                             they should be passed to outside
 */
type Props = {
  label?: string;
  options: Option[];
  columns?: number;
  values?: string[];
  onChange: (options: Option[]) => void;
};

const MultiCheck: React.FunctionComponent<Props> = ({ label, options, columns = 1, values, onChange }): JSX.Element => {
  return (
    <div className="MultiCheck">
      <h1>{label}</h1>
      <div data-testid="MultiCheckColumns" style={{ columnCount: columns }}>
        {options.map((option) => (
          <CheckBox label={option.label} key={option.value} onChange={() => onChange([option])} isChecked={values?.includes(option.value) ?? false} />
        ))}
      </div>
    </div>
  );
};

export default MultiCheck;
