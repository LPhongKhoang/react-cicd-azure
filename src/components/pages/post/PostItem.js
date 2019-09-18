import React from 'react';

const PostItem = (props) => {

  return (
      <div>
        <div>{props.title}</div>
        <div>{props.body.slice(0, 10) + "..." }</div>
      </div>
  );
  
}

export default PostItem;