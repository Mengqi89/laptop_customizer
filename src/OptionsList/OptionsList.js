import React from 'react';
import Option from '../Option/Option'



class OptionsList extends React.Component {
    render() {
        console.log(this.props)

        const featuresList = Object.keys(this.props.props)
          .map(key => { 
            return <div className="feature" key={key}>
                <div className="feature__name">{key}</div>
                <ul className="feature__list">
                    <Option 
                    selected={this.props.selected}
                    keys={key}
                    features={this.props.props[key]}
                    handleUpdate={this.props.handleUpdate}/>
                </ul>
            </div>
          })
      

        return featuresList
        
    }
}

export default OptionsList;