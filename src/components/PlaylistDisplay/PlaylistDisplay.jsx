import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as S from "./style";
import * as PS from "../../store/playlists/actions";
import * as RP from "../../store/resumableplaylists/actions";
import Tooltip from "../../helpers/Tooltip";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";
import PlaylistPlayRoundedIcon from "@material-ui/icons/PlaylistPlayRounded";

const PlaylistDisplay = ({ listData, listId, type, isFav, toggleFav, deleteP, deleteRP }) => {
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
          <Tooltip title="Resume playing" placement="top">
            <S.IconWrapper
              onClick={(e) => {
                e.stopPropagation();
                history.push(`/list/${listId}/continue`);
              }}
            >
              <PlaylistPlayRoundedIcon />
            </S.IconWrapper>
          </Tooltip>
          <Tooltip title="Toggle favourite" placement="top">
            <S.IconWrapper
              isfav={isFav ? 1 : 0}
              onClick={(e) => {
                e.stopPropagation();
                toggleFav(listId);
              }}
            >
              {isFav ? <StarRoundedIcon /> : <StarBorderRoundedIcon />}
            </S.IconWrapper>
          </Tooltip>
          <Tooltip title="Delete from saved" placement="top">
            <S.IconWrapper
              onClick={(e) => {
                e.stopPropagation();
                let confirm = window.confirm(`Delete ${title}?`);
                if (confirm) {
                  deleteP(listId);
                  deleteRP(listId);
                }
              }}
            >
              <DeleteOutlineRoundedIcon />
            </S.IconWrapper>
          </Tooltip>
        </S.IconsContainer>
      )}
    </S.MainContainer>
  );
};

const mapDTP = (dispatch) => ({
  toggleFav: (e) => dispatch(PS.toggleFavourite(e)),
  deleteP: (e) => dispatch(PS.deletePlaylist(e)),
  deleteRP: (e) => dispatch(RP.deletePlaylist(e)),
});

export default connect(null, mapDTP)(PlaylistDisplay);
