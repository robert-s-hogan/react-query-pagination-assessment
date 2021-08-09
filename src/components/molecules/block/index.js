/* @flow */
import * as React from "react";

import Card from "../../atoms/card";
import Button from "../../atoms/button";
import Title from "../../atoms/title";

type Props = {
    children?: React.Node,
    className?: string,
    title: string,
    button?: string,
};

const Block = (props: Props): React.Element<*> => (
    <Card className={props.className}>
        <Title>{props.title}</Title>
        {props.children}
        {props.button !== "" && <Button>{props.button}</Button>}
    </Card>
);

Block.defaultProps = {
    className: "",
    children: "",
    title: "",
    button: "",
};

export default Block;
