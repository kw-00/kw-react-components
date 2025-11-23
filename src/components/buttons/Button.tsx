import { Children, type MouseEvent, type ReactNode } from "react";
import type { ButtonVariant } from "../types/types";
import ButtonVisualLayer from "./_layers/ButtonVisualLayer";
import ButtonWrapper from "./_layers/ButtonWrapper";
import Clickable from "../layers/Clickable";
import Margins from "../utility-components/Margins";




interface ButtonProps {
    children?: ReactNode
    onClick?: (e: MouseEvent<HTMLDivElement>) => void
    variant: ButtonVariant
}


export default function Button(props: ButtonProps) {
    return (
        <ButtonWrapper>
            <Clickable onClick={props.onClick}/>
            <Margins horizontal="m" vertical="s" >
                <ButtonVisualLayer variant={props.variant}>
                    {props.children}
                </ButtonVisualLayer>
            </Margins>
        </ButtonWrapper>
    )
}