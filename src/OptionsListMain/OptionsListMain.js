import React from 'react';
import OptionsList from '../OptionsList/OptionsList';

export default class OptionsListMain extends React.Component{
    render(){
        console.log(this.props)
    return (
    <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        <OptionsList 
        selected={this.props.selected}
        handleUpdate={this.props.handleUpdate}
        props={this.props.props}/>
    </section>)
}
}