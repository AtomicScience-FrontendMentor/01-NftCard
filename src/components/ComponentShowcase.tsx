import React from 'react'

interface ComponentShowcaseProps {

}
 
const ComponentShowcase: React.FunctionComponent<ComponentShowcaseProps> = (props) => {
    return <>
        {props.children}
    </>;
}
 
export default ComponentShowcase;