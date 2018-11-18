import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Controls extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         tasks:[]
      };
    };
    

    onCreateData = ()=>{
        const tasks = [
            {
                id: this.generateID(),
                name: 'Học ReactJs',
                level: 2
            },
            {
                id: this.generateID(),
                name: 'Đi học',
                level: 2
            },
            {
                id: this.generateID(),
                name: 'Xem phim',
                level: 1
            },
            {
                id: this.generateID(),
                name: 'Đi ngủ',
                level: 0
            }
        ];
        console.log(tasks)
        return (
          this.setState(
              {
                  tasks:tasks
              }
          ),
            this.props.onReceiveTask(tasks)
        )
    }

    s4 = ()=>{
        return (
           Math.floor((1+Math.random())*0x10000).toString(16).substring(1)
        )
    }

    generateID=()=>(
        this.s4() + this.s4()+'-'+this.s4()+'-'+this.s4()+'-'+this.s4()+'-'+this.s4()
    )    

    handleClick = ()=>{
        
    }
    render() {
        return (
            <div className="control text-center">
                {/* Button */}
                <button type="button" className="btn btn-success m-0">
                <i className="fa fa-plus mr-1" aria-hidden="true"></i>
                Thêm công việc</button>
                <button type="button" className="btn btn-primary m-2" onClick={() => this.onCreateData()}>
                <i className="fa fa-file mr-1" aria-hidden="true"></i>
                Tạo dữ liệu</button>
            <div className="row">
                    <Search></Search>
                    <Sort></Sort>
            </div>
                
            </div>
        );
    }
}

export default Controls;