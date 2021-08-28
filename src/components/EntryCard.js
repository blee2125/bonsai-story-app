import React from 'react';
import '../App.css';

const EntryCard = (props) => {
    const  entry  = props.entry;

    return(
        <div className="card-container">
            <img src="" alt="" />
            <div className="desc">
                
                <h3>{entry.notes}</h3>
                <p>{entry.image_url}</p>
                <p>{entry.entry_date}</p>
            </div>
        </div>
    )
};

export default EntryCard;