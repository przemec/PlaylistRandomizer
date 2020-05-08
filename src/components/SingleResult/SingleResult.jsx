import React from "react";
import { Grid } from "@material-ui/core/";
import * as S from "./style";

const SingleResult = ({ song, index, changeSong }) => {
  const { thumbnails, title, resourceId } = song.snippet;
  return (
    <S.StyledContainer
      container
      justify="flex-start"
      alignContent="center"
      onClick={() => changeSong(index)}
      id={resourceId.videoId}
      isplaying={isPlaying ? 1 : 0}
    >
      <Grid style={{ lineHeight: "90px" }}>{index + 1}.</Grid>
      {thumbnails && (
        <Grid style={{ background: `url(${thumbnails.medium.url})`, width: "160px", height: "90px", backgroundSize: "160px 90px" }} />
      )}
      <Grid style={{ lineHeight: "90px" }}>{title}</Grid>
    </S.StyledContainer>
  );
};

export default SingleResult;
