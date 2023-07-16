import React from "react";

type AccordionType = {
    titleValue: string
    collapsed: boolean
}

function Accordion(props: AccordionType) {
        return (
                <div>
                    <AccordionTitle title={props.titleValue}/>
                    { !props.collapsed && <AccordionBody />}
                </div>
            )
}

type AccordionTitleType = {
    title: string
}

function AccordionTitle(props: AccordionTitleType) {
    return (
        <div>
            <h3>--- {props.title} ---</h3>
        </div>
    )
}



function AccordionBody(props: any) {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default Accordion;