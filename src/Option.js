import React from 'react';

class Option extends React.Component {
    render() {
        console.log(this.props)
        // const key = this.props.key
        const options = this.props.features[key].map((item, index) => {
            const selectedClass = item.name === this.state.selected[key].name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass;
            return ( 
            <li key={index} className="feature__item">
              <div className={featureClass}
                onClick={e => this.updateFeature(key, item)}>
                  { item.name }
                  ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(item.cost) })
              </div>
            </li>)
        })
        return options
    }
}


export default Option

