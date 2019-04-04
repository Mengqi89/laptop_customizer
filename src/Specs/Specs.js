import React from 'react';
import FeatureList from '../FeatureList/FeatureList'

class Specs extends React.Component {

  render() {
    return (
    <section className="main__form">
      <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        <FeatureList 
        features={this.props.features}
        selected={this.props.selected}
        handleUpdate={this.props.handleUpdate}
        />
    </section>
    );
  }
}

export default Specs;