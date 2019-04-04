import React from 'react';
import SummaryItem from '../SummaryItem/SummaryItem'

class SummaryList extends React.Component {
    render() {
        const total = Object.keys(this.props.selected)
        .reduce((acc, curr) => acc + this.props.selected[curr].cost, 0);

        return (
            <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            <SummaryItem selected={this.props.selected}/>
            <div className="summary__total">
            <div className="summary__total__label">Your Price: </div>
            <div className="summary__total__value">
                { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(total) }
            </div>
            </div>
            </section>
      );
    }
}

export default SummaryList;