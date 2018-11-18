import React, { Component } from 'react';

class TaskItem extends Component {
    render() {
        return (
                <tr className="content">
                    <td className="text-center">{this.props.index+1}</td>
                    <td>{this.props.name}</td>
                    <td className="text-center">
                    <span className={ this.props.level === 2 ? "badge badge-danger" : this.props.level === 1 ? "badge badge-info" :"badge badge-success"}>{this.props.level === 2 ? 'Cao' : this.props.level === 1?'Trung bình':'Thấp'}</span></td>
                    <td className="text-center">
                        <button type="button" className="btn btn-warning m-1 text-white"><i className="fa fa-pencil" aria-hidden="true"></i> Sửa</button>
                        <button type="button" className="btn btn-danger m-1"> <i className="fa fa-trash" aria-hidden="true"></i> Xóa</button>
                    </td>
                </tr>
        );
    }
}

export default TaskItem;