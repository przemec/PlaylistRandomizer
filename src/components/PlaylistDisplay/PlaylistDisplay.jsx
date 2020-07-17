import React from "react";
import * as S from "./style";
import { useHistory } from "react-router-dom";

const SongDisplay = ({ listData, listId }) => {
  const { thumbnail, title, author } = listData;
  const history = useHistory();
  return (
    <S.StyledContainer onClick={() => history.push(`/list/${listId}`)}>
      {thumbnail && <S.Thumbnail src={thumbnail} loading="lazy" alt="..." />}
      <S.StyledTitle href={`https://www.youtube.com/playlist?list=${listId}`} onClick={(e) => e.preventDefault()}>
        {title}, {author}
      </S.StyledTitle>
    </S.StyledContainer>
  );
};

export default SongDisplay;
