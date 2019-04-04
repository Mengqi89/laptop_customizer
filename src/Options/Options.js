import React, { Component } from 'react';

class Options extends Component {
  render() {
    const key=this.props.keys
    const optionList = this.props.options[key].map(
      (item, index) => { 
        const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
        const featureClass = 'feature__option ' + selectedClass;
        return (
        <li key={index} className="feature__item">
          <div 
          className={featureClass}
          onClick={e => this.props.handleUpdate(key, item)}>
          {item.name}
          ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(item.cost) })
          </div>
        </li>)
      }
    )

    return (
      <>
        {optionList}
      </>
    )
    
  }
}

export default Options;