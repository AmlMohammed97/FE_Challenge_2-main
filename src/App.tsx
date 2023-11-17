import React, { useState, FunctionComponent } from 'react';
import MultiCheck, { Option } from './MultiCheck/MultiCheck';

const options: Option[] = [
  { label: 'aaa', value: '111' },
  { label: 'bbb', value: '222' },
  { label: 'ccc', value: '333' },
  { label: 'ddd', value: '444' },
  { label: 'eee', value: '555' },
  { label: 'fff', value: '666' },
  { label: 'ggg', value: '777' },
  { label: 'hhh', value: '888' },
  { label: 'iii', value: '999' },
];

const defaultValues: string[] = ['333', '555'];

const App: FunctionComponent = (): JSX.Element => {
  const [selectedValues, setSelectedValues] = useState<string[]>(defaultValues);

  function onSelectedOptionsChange(newSelectedValues: string[]): void {
    setSelectedValues([...newSelectedValues]);
  }

  // checked if and only if all other options are checked.
  // Unchecked if any other option is unchecked.
  const isAllOptionsSelected = selectedValues.length === options.length;

  const onChangeSelectAll = () => {
    if (isAllOptionsSelected) setSelectedValues([]); // Unchecked: All other options are unchecked.
    else setSelectedValues(options.map((option) => option.value)); // Checked: All other options are checked.
  };

  const specialOptions = [
    {
      label: 'Select All',
      key: 'SelectAll',
      isChecked: isAllOptionsSelected,
      onChange: onChangeSelectAll,
    },
  ];

  return (
    <div>
      <h1>Multi Check Component</h1>
      <MultiCheck label="my-multi-check" specialOptions={specialOptions} options={options} onChange={onSelectedOptionsChange} values={selectedValues} columns={2} />
      <div>
        <h2>Current selected values:</h2>
        <div>{selectedValues.join(',')}</div>
      </div>
    </div>
  );
};

export default App;
