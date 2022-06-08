import React, {Component, Fragment} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';

class Notes extends Component{
    constructor(){
        super();
        this.state={
            title: "",
            body: "",
            isDisplayForm: false
        }
    }

    saveNotes = (e) => {
        e.preventDefault();
        if(!this.state.title || !this.state.body) return;
        let newNote = {title: this.state.title, body: this.state.body}
        this.props.addNotes(newNote);
        this.setState({title: "", body:""});
    }

    showForm= () => {
        this.setState({isDisplayForm: true});
    }

    render(){
        return(
            <Fragment>
                <div className="container row justify-content-center">
                    <div className="row">
                        <div className="offset-2 col-md-10 bg-light">
                            <h1>G Notes</h1>
                        </div>
                    </div>
                    <div className="offset-2 col-md-4 border">
                        <ul className="list-group list-group-flush">
                        {this.props.notesList.map(note => {
                            return(
                                <Fragment>
                                 <li key={note.title} className="list-group-item border-bottom">
                                     <span>{note.title}</span><br/>
                                     <span>{note.body}</span>
                                 </li>
                                </Fragment>
                            )
                        })}
                        </ul>
                    </div>
                    <div className="col-md-6 border-top">
                        <p></p>
                        <div className="row">
                            <div className="offset-md-9 col-md-3">
                                <button type="button" className="btn btn-light" onClick={this.showForm}>
                                <span className="btn-label"><FontAwesomeIcon icon={faPlus} /></span>Add Note</button>
                            </div>
                        </div>
                        {this.state.isDisplayForm ? <form>
                            <div className="mb-3 form-group">
                                <label className="form-label"><strong>Title: </strong></label>
                                <input type="text" className="form-control" value={this.state.title} onChange={(e) => this.setState({title: e.target.value})}/>
                            </div>
                            <div className="form-group">
                                <label className="form-label"><strong>Body:</strong></label>
                                <textarea rows="10" className="form-control" value={this.state.body} onChange={(e) => this.setState({body: e.target.value})} />
                            </div> <br/>
                            <div className="row">
                                <div className="offset-md-10 col-md-2">
                                    <button className="btn btn-primary" onClick={this.saveNotes}>Save</button>
                                </div>
                            </div>
                        </form> : null}
                    </div>
                </div>
            </Fragment>
        ) 
    }
}

const mapStateToProps = state => {
    return {
      notesList: state
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return{
      addNotes: (obj)=> dispatch({type: 'ADD', payload: obj})
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Notes);