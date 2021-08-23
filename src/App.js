import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateTree from './components/CreateTree';
import ShowTreeList from './components/ShowTreeList';
import ShowTreeDetails from './components/ShowTreeDetails';
import UpdateTreeInfo from './components/UpdateTreeInfo';
import AddAnEntry from './components/AddAnEntry';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowTreeList} />
          <Route path='/create-tree' component={CreateTree} />
          <Route path='/edit-tree/:id' component={UpdateTreeInfo} />
          <Route path='/add-an-entry/:id' component={AddAnEntry} />
          <Route path='/show-tree/:id' component={ShowTreeDetails} />
        </div>
      </Router>
    );
  }
}

export default App;