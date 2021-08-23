import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TreeCard from './TreeCard';

class ShowTreeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trees: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/trees')
      .then(res => {
        this.setState({
          trees: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowTreeList');
      })
  };


  render() {
    const trees = this.state.trees;
    console.log("PrintTree: " + trees);
    let treeList;

    if(!trees) {
      treeList = "there is no tree record!";
    } else {
      treeList = trees.map((tree, k) =>
        <TreeCard tree={tree} key={k} />
      );
    }

    return (
      <div className="ShowTreeList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Trees List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-tree" className="btn btn-outline-warning float-right">
                + Add New Tree
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {treeList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowTreeList;