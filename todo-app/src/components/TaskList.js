import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
    render() {
        return (
            
            <table className="table table-hover table-bordered">
                <thead>
                    <tr className= "text-center">
                        <th >STT</th>
                        <th >Tên công việc</th>
                        <th >Độ ưu tiên</th>
                        <th >Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <TaskItem></TaskItem>
                </tbody>
            </table>
            
        );
    }
}

export default TaskList;