import React, { Component } from 'react';
//import SyllabusService from '../services/SyllabusService';

class UpdateSyllabusComponent extends Component {
    // constructor(props){
    //     super(props)

    //     this.state={
    //        // id:this.props.match.params.id,
    //         subName:'',
    //         subCode:'',
    //         subBasket:'',
    //         subCredit:''


    //     }
    //     this.changeSubNameHandler =this.changeSubNameHandler.bind(this);

    //     this.changeSubCodeHandler =this.changeSubCodeHandler.bind(this);

    //     this.changeSubBasketHandler =this.changeSubBasketHandler.bind(this);

    //     this.changeSubCreditHandler =this.changeSubCreditHandler.bind(this);

    //     this.updateSyllabus = this.updateSyllabus.bind(this);



    // }
    // componentDidMount(){
    //     SyllabusService.getSyllabusById(this.state.id).then((res)=>{
    //         let syllabus =res.data;
    //         this.setState({subName: syllabus.subName,
    //         subCode : syllabus.subCode,
    //         subBasket:syllabus.subBasket,
    //         subCredit:syllabus.subCredit
                
    //         });
            
    //     });
    // }

    // updateSyllabus = (e)=>{
    //     e.preventDefault();

    //     let syllabus ={subName : this.state.subName , subCode : this.state.subCode ,subBasket:this.state.subBasket ,subCredit:this.state.subCredit};
    //     console.log('syllabus => '+ JSON.stringify(syllabus));
    //     SyllabusService.updateSyllabus(syllabus,this.state.id).then(res=>{
    //         this.props.history.push('/syllabuses');


    //     });

       
    // }
    

    // changeSubNameHandler = (event)=>{
    //     this.setState({subName: event.target.value});
    // }
    // changeSubCodeHandler = (event)=>{
    //     this.setState({subCode: event.target.value});
    // }
    // changeSubBasketHandler = (event)=>{
    //     this.setState({subBasket: event.target.value});
    // }
    // changeSubCreditHandler = (event)=>{
    //     this.setState({subCredit: event.target.value});
    // }

    // cancel(){
    //     this.props.history.push('/syllabuses');

    // }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Subject</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group ">
                                        <label>Subject Name :</label>
                                        <input placeholder="Subject Name" name="subName" className="form-control" 
                                        />
                                    </div>
                                    <div className="form-group ">
                                        <label>Subject Code :</label>
                                        <input placeholder="Subject Code" name="subCode" className="form-control" 
                                        value={this.state.subCode} onChange={this.changeSubCodeHandler}/>
                                    </div>
                                    <div className="form-group ">
                                        <label>Subject Basket :</label>
                                        <input placeholder="Subject Basket" name="subBasket" className="form-control" 
                                        value={this.state.subBasket} onChange={this.changeSubBasketHandler}/>
                                    </div>
                                    <div className="form-group ">
                                        <label>Subject Credit :</label>
                                        <input placeholder="Subject Credit" name="subCredit" className="form-control" 
                                         value={this.state.subCredit} onChange={this.changeSubCreditHandler}/>
                                    </div><br/>
                                    <button className="btn btn-dark btn-sm" onClick={this.updateSyllabus}>Save</button>
                                    <button className="btn btn-danger btn-sm"  onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default UpdateSyllabusComponent;