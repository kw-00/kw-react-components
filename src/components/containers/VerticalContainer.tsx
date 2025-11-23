import type { CSSProperties, ReactNode } from "react";




interface ContainerProps {
    children: ReactNode
    orientation: "vertical" | "horizontal"
    flexGrow?: string
    justifyItems?: string
}

/**
 * A simple vertical flex container. Stretches to fit parent flex by default.
 */
export default function VerticalContainer(props: ContainerProps) {
    const style: CSSProperties = {}
    if (props.flexGrow !== undefined) style.flexGrow = props.flexGrow
    if (props.justifyItems !== undefined) style.justifyItems = props.justifyItems
    style.flexDirection = props.orientation === "vertical" ? "column" : "row"

    return (
        <div className="container" style={style}>
            {props.children}
        </div>
    )
}