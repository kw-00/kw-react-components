import type { ReactNode } from "react";



interface ButtonWrapperProps {
    children: ReactNode
}

export default function ButtonWrapper(props: ButtonWrapperProps) {
    return (
        <div className="button-wrapper">
            {props.children}
        </div>
    )
}