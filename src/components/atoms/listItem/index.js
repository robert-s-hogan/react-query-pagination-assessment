/* @flow */
import * as React from "react";
import classnames from "classnames";

import styles from "./style.css";

type Props = {
    children?: React.Node,
    className?: string,
};

const ListItem = (props: Props): React.Element<*> => (
    <li className={classnames(styles.title, props.className)}>
        {props.children}
    </li>
);

ListItem.defaultProps = {
    className: "",
    children: "",
};

export default ListItem;
