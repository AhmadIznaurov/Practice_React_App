import React from "react";

type AccordionType = {
    titleValue: string
    collapsed: true | false
}

function Accordion(props: AccordionType) {
    if (collapsed === true) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
            </div>
        )
    } else (collapsed === false) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody  />
            </div>
        )
    }

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