import React, {Component} from 'react';
import Employees from './data/employees.json';

export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       items:Employees.Employees,
       term:''
    };
  };
  

onChange  =(event)=>{
  const target=event.target;
  const value = target.value;
  // return console.log(value)
  this.setState({
    term:value
  })
  console.log(this.state.term)
}

onSubmit= (event)=>{
  event.preventDefault();
  return console.log(event.target.value)
}

searchFor (term){
  return (x)=>{
    return x.preferredFullName.toLowerCase().includes(term.toLowerCase())||!term
  }
}
  render () {
    // console.log (this.state.items);
    const {items,term} = this.state;
    return (
      <form className="container" onSubmit={this.onSubmit}>
        <div className="form-group my-3">
          <input
            type="text"
            name="filter"
            id="filter"
            className="form-control"
            placeholder="Keyword to search"
            aria-describedby="helpId"
            onChange= {this.onChange}
            value={term}
          />
          <div className="row m-2 ">
            {items.filter(this.searchFor(term)).map ((employee, index) => {
              return (
                <div className="card col-3 m-2 p-1" key={index}>
                  <div className="card-body p-2">
                        <h4 className="card-title text-center text-primary">
                          {employee.preferredFullName}
                        </h4>
                        <p className="card-text">Region :{employee.region}</p>
                        <p className="card-text">Job name: {employee.jobTitleName}</p>
                        <p className="card-text">Phone: {employee.phoneNumber}</p>
                        <p className="card-text">Email: {employee.emailAddress}</p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </form>
    );
  }
}
