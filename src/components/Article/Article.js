import React from "react";

import classes from "./Article.module.css";

const Article = (props) => {
  return (
    <div className={classes.Article}>
      <p className={classes.Text}>{props.children}</p>
      <div className={classes.Footer}>
        <h5 className={classes.Author}>{props.author}</h5>
        <h5 className={classes.Date}>{props.date}</h5>
      </div>
    </div>
  );
};

export default Article;
