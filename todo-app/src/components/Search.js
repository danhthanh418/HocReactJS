import React, {Component} from 'react';

class Search extends Component {
  render () {
    return (
      <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 mt-2">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Tên công việc"
            aria-label="Tên công việc"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <span className="input-group-text bg-primary text-white" id="basic-addon2"><i className="fa fa-search ml-2"></i>Tìm</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
