import * as React from 'react';
import classnames from 'classnames';

import Title from '../../atoms/title';
// import Button from '../../atoms/button';

import styles from './style.css';

type Props = {
  children?: React.Node,
  className?: string,
  title?: string,
  // button?: string,
  uniqueId: string,
};

const Card = (props: Props): React.Element<*> => {
  const { children, className, title, uniqueId } = props;
  return (
    <div className={classnames(styles.card, className)} key={uniqueId}>
      <div className="card-inner">
        <p className="text-left">#{uniqueId}</p>
        <Title>{title}</Title>
        {children}
        {/* {props.button !== '' && <Button>{props.button}</Button>} */}
      </div>
    </div>
  );
};

Card.defaultProps = {
  className: '',
  children: '',
  title: '',
  //   button: '',
};

export default Card;

// <div className="card">
//     <div className="card-inner">
//         <div className="card-title">
//             <h2>{person.name}</h2>
//             {/* <span title="uniqueId">#{createDisplayID(person)}</span> */}
//         </div>
//         <div className="card-body">
//             <p>Height: {person.height}</p>
//             <p>Mass: {person.mass}</p>
//             <p>Hair Color: {person.hair_color}</p>
//             <p>Skin Color: {person.skin_color}</p>
//             <p>Eye Color: {person.eye_color}</p>
//             <p>Birth Year: {person.birth_year}</p>
//             <p>Gender: {person.gender}</p>
//         </div>
//     </div>
// </div>
