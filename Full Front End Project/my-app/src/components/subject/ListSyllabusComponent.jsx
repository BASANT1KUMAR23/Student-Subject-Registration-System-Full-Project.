import React, { Component } from 'react';
import SyllabusService from '../services/SyllabusService';

class ListSyllabusComponent extends Component {
    constructor (props){
        super(props)


        this.state ={
            syllabuses:[]
        }

        this.addSyllabus = this.addSyllabus.bind(this);
        this.editSyllabus =this.editSyllabus.bind(this);
        this.deleteSyllabus =this.deleteSyllabus.bind(this);
        
    }

    deleteSyllabus (id){
        SyllabusService.deleteSyllabus(id).then( res =>{

            this.setState({syllabuses: this.state.syllabuses.filter (syllabus => syllabus.id !== id)});
        })
    }

    viewSyllabus (id){
        this.props.history.push(`/view-syllabus/${id}`)
    }

    editSyllabus(id){
        this.props.history.push(`/add-syllabus/${id}`);

    }
    
    componentDidMount(){
        SyllabusService.getSyllabuses().then((res)=>{
            this.setState({syllabuses: res.data});
    });
    }

    addSyllabus(){
        this.props.history.push('/add-syllabus/_add');

    }
    render() {
        return (
            <div>
                <h2 className="text-center">ALL SUBJECTS</h2>
                <div className="row">
                    <button  className="btn btn-outline-dark" onClick={this.addSyllabus}>Add Subjects</button>
                </div><br/>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr className="text-center">
                            <th>Subject Name</th>
                            <th>Subject Code</th>
                            <th>Subject Basket</th>
                            <th>Subject Credit</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.syllabuses.map(
                                    syllabus =>
                                    <tr key={syllabus.id} className="text-center">
                                        <td>{syllabus.subName}</td>
                                        <td>{syllabus.subCode}</td>
                                        <td>{syllabus.subBasket}</td>
                                        <td>{syllabus.subCredit}</td>
                                        <td>
                                            <button onClick={() => this.editSyllabus(syllabus.id)} className="btn btn-dark btn-sm">Update</button>
                                            <button onClick={() => this.deleteSyllabus(syllabus.id)} style={{marginLeft:"10px"}}className="btn btn-danger btn-sm">Delete</button>
                                            <button onClick={() => this.viewSyllabus(syllabus.id)} style={{marginLeft:"10px"}}className="btn btn-secondary btn-sm">View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>

                </div>
            </div>
        );
    }
}

export default ListSyllabusComponent;


