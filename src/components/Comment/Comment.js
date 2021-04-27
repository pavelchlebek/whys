import React from "react";

import classes from "./Comment.module.css";

const Comment = (props) => {
  return (
    <div className={classes.Comment}>
      <p className={classes.Text}>{props.text}</p>
      <div className={classes.Footer}>
        <h5 className={classes.Author}>{props.author}</h5>
        <h5 className={classes.Date}>{props.date}</h5>
      </div>
    </div>
  );
};

export default Comment;
