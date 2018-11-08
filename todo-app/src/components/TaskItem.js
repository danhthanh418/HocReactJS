import React, { Component } from 'react';

class TaskItem extends Component {
    render() {
        return (
                <tr className="content">
                    <td className="text-center">1</td>
                    <td>Làm bài tập</td>
                    <td className="text-center">
                        <span className="badge badge-danger ">Cao</span></td>
                    <td className="text-center">
                        <button type="button" className="btn btn-warning m-1 text-white"><i className="fa fa-pencil" aria-hidden="true"></i> Sửa</button>
                        <button type="button" className="btn btn-danger m-1"> <i className="fa fa-trash" aria-hidden="true"></i> Xóa</button>
                    </td>
                </tr>
        );
    }
}

export default TaskItem;