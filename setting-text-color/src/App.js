import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Result from './components/Result';
import Reset from './components/Reset';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       color: 'red',
       fontSize: 12
    }
    // this.onSetColor = this.onSetColor.bind(this);
  }

  // Onsetcolor as Proptery
  onSetColor = (params) =>{
    this.setState(
      {
        color:params
      }
    )
  }

  onSetChangeSize = (value)=>{
      this.setState(
        {
          fontSize: (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) ? this.state.fontSize +value : this.state.fontSize
        }
      )
  }
  
  onReset= (value)=>{
    if(value){
      this.setState (
        {
          color: 'red',
          fontSize: 12
        }
      )
    
    }
  }
  render() {

    return (
      <div className="container-fluid mt-50">
        <div className="card">
          <div className="card-header text-center text-white bg-warning">
            Change text color and size
          </div>
          <div className="card-body">
              <div className="row">
              {/* Truyền color từ App -->ColorPicker qua props color */}
                <ColorPicker color={this.state.color} onReceiveColor ={this.onSetColor}></ColorPicker>
                {/* prop onChangeSize */}
                <SizeSetting fontSize = {this.state.fontSize} onChangeSize={this.onSetChangeSize}></SizeSetting>
                <Reset onReset= {this.onReset}></Reset>
              </div>
              <div className="row">
                  <Result color={this.state.color} fontSize={this.state.fontSize}></Result>
              </div>
              
              
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
