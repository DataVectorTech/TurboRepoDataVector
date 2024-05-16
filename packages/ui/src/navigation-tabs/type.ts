import { ReactNode } from "react"

export type tabProps = {
    label : string,
    onClickHandler : Function,
    isActive : boolean,
    style : string,
    link : string
}

export type navigationTabsProps = {
    tabs : ReactNode,
    filters : ReactNode,
    content : ReactNode,
    isTabsFirst : boolean
}