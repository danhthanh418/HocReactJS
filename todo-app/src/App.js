import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskForm from './components/TaskForm';
import Controls from './components/Controls';
import TaskList from './components/TaskList';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       tasks:[],
       isDisplayForm:false
    };
  };
  
  hanldeOpen  =  (isOpen)=>{
    this.setState({
      isDisplayForm: isOpen
    })
  }
  onCreateTask = (tasks)=>(
      this.setState({
        tasks: tasks
      }),
    localStorage.setItem('tasks ', JSON.stringify(tasks))
  )

//Reset data from local storage vào state sau khi nhấn refresh
  componentWillMount = () => {
    if (localStorage && localStorage.getItem('tasks')) {
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      })
    }
  };

  hanleClick = ()=>{
    this.setState({
      isDisplayForm: true
    })
  }
  render() {
    const {tasks, isDisplayForm} = this.state
    const elemForm = isDisplayForm?<TaskForm></TaskForm>:'';
    return (
      <div className="container-fliud mt-1e">
        <div className="card">
         <div className="card-header lead font-weight-bold text-white bg-info text-center">Task Manager ReactJS</div>
          <div className="card-body">
          <div className="row">
              {elemForm}
              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <Controls onReceiveTask={(tasks) => this.onCreateTask(tasks)}></Controls>
                  <TaskList tasks={tasks}></TaskList>
              </div>
              
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
