import React from "react";

import classes from "./article.module.css";

const Article = (props) => {
  return <div className={classes.Body}>{props.body}</div>;
};

export default Article;
