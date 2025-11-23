import type { MouseEvent, ReactNode } from "react";



interface ClickableProps {
    children?: ReactNode
    onClick?: (e: MouseEvent<HTMLDivElement>) => void
}

export default function Clickable(props: ClickableProps) {
    return <div className="layer" onClick={props.onClick}>
        {props.children}
    </div>
}
