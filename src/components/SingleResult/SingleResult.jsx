import React from "react";
import * as S from "./style";

const SingleResult = ({ song, index, page, changeSong, isPlaying }) => {
  const { thumbnail, title, videoId } = song;
  // console.log(song);
  return (
    <S.StyledContainer onClick={() => changeSong(index, page)} id={`index${index}`} isplaying={isPlaying ? 1 : 0}>
      <S.StyledLp isplaying={isPlaying ? 1 : 0}>{index + 1 + page * 200}.</S.StyledLp>
      {thumbnail && <S.Thumbnail thumb={thumbnail.url} />}
      <S.StyledTitle
        isplaying={isPlaying ? 1 : 0}
        className="title"
        href={`https://youtu.be/${videoId}`}
        onClick={(e) => e.preventDefault()}
      >
        {title}
      </S.StyledTitle>
    </S.StyledContainer>
  );
};

export default SingleResult;
