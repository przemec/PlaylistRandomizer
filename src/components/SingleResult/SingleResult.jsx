import React from "react";
import { Grid } from "@material-ui/core/";
import * as S from "./style";

const SingleResult = ({ song, index, changeSong, isPlaying, lp }) => {
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
      <S.StyledLp lp={lp}>{index + 1}.</S.StyledLp>
      <S.StyledSong lp={lp}>
        <Grid item>
          {thumbnails && (
            <Grid style={{ background: `url(${thumbnails.medium.url})`, width: "160px", height: "90px", backgroundSize: "160px 90px" }} />
          )}
        </Grid>
        <S.StyledTitle item>{title}</S.StyledTitle>
      </S.StyledSong>
    </S.StyledContainer>
  );
};

export default SingleResult;
