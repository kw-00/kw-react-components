import type { ReactNode } from "react";



interface ButtonVisualLayerProps {
    children: ReactNode
    variant: "primary"
}

const variantToClassMapping = {
    primary: "button-primary"
}


export default function ButtonVisualLayer(props: ButtonVisualLayerProps) {


    return (
        <div className={variantToClassMapping[props.variant]}>
            {props.children}
        </div>
    )
}