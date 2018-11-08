import React, { Component } from 'react';

class Result extends Component {

    // Thực hiện set màu cho kq
    setStyle= ()=>{
        return {
            color: this.props.color,
            border: 'solid 2px ' + this.props.color,
            fontSize: this.props.fontSize
        };
    }
    render() {

        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-2p">
                <div className="card">
                    <div className="card-header text-white bg-secondary">Kết quả : {this.props.color} - {this.props.fontSize}px</div>
                    <div className="card-body">
                        <span 
                            className="card-text" id="content" style={this.setStyle()}>Kết quả trả về</span>
                    </div>
                </div>
            </div>
        );
    }
} 

export default Result;