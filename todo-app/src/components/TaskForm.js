import React, { Component } from 'react';

class TaskForm extends Component {

    onCloseForm = ()=>{
        this.props.closeForm();
    }
    render() {
        return (
            
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="card">
                    <div className="card-header bg-primary text-white">Thêm công việc
                    <span className="fa fa-times-circle fr" aria-hidden="true" onClick={()=>this.onCloseForm()}></span>
                    </div>
                    
                    <div className="card-body">
                        <div className="form-group">
                            <label> Tên: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="txtTaskName"
                                placeholder="Tên công việc">
                            </input>
                            <label> Độ ưu tiên: </label>
                           
                            <select name="sltPriority" id="sltPriority" className="form-control" required="required" defaultValue={0}>
                               <option value={0}>Cao</option>
                               <option value={1}>Trung bình</option>
                               <option value={2}>Thấp</option>
                           </select>
                            
                        
                        <div className="mx-auto text-center mt-2">
                                    <button type="button" className="btn btn-success m-1 px-4"><i className="fa fa-save ml-1"></i> Lưu</button>
                                <button type="button" className="btn btn-danger m-1 px-4 text-white"><i className="fa fa-close ml-1"></i> Hủy</button>
                        </div>                              
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default TaskForm;