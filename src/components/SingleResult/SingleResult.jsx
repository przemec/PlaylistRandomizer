import React from "react";
import { gapi } from "gapi-script";

const SingleResult = ({ song, index }) => {
  return (
    <div>
      {index + 1}. {song.snippet.title}
    </div>
  );
};

export default SingleResult;
