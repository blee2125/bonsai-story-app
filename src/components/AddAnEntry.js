import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class AddAnEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tree_id: '',
      image_url: '',
      notes: '',
      entry_date: ''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
// DELETE-this-note--->>> update this link and delete this
      .get('http://localhost:8082/api/trees/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, tree: res.data})
        console.log(res)
        this.setState({
            tree_id: res.data._id,
            image_url: res.data.image_url,
            notes: res.data.notes,
        })
      })
      .catch(err => {
        console.log("Error from AddAnEntry");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
        tree_id: this.state.tree_id,
        image_url: this.state.image_url,
        notes: this.state.notes,
    };

    axios
      .post('http://localhost:8082/api/trees/'+this.props.match.params.id+'/entry', data)
      .then(res => {
        this.props.history.push('/show-tree/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in AddAnEntry!");
      })
  };


  render() {
    return (
      <div className="AddAnEntry">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Tree List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add an Entry</h1>
              <p className="lead text-center">
                  Add an entry to keep track of this bonsai tree.
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="image_url">Image URL</label>
              <input
                type='text'
                placeholder='A picture is worth a thousand words'
                name='image_url'
                className='form-control'
                value={this.state.image_url}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="notes">Notes</label>
              <input
                type='text'
                placeholder='Add a few words about the tree'
                name='notes'
                className='form-control'
                value={this.state.notes}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Add Entry</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default AddAnEntry;