import React from 'react';

/**
 *
 *
 * @param {number} columns - list columns number
 * @param {JSX.Element} listOfComponents - list of components to be rendered
 *
 */
type Props = {
  columns: number;
  listOfComponents: JSX.Element[];
};

const ListOfComponents: React.FunctionComponent<Props> = ({ columns, listOfComponents }): JSX.Element => {
  return (
    <div data-testid="ListOfComponents" style={{ columnCount: columns }}>
      {listOfComponents}
    </div>
  );
};

export default ListOfComponents;
