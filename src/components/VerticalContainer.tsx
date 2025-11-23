import type { ReactNode } from "react";




interface VerticalContainerProps {
    children: ReactNode
}

export default function VerticalContainer(props: VerticalContainerProps) {
    return (
        <div className="vertical-container">
            {props.children}
        </div>
    )
}