import React, { useState, useEffect } from "react";

import Article from "../src/components/Article/Article";
import CommentList from "../src/components/CommentList/CommentList";

import { comments, article, moreComments } from "../src/data";

import classes from "./Application.module.css";

function Application() {
  const [artc, setArtc] = useState({});
  const [cmts, setCmts] = useState([]);
  const [moreClicked, setMoreClicked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setArtc(article);
    }, 1000);
    setTimeout(() => {
      setCmts(comments);
    }, 3000);
  }, []);

  const getMoreComments = () => {
    setTimeout(() => {
      setCmts(comments.concat(moreComments));
      setMoreClicked(true);
    }, 1000);
  };

  return (
    <div className={classes.Container}>
      {artc.author && (
        <Article author={artc.author} date={artc.date}>
          {artc.text}
        </Article>
      )}
      {cmts.length > 0 && <h3 className={classes.Heading}>Comments:</h3>}
      <CommentList comments={cmts} />
      {cmts.length > 0 && !moreClicked && (
        <button className={classes.Button} onClick={getMoreComments}>
          More Comments
        </button>
      )}
    </div>
  );
}

export default Application;
