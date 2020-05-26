import React from "react";
import * as S from "./style";

const SingleResult = ({ song, index, changeSong, isPlaying, lp }) => {
  const { thumbnails, title, resourceId } = song.snippet;
  return (
    <S.StyledContainer onClick={() => changeSong(index)} id={resourceId.videoId} isplaying={isPlaying ? 1 : 0}>
      <S.StyledLp lp={lp}>{index + 1}.</S.StyledLp>
      {thumbnails && <S.Thumbnail thumb={thumbnails.medium.url} />}
      <S.StyledTitle lp={lp}>{title}</S.StyledTitle>
    </S.StyledContainer>
  );
};

export default SingleResult;
