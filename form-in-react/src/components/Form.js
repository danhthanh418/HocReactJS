import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        txtUsername:'',
        txtPassword:'',
        txtDesc:'',
        sltGender:0,
        rdLang:'en',
        chkMovie:false,
        chkMusic: false,
        chkTravel : false,
        chkSport: false,
      };
    };
    
    onHandleChange = (event)=>{
        // Xu lu da su kien
        const target= event.target;
        const name = target.name;
        const value = target.type==='checkbox' ?target.checked: target.value;
        this.setState(
           {
                [name]: value
           }
        )
    }

    onHandleSubmit= (event)=>{
        // Chặng reload 
        event.preventDefault();
        console.log(this.state)
        
    }
    render() {
        return (
            <div className="container mt-2p">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="card">
                            <div className="card-header text-warning lead  font-weight-bold bg-danger text-center">
                                Xử lý sự kiện trên form
              </div>
                            <div className="card-body" />
                            <div className="container">
                                <form onSubmit={this.onHandleSubmit}>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="inputName" className="col">Username:</label>
                                                    <div className="col">
                                                        <input type="text" className="form-control"
                                                            name="txtUsername"
                                                            id="txtUsername"
                                                            placeholder="Username"
                                                            onChange={this.onHandleChange}
                                                            defaultValue={this.state.txtUsername} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="inputName" className="col">Password: </label>
                                                    <div className="col">
                                                        <input type="password"
                                                            className="form-control"
                                                            name="txtPassword"
                                                            id="inputName"
                                                            placeholder="Password"
                                                            onChange={this.onHandleChange}
                                                            defaultValue={this.state.txtPassword} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <div className="form-group ">
                                                    <label htmlFor="inputName" className="col">Description: </label>
                                                    <textarea className="col" 
                                                    name="txtDesc" 
                                                    id="txtDesc" 
                                                    rows="3"
                                                    onChange={this.onHandleChange}
                                                    defaultValue={this.state.txtDesc}
                                                    placeholder="Description"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group ">
                                                    <label htmlFor="inputName" className="col">Gender: </label>
                                                    <select 
                                                    className="form-control" 
                                                    name="sltGender" 
                                                    id=""
                                                    value={this.state.sltGender}
                                                    onChange={this.onHandleChange}>
                                                        <option value={0}>Male</option>
                                                        <option value={1} >Female</option>
                                                      </select>
                                                </div>
                                            </div>
                                            <div className="radio" >
                                                <label>Language:</label>
                                                <br></br>
                                                <label>
                                                    <input type="radio" 
                                                    name="rdLang" 
                                                    value="en"
                                                    onChange={this.onHandleChange}
                                                    defaultChecked={this.state.rdLang === 'en' ? true : false}
                                                    ></input>
                                                    English 
                                                </label>
                                                <label>
                                                    <input 
                                                    type="radio" 
                                                    name="rdLang" 
                                                    value="vi"
                                                    onChange={this.onHandleChange}
                                                    defaultChecked={this.state.rdLang === 'vi' ? true : false}></input>
                                                    Tiếng Việt 
                                                </label>
                                            </div>

                                        
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                <label>Hobby :</label>
                                                <div className="checkbox">
                                                    <label >
                                                        <input 
                                                        type="checkbox" 
                                                        name="chkMovie" 
                                                        value = {true}
                                                        onChange={this.onHandleChange}
                                                            checked={this.state.chkMovie === true ? true : false}></input>
                                                        Movie
        
                                                    </label>
                                                    <label >
                                                        <input 
                                                        type="checkbox" 
                                                        name="chkMusic" 
                                                        value={true}
                                                        onChange={this.onHandleChange}
                                                            checked={this.state.chkMusic === true ? true : false}></input>
                                                        Music
                                                    </label>
                                                    <label>
                                                        <input 
                                                        type="checkbox" 
                                                        name="chkTravel" 
                                                        value={true} 
                                                        onChange={this.onHandleChange}
                                                            checked={this.state.chkTravel === true ? true : false}></input>
                                                        Travel
        
                                                    </label>
                                                    <label>
                                                        <input 
                                                        type="checkbox" 
                                                        name="chkSport" 
                                                        value={true} 
                                                        onChange={this.onHandleChange}
                                                        checked={this.state.chkSport===true?true:false}></input>
                                                        Sport
                                                    </label>
                                                </div>
                                        </div>
                                        
                                            
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <button type="submit" className="btn-outline  success-outline">Save</button>
                                            <button type="reset" className="btn-outline  info-outline mg">Delete</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;
