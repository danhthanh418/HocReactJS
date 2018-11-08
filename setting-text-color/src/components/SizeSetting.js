import React, { Component } from 'react';

class SizeSetting extends Component {

    changeSize (value){
        this.props.onChangeSize(value)
    }
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="card">
                    <div className="card-header  text-white bg-success"> Size :{this.props.fontSize}px</div>
                    <div className="card-body">
                        <button type="button" className="btn btn-primary m-2p " onClick={()=>this.changeSize(-2)}>Giảm</button>
                        <button type="button" className="btn btn-danger m-2p " onClick={() =>this.changeSize(+2)}>Tăng</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SizeSetting;