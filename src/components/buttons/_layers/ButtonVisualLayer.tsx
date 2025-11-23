import type { ButtonVariant } from "@/components/types/types";
import type { ReactNode } from "react";



interface ButtonVisualLayerProps {
    children?: ReactNode
    variant: ButtonVariant
}

// Get the CSS class that corresponds to the gien button variant
const getVariantClass = (variant: ButtonVariant) => {
    return `button--${variant}`
}


/**
 * An internal component that provides the visual side of a button.
 */
export default function ButtonVisualLayer(props: ButtonVisualLayerProps) {
    return (
        <div className={"button " + getVariantClass(props.variant)}>
            {props.children}
        </div>
    )
}