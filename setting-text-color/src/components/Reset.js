import React, { Component } from 'react';

class Reset extends Component {

    resetDefault=()=>{
        this.props.onReset(true);
    }
    render() {
        return (
            <button type="button" className="btn btn-dark m-2p" onClick={this.resetDefault}>Reset</button>
        );
    }
}

export default Reset;