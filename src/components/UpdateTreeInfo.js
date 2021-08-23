import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateTreeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      typeOfTree: '',
      description: '',
      entries: '',
      date_planted: ''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/trees/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, tree: res.data})
        this.setState({
            name: res.data.name,
            typeOfTree: res.data.typeOfTree,
            description: res.data.description,
            entries: res.data.entries,
            date_planted: res.data.date_planted
        })
      })
      .catch(err => {
        console.log("Error from UpdateTreeInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
        name: this.state.name,
        typeOfTree: this.state.typeOfTree,
        description: this.state.description,
        entries: this.state.entries,
        date_planted: this.state.date_planted
    };

    axios
      .put('http://localhost:8082/api/trees/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-tree/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateTreeInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateTreeInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Tree List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Tree</h1>
              <p className="lead text-center">
                  Update Tree's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="name">name</label>
              <input
                type='text'
                placeholder='name of the tree'
                name='name'
                className='form-control'
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="typeOfTree">type of tree</label>
              <input
                type='text'
                placeholder='type of tree'
                name='typeOfTree'
                className='form-control'
                value={this.state.typeOfTree}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="description">Description</label>
              <input
                type='text'
                placeholder='Describe this book'
                name='description'
                className='form-control'
                value={this.state.description}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="entries">entries</label>
              <input
                type='text'
                placeholder='entries of this entries'
                name='entries'
                className='form-control'
                value={this.state.entries}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="date_planted">date_planted</label>
              <input
                type='date'
                placeholder='date_planted'
                name='date_planted'
                className='form-control'
                value={this.state.date_planted}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Book</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateTreeInfo;