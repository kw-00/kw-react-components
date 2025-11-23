import type { ReactNode } from "react";



interface ButtonWrapperProps {
    children?: ReactNode
}


/**
 * An internal component that should be used as the outersmost layer of a button. 
 */
export default function ButtonWrapper(props: ButtonWrapperProps) {
    return (
        <div className="button-wrapper">
            {props.children}
        </div>
    )
}