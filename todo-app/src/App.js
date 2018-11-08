import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskForm from './components/TaskForm';
import Controls from './components/Controls';
import TaskList from './components/TaskList';

class App extends Component {
  render() {
    return (
      <div className="container-fliud mt-1e">
        <div className="card">
         <div className="card-header lead font-weight-bold text-white bg-info text-center">Task Manager ReactJS</div>
          <div className="card-body">
          <div className="row">
              <TaskForm></TaskForm>
              
              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  <Controls></Controls>
                  <TaskList></TaskList>
              </div>
              
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
