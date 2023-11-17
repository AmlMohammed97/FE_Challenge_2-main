import './CheckBox.css';

import React from 'react';

export type Option = {
  label: string;
  value: string;
};

/**
 *
 *
 * @param {string} label - the label text of this component
 * @param {string} dataTestId - data test id to select it in unit tests
 * @param {boolean} isChecked - is this component checked
 * @param {Function} onChange - when checked options are changed,
 *                             they should be passed to outside
 */
type Props = {
  label: string;
  isChecked: boolean;
  onChange: () => void;
  dataTestId?: string;
};

const MultiCheck: React.FunctionComponent<Props> = ({ label, isChecked, onChange, dataTestId = 'checkbox' }): JSX.Element => {
  return (
    <div>
      <input type="checkbox" data-testid={dataTestId} checked={isChecked} onChange={onChange} />
      <label>{label}</label>
    </div>
  );
};

export default MultiCheck;
