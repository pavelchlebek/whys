import React from "react";

import Comment from "../Comment/Comment";

const CommentList = (props) => {
  const comments = props.comments;
  comments.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });
  return comments.map((comment) => {
    return (
      <Comment key={comment.id} author={comment.author} date={comment.date} text={comment.text} />
    );
  });
};

export default CommentList;
