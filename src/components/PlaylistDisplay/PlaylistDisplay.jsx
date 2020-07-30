import React from "react";
import * as S from "./style";
import { useHistory } from "react-router-dom";
import Tooltip from "../../helpers/Tooltip";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

const PlaylistDisplay = ({ listData, listId, type }) => {
  const { thumbnail, title, author, publishedAt } = listData;
  const history = useHistory();
  return (
    <S.MainContainer onClick={() => history.push(`/list/${listId}`)}>
      <S.Cont>
        <S.Thumbnail src={thumbnail} loading="lazy" alt="[Error loading thumbnail]" />
        <S.DataContainer>
          <S.StyledTitle href={`https://www.youtube.com/playlist?list=${listId}`} onClick={(e) => e.preventDefault()}>
            {title}
          </S.StyledTitle>
          <S.StyledData>Author: {author}</S.StyledData>
          <S.StyledData>Created: {publishedAt && publishedAt.split("T")[0]}</S.StyledData>
        </S.DataContainer>
      </S.Cont>
      {type === "saved" && (
        <S.IconsContainer>
          <Tooltip title="Toggle favourite">
            <S.IconWrapper>
              <StarBorderRoundedIcon />
            </S.IconWrapper>
          </Tooltip>
          <Tooltip title="Delete from saved">
            <S.IconWrapper>
              <DeleteRoundedIcon />
            </S.IconWrapper>
          </Tooltip>
        </S.IconsContainer>
      )}
    </S.MainContainer>
  );
};

export default PlaylistDisplay;
