import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';

class BusinessList extends React.Component {

  render() {
    return (
      <div className="BusinessList">
        {
          this.props.businesses.map((business, index) => <Business business={business} key={index} />)
        }
      </div>
    )
  }
}

export default BusinessList;