import React from "react";
import * as S from "./style";

const SongDisplay =  React.memo(
  ({ song, index, page, changeSong, displayType }) => {
    const { thumbnail, title, videoId } = song;
    let lpwidth = displayType === "details" ? (index + 1 + page * 200).toString().length + 1 : index.toString().length + 1
    
    return displayType === "details" ? (
      <S.StyledContainer>
        <S.StyledLp lpwidth={lpwidth}>{index + 1}.</S.StyledLp>
        {thumbnail && thumbnail.url ? (
          <S.Thumbnail src={thumbnail.url} loading="lazy" alt="..." />
        ) : (
          <S.Thumbnail src={thumbnail} loading="lazy" alt="..." />
        )}
        <S.StyledTitle
          className="title"
          href={`https://youtu.be/${videoId}`}
          onClick={(e) => e.preventDefault()} 
          lpwidth={lpwidth}
        >
          {title}
        </S.StyledTitle>
      </S.StyledContainer>
    ) : (
      <S.StyledContainer onClick={() => changeSong(index, page, "click")} id={`index${index + page * 200}`}>
        <S.StyledLp lpwidth={lpwidth}>{index + 1 + page * 200}.</S.StyledLp>
        {thumbnail && thumbnail.url ? (
          <S.Thumbnail src={thumbnail.url} loading="lazy" alt="..." />
        ) : (
          <S.Thumbnail src={thumbnail} loading="lazy" alt="..." />
        )}
        <S.StyledTitle
          className="title"
          href={`https://youtu.be/${videoId}`}
          onClick={(e) => e.preventDefault()} 
          lpwidth={lpwidth}
        >
          {title}
        </S.StyledTitle>
      </S.StyledContainer>
    )
  },
  (prevProps, nextProps) => (prevProps.song.title === nextProps.song.title)
);

export default SongDisplay;
