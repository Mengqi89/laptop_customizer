import React from 'react';
import Options from '../Options/Options'

class Specs extends React.Component {

  render() {
    const featureList = Object.keys(this.props.props).map(
      (key) => (
        <div className="feature" key={key}>
        <div className="feature__name">{key}</div>
        <ul className="feature__list">
        <Options
          options={this.props.props[key]}
          handleUpdate={this.props.handleUpdate}
          keys={key}
          selected={this.props.selected}
          />
        </ul>
        </div>
    )
    )
    return (
    <section className="main__form">
      <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        {featureList}
    </section>
    );
  }
}

export default Specs;