import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const TreeCard = (props) => {
    const  tree  = props.tree;

    return(
        <div className="card-container">
            <img src="" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-tree/${tree._id}`}>
                        { tree.name }
                    </Link>
                </h2>
                <h3>{}</h3>
                <p>{tree.description}</p>
            </div>
        </div>
    )
};

export default TreeCard;