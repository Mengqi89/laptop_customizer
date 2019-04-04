import React, { Component } from 'react';
import Options from '../Options/Options'

class FeatureList extends Component {
    render() {
        const featureList = Object.keys(this.props.features).map(
            (key) => (
              <div className="feature" key={key}>
              <div className="feature__name">{key}</div>
              <ul className="feature__list">
              <Options
                options={this.props.features}
                handleUpdate={this.props.handleUpdate}
                keys={key}
                selected={this.props.selected}
                />
              </ul>
              </div>
          ))
        return (
            <>
              {featureList}  
            </>
        );
    }
}

export default FeatureList;