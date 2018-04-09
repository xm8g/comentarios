import React, { Component } from 'react';

const Comment = (props) =>  {
    
        return(
            <div className="card">
                <p className="card-body">{props.comment.comment}
                <br /><b style={{fontSize: 9}}>por: {props.comment.user.name}</b></p>
            </div>
        )
    
}

export default Comment;