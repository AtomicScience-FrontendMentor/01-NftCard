import React from 'react'
import "../styles/showcase.scss"

interface ComponentShowcaseProps {

}
 
const ComponentShowcase: React.FunctionComponent<ComponentShowcaseProps> = (props) => {
    return <div className='showcase'>
        {props.children}
    </div>;
}
 
export default ComponentShowcase;