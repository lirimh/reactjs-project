import React, { Component } from 'react'
import Pagination from "react-js-pagination";

import 'bootstrap/dist/css/bootstrap.min.css';

class Page extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activePage: 1
      };
    }
  
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }
  
  render(){
    return(
      <div>
      <Pagination
        activePage={this.state.activePage}
        itemsCountPerPage={10}
        totalItemsCount={450}
        pageRangeDisplayed={3}
        onChange={this.handlePageChange}
      />
    </div>
    );
  }
}

  export default Page;