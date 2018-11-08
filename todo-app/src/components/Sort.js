import React, { Component } from 'react';

class Sort extends Component {
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 mt-2 mb-2">
               <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="sort" data-toggle="dropdown" aria-haspopup="true"
                           aria-expanded="true">
                              Săp xếp <i className="fa fa-caret-square-o-down" aria-hidden="true"></i>
                           </button>
                   <div className="dropdown-menu" aria-labelledby="sort">
                       <a className="dropdown-item" href="/"> <i className="fa fa-sort-alpha-asc pr-2" aria-hidden="true"></i> Tên A-Z</a>
                       <a className="dropdown-item" href="/"> <i className="fa fa-sort-alpha-desc pr-2" aria-hidden="true"></i> Tên Z-A</a>
                       <div className="dropdown-divider"></div>
                       <a className="dropdown-item" href="/">  Ưu tiên Cao</a>
                       <a className="dropdown-item" href="/"> Ưu tiên Trung bình</a>
                       <a className="dropdown-item" href="/"> Ưu tiên Thấp</a>
                   </div>
               </div>
            </div>
        );
    }
}

export default Sort;