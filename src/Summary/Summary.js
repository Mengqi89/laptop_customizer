import React from 'react';

class Summary extends React.Component {
    render() {
        return (
        <div className="summary__option" key="Processor">
            <div className="summary__option__label">Processor  </div>
            <div className="summary__option__value">17th Generation Intel Core HB (7 Core with donut spare)</div>
            <div className="summary__option__cost">
              700
            </div>
        </div>
        )
    }
}

export default Summary;