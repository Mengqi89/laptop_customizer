import React from 'react';
import Summary from '../Summary/Summary';
import DisplayTotal from '../DisplayTotal/DisplayTotal';

export default function SummaryMain(props) {
    console.log(props)
    return (
        <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            <Summary selected={props.selected}/>
            <DisplayTotal selected={props.selected}/>
          </section>
    )
}
