import React from "react";
import * as S from "./style";

const SongDisplay =  React.memo(({ song, index, page, changeSong }) => {
  const { thumbnail, title, videoId } = song;
  return (
    <S.StyledContainer onClick={() => changeSong(index, page, "click")} id={`index${index + page * 200}`}>
      <S.StyledLp>{index + 1 + page * 200}.</S.StyledLp>
      {thumbnail && thumbnail.url ? (
        <S.Thumbnail src={thumbnail.url} loading="lazy" alt="..." />
      ) : (
        <S.Thumbnail src={thumbnail} loading="lazy" alt="..." />
      )}
      <S.StyledTitle
        className="title"
        href={`https://youtu.be/${videoId}`}
        onClick={(e) => e.preventDefault()}
      >
        {title}
      </S.StyledTitle>
    </S.StyledContainer>
  );
}, (prevProps, nextProps) => {
  if (prevProps.show === nextProps.show) return true;
  return false;
});

export default SongDisplay;
