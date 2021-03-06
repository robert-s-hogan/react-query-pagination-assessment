import * as React from 'react';
import classnames from 'classnames';

import styles from './style.css';

export const ButtonTheme = {
  DEFAULT: 'default',
  ROUNDED: 'rounded',
};

export const ButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

type Props = {
  theme: string,
  size: string,
  onClick: Function,
  children: React.Node,
  className: string,
  disabled: boolean,
};

const Button = (props: Props): React.Element<*> => {
  const { onClick, children, theme, size, className, disabled } = props;
  const classProps: string = classnames(
    styles.button,
    styles[theme],
    styles[size],
    {
      [styles.disabled]: disabled,
    },
    className
  );

  return (
    <button type="button" onClick={onClick} disabled={disabled} className={classProps}>
      {children}
    </button>
  );
};

// Button.defaultProps = {
//   type: ButtonType.BUTTON,
//   theme: ButtonTheme.DEFAULT,
//   size: ButtonSize.SMALL,
//   onClick: () => {},
//   className: '',
//   disabled: false,
// };

export default Button;
