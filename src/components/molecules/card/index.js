import * as React from 'react';
// import classnames from 'classnames';

// import Title from '../../atoms/title';
// import Button from '../../atoms/button';

// import styles from './style.css';

type Props = {
  children?: React.Node,
  className?: string,
  // button?: string,
  loading: string,
};

const Card = (props: Props): React.Element<*> => {
  const { loading, children, className } = props;
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className={className}>
      <div className="card-inner">{children}</div>
    </div>
  );
};

Card.defaultProps = {
  className: '',
  children: '',
  //   button: '',
};

export default Card;
