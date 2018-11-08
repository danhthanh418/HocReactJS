import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          colors: ['red','green','blue','orange','deeppink']
      };
    };
    
    showColor(color){
        // Nhận color từ cha
        console.log(this.props.color);
        return {
            backgroundColor: color,
        }
    }
    setActiveColor(color){
        // Trả color về cha qua prop onReceiveColor
        this.props.onReceiveColor(color)
    }
    render() {

        const elemColors=this.state.colors.map((color,index)=>{
           return (
               <span 
                key={index} 
                style={this.showColor(color)}
                className={this.props.color===color ?'active':'' }
                onClick={()=>this.setActiveColor(color)}
                ></span>
           )
        });
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="card">
                    <div className="card-header text-white bg-info"> Color</div>
                    <div className="card-body">
                        {elemColors}
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorPicker;