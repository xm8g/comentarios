import React from 'react';

const Comment = (props) =>  {
    
        return(
            <div className="card">
                <p className="card-body">{props.comment.comment}
                <br /></p>
            </div>
        )
    
}

export default Comment;
