import * as React from 'react';
import classnames from 'classnames';

import styles from './style.css';

type Props = {
  children?: React.Node,
  className?: string,
};

const Title = (props: Props): React.Element<*> => {
  const { children, className } = props;
  return <h2 className={classnames(styles.title, className)}>{children}</h2>;
};

Title.defaultProps = {
  className: '',
  children: '',
};

export default Title;
