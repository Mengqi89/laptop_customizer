import React from 'react';
import Option from '../Option'



class OptionsListMain extends React.Component {
    render() {
        console.log(this.props.props.features)
        const featuresList = Object.keys(this.props.props.features)
          .map(key => { 
            return <div className="feature" key={key}>
                <div className="feature__name">{key}</div>
                <ul className="feature__list">
                    <Option 
                    // key={key}
                    features={this.props.props.features}/>
                </ul>
            </div>
          })
      

        return featuresList
        
    }
}

export default OptionsListMain;



// const features = Object.keys(this.props.features)
    //       .map(key => {
    //         const options = this.props.features[key].map((item, index) => {
    //           const selectedClass = item.name === this.state.selected[key].name ? 'feature__selected' : '';
    //           const featureClass = 'feature__option ' + selectedClass;
    //           return <li key={index} className="feature__item">
    //             <div className={featureClass}
    //               onClick={e => this.updateFeature(key, item)}>
    //                 { item.name }
    //                 ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
    //                   .format(item.cost) })
    //             </div>
    //           </li>
    //         });

    //   return <div className="feature" key={key}>
    //     <div className="feature__name">{key}</div>
    //     <ul className="feature__list">
    //       { options }
    //     </ul>
    //   </div>
    // });