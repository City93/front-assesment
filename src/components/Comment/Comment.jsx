import React from "react";

const Comment = ({ commentInfo }) => {
  return (
    <div className="postDetail">
      <hr id="line" />
      <p className="userName" id="comment">
        {commentInfo.email}
      </p>
      <p className="postText"> {commentInfo.body} </p>
    </div>
  );
};

export default Comment;
