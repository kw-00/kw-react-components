import type { ReactNode } from "react";
import type { PresetSize } from "../widget-configuation-values";




interface MarginsProps {
    children: ReactNode
    vertical?: PresetSize
    horizontal?: PresetSize
}

const getCSSVariable = (value: PresetSize) => {
    return `var(--margin-${value})`
}

/**
 * A wrapper component that provides margins.
 */
export default function Margins(props: MarginsProps) {

    let vertical;
    let horizontal;
    if (props.vertical !== undefined) {
        vertical = getCSSVariable(props.vertical)
    } else {
        vertical = getCSSVariable("m")
    }

    if (props.horizontal !== undefined) {
        horizontal = getCSSVariable(props.horizontal)
    } else {
        horizontal = getCSSVariable("m")
    }

    const style = {
        marginTop: vertical,
        marginBottom: vertical,
        marginLeft: horizontal,
        marginRight: horizontal
    }

    return (
        <div style={style}>
            {props.children}
        </div>
    )
}