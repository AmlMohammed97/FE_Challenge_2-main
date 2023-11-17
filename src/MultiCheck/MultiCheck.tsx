import CheckBox from '../CheckBox';
import React from 'react';
import ListOfComponents from '../ListOfComponents';

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
  values: string[];
  onChange: (values: string[]) => void;
  shouldHaveSelectAllOption?: boolean;
};

const MultiCheck: React.FunctionComponent<Props> = ({ label, options, columns = 1, values, onChange, shouldHaveSelectAllOption = false }): JSX.Element => {
  const onChangeCheckbox = (optionValue: string) => {
    // if value selected, then un-select it
    if (values.includes(optionValue)) onChange(values.filter((value) => value !== optionValue));
    // otherwise select it
    else onChange([...values, optionValue]);
  };

  const isAllOptionsSelected = () => {
    let isAllSelected = true;
    options.map((option) => {
      // checked if and only if all other options are checked.
      // Unchecked if any other option is unchecked.
      if (!values.includes(option.value)) isAllSelected = false;
    });
    return isAllSelected;
  };

  const onClickSelectAll = () => {
    if (isAllOptionsSelected()) onChange([]); // Unchecked: All other options are unchecked.
    else onChange(options.map((option) => option.value)); // Checked: All other options are checked.
  };
  const selectAllCheckbox = <CheckBox label="Select All" dataTestId="SelectAll" key="SelectAll" onChange={onClickSelectAll} isChecked={isAllOptionsSelected()} />;
  const listOfCheckbox = options.map((option) => (
    <CheckBox label={option.label} dataTestId={option.value} key={option.value} onChange={() => onChangeCheckbox(option.value)} isChecked={values?.includes(option.value) ?? false} />
  ));

  const getListOfComponents = () => (shouldHaveSelectAllOption ? [selectAllCheckbox, ...listOfCheckbox] : [...listOfCheckbox]);
  return (
    <div className="MultiCheck">
      <h1>{label}</h1>
      <ListOfComponents columns={columns} listOfComponents={getListOfComponents()} />
    </div>
  );
};

export default MultiCheck;
