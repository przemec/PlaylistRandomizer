import React from "react";
import * as S from "./style";
import { useHistory } from "react-router-dom";

const PlaylistDisplay = ({ listData, listId }) => {
  const { thumbnail, title, author, publishedAt } = listData;
  const history = useHistory();
  return (
    <S.MainContainer onClick={() => history.push(`/list/${listId}`)}>
      {thumbnail && <S.Thumbnail src={thumbnail} loading="lazy" alt="..." />}
      <S.DataContainer>
        <S.StyledTitle href={`https://www.youtube.com/playlist?list=${listId}`} onClick={(e) => e.preventDefault()}>
          {title}
        </S.StyledTitle>
        <S.StyledData>Author: {author}</S.StyledData>
        <S.StyledData>Created: {publishedAt && publishedAt.split("T")[0]}</S.StyledData>
      </S.DataContainer>
    </S.MainContainer>
  );
};

export default PlaylistDisplay;
