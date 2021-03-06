import * as React from 'react';
import classnames from 'classnames';

import styles from './style.css';

type Props = {
  children?: React.Node,
  className?: string,
};

const ListItem = (props: Props): React.Element<*> => {
  const { children, className } = props;
  return <li className={classnames(styles.title, className)}>{children}</li>;
};

ListItem.defaultProps = {
  className: '',
  children: '',
};

export default ListItem;
