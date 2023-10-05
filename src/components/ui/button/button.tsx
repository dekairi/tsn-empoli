import React, {FC, MouseEventHandler} from "react";
import {StyledButton} from "./styles";

interface ButtonProps {
    link?: string;
    onClick?: MouseEventHandler;
    type?: "button" | "submit" | "reset" | undefined;
    className?: string;
    children?: string | JSX.Element | JSX.Element[];
    disabled?: boolean;
    style?: {[key: string]: string}
}

const Button: FC<ButtonProps> = (props) => {
    return (
        <StyledButton
            {...props}
            {...(props.link
                ? { to: props.link }
                : { as: "button", onClick: props.onClick, type: props.type || "button" })}
            className={props.className}
        >
            {props.children}
        </StyledButton>
    );
}

export default Button;
