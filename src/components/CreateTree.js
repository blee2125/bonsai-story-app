import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateTree extends Component {
  constructor() {
    super();
    this.state = {
        name: '',
        typeOfTree: '',
        description: '',
        entries: '',
        date_planted: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      name: this.state.name,
      typeOfTree: this.state.typeOfTree,
      description: this.state.description,
      entries: this.state.entries,
      date_planted: this.state.date_planted
    };

    axios
      .post('http://localhost:8082/api/trees', data)
      .then(res => {
        this.setState({
            name: '',
            typeOfTree: '',
            description: '',
            entries: '',
            date_planted: ''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateTree!");
      })
  };

  render() {
    return (
      <div className="CreateTree">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Tree List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Tree</h1>
              <p className="lead text-center">
                  Create new tree
              </p>

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
                placeholder='Describe this tree'
                name='description'
                className='form-control'
                value={this.state.description}
                onChange={this.onChange}
              />
            </div>

            {/* <div className='form-group'>
            <label htmlFor="entries">entries</label>
              <input
                type='text'
                placeholder='entries of this entries'
                name='entries'
                className='form-control'
                value={this.state.entries}
                onChange={this.onChange}
              />
            </div> */}

            {/* <div className='form-group'>
            <label htmlFor="date_planted">date_planted</label>
              <input
                type='date'
                placeholder='date_planted'
                name='date_planted'
                className='form-control'
                value={this.state.date_planted}
                onChange={this.onChange}
              />
            </div> */}

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateTree;