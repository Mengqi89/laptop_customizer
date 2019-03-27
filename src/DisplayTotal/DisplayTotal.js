import React from 'react';

class DisplayTotal extends React.Component {
    render() {
        return (
            <div className="summary__total">
              <div className="summary__total__label">Your Price: </div>
              <div className="summary__total__value">700
              </div>
            </div>        
        )
    }
}


export default DisplayTotal;