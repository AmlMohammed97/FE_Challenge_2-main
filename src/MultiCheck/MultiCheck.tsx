import CheckBox from '../CheckBox';
import React, { useMemo } from 'react';
import ListOfComponents from '../ListOfComponents';

export type Option = {
  label: string;
  value: string;
};

export type specialOption = {
  label: string;
  isChecked: boolean;
  key: string;
  onChange: () => void;
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
  values: string[];
  onChange: (values: string[]) => void;
  specialOptions?: specialOption[];
};

const MultiCheck: React.FunctionComponent<Props> = ({ label, options, columns = 1, values, onChange, specialOptions = [] }): JSX.Element => {
  const onChangeCheckbox = (optionValue: string) => {
    // if value selected, then un-select it
    if (values.includes(optionValue)) onChange(values.filter((value) => value !== optionValue));
    // otherwise select it
    else onChange([...values, optionValue]);
  };

  const specialCheckbox = useMemo(
    () =>
      specialOptions.map((specialOption) => (
        <CheckBox label={specialOption.label} dataTestId={specialOption.key} key={specialOption.key} onChange={specialOption.onChange} isChecked={specialOption.isChecked} />
      )),
    [specialOptions],
  );

  const listOfCheckbox = useMemo(
    () =>
      options.map((option) => (
        <CheckBox label={option.label} dataTestId={option.value} key={option.value} onChange={() => onChangeCheckbox(option.value)} isChecked={values?.includes(option.value) ?? false} />
      )),
    [options, values],
  );

  return (
    <div className="MultiCheck">
      <h1>{label}</h1>
      <ListOfComponents columns={columns} listOfComponents={[...specialCheckbox, ...listOfCheckbox]} />
    </div>
  );
};

export default MultiCheck;
