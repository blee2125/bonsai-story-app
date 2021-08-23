import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showTreeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tree: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/trees/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showTreesDetails-API-response: " + res.data);
        this.setState({
          tree: res.data
        })
        //console.log(res.data)
      })
      .catch(err => {
        console.log("Error from ShowTreeDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/trees/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowTreeDetails_deleteClick");
      })
  };


  render() {

    const tree = this.state.tree;
    let TreeItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>name</td>
            <td>{ tree.name }</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Type of Tree</td>
            <td>{ tree.typeOfTree }</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Date Planted</td>
            <td>{ tree.date_planted }</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Description</td>
            <td>{ tree.description }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowTreeDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Tree List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Tree's Record</h1>
              <p className="lead text-center">
                  View Tree's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { TreeItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,tree._id)}>Delete Tree</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/add-an-entry/${tree._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Add an Entry
              </Link>
              <br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-tree/${tree._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Tree
              </Link>
              <br />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default showTreeDetails;