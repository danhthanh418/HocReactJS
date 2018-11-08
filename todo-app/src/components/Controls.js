import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Controls extends Component {
    render() {
        return (
            <div className="control">
                {/* Button */}
                <button type="button" className="btn btn-success">
                <i className="fa fa-plus mr-1" aria-hidden="true"></i>
                Thêm công việc</button>
            <div className="row">
                    <Search></Search>
                    <Sort></Sort>
            </div>
                
            </div>
        );
    }
}

export default Controls;