import * as React from 'react';
// import classnames from 'classnames';

import ListItem from '../../atoms/listItem';
// import Button from '../../atoms/button';

// import styles from './style.css';

type Props = {
  // button?: string,
  height: string,
  mass: string,
  hairColor: string,
  skinColor: string,
  eyeColor: string,
  birthYear: string,
  gender: string,
};

const CardBody = (props: Props): React.Element<*> => {
  const { mass, height, hairColor, eyeColor, birthYear, gender, skinColor } = props;
  return (
    <ul>
      <ListItem>Mass: {mass}</ListItem>
      <ListItem>Height: {height}</ListItem>
      <ListItem>Hair Color: {hairColor}</ListItem>
      <ListItem>Skin Color: {skinColor}</ListItem>
      <ListItem>Eye Color: {eyeColor}</ListItem>
      <ListItem>Birth Year: {birthYear}</ListItem>
      <ListItem>Gender: {gender}</ListItem>
    </ul>
  );
};

export default CardBody;
