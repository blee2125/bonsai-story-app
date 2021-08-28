import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EntryCard from './EntryCard';

class ShowEntryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    };
  }

  componentDidMount() {
    
  };


  render() {
    const entry = this.state.entry;
    console.log("PrintEntry: " + entry);
    let entryList;

    if(!entries) {
      entryList = "there are no entry record!";
    } else {
      entryList = entries.map((entry, k) =>
        <EntryCard entry={entry} key={k} />
      );
    }

    return (
      <div className="ShowEntryList">
        <div className="container">
          
        </div>
      </div>
    );
  }
}

export default ShowEntryList;