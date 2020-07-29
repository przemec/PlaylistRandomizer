import React from "react";
import * as S from "./style";

const SongDisplay = ({ song, index, page, changeSong, isPlaying }) => {
  const { thumbnail, title, videoId } = song;
  return (
    <S.StyledContainer onClick={() => changeSong(index, page, "click")} id={`index${index + page * 200}`} isplaying={isPlaying ? 1 : 0}>
      <S.StyledLp isplaying={isPlaying ? 1 : 0}>{index + 1 + page * 200}.</S.StyledLp>
      {thumbnail && <S.Thumbnail src={thumbnail.url} loading="lazy" alt="..." />}
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

export default SongDisplay;
