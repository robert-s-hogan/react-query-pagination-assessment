import * as React from 'react';
// import classnames from 'classnames';

import Title from '../../atoms/title';
// import Button from '../../atoms/button';

// import styles from './style.css';

type Props = {
  children?: React.Node,
  // button?: string,
  uniqueId: object,
  name: string,
};

const CardHeader = (props: Props): React.Element<*> => {
  const { uniqueId, name, children } = props;
  return (
    <>
      <p className="text-left">#{uniqueId}</p>
      <Title>{name}</Title>
      {children}
    </>
  );
};

CardHeader.defaultProps = {
  children: '',
  //   button: '',
};

export default CardHeader;
