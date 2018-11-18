import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      };
    };
    
    render() {

        const {tasks} = this.props//const tasks= this.props.task
        const elemTask = tasks.map ((task,index)=>{ return <TaskItem  key={task.id} name={task.name} level={task.level} index={index}></TaskItem>})
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
                    {elemTask}
                </tbody>
            </table>
            
        );
    }
}

export default TaskList;