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
 * @param {boolean} isChecked - is this component checked
 * @param {Function} onChange - when checked options are changed,
 *                             they should be passed to outside
 */
type Props = {
  label: string;
  isChecked: boolean;
  onChange: () => void;
};

const MultiCheck: React.FunctionComponent<Props> = ({ label, isChecked, onChange }): JSX.Element => {
  return (
    <div>
      <input type="checkbox" data-testid="checkbox" checked={isChecked} onChange={onChange} />
      <label>{label}</label>
    </div>
  );
};

export default MultiCheck;
