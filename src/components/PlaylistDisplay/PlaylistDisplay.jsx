import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setPlaylistID, showModal } from "../../store/modal/actions";
import * as S from "./style";
import * as PS from "../../store/playlists/actions";
import * as RP from "../../store/resumableplaylists/actions";
import Tooltip from "../../helpers/Tooltip";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";
import BarChartRounded from '@material-ui/icons/BarChartRounded';
import PlaylistPlayRoundedIcon from "@material-ui/icons/PlaylistPlayRounded";

const PlaylistDisplay = ({ listData, listId, type, isFav, toggleFav, deleteP, deleteRP, resumableplaylists, showM, setModalPlaylist }) => {
  const { thumbnail, title, author, publishedAt } = listData;
  const history = useHistory();
  const isresumable = resumableplaylists.map((e) => e.id).indexOf(listId) !== -1;
  return (
    <S.MainContainer onClick={() => history.push(`/list/${listId}`)} isresumable={isresumable ? 1 : 0}>
      <S.Cont isresumable={isresumable ? 1 : 0}>
        <S.Thumbnail src={thumbnail} loading="lazy" alt="[Error loading thumbnail]" />
        <S.DataContainer>
          <S.StyledTitle href={`https://www.youtube.com/playlist?list=${listId}`} onClick={(e) => e.preventDefault()}>
            {title}
          </S.StyledTitle>
          <S.StyledData>{publishedAt && `${publishedAt.split("-")[0]}, `}{author}</S.StyledData>
          <S.StyledData></S.StyledData>
        </S.DataContainer>
      </S.Cont>
      {type === "saved" && (
        <S.IconsContainer isresumable={isresumable ? 1 : 0}>
          <Tooltip title="Playlist details" placement="top">
            <S.IconWrapper
              onClick={(e) => {
                e.stopPropagation();
                setModalPlaylist(listId);
                showM("ListDetailsPage", "Playlist Details");
              }}
            >
              <BarChartRounded /> 
            </S.IconWrapper>
          </Tooltip>
          {isresumable && (
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
          )}
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

const mapSTP = (state) => ({
  resumableplaylists: state.resumableplaylists,
});

const mapDTP = (dispatch) => ({
  setModalPlaylist: (e) => dispatch(setPlaylistID(e)),
  showM: (type, title) => dispatch(showModal(type, title)),
  toggleFav: (e) => dispatch(PS.toggleFavourite(e)),
  deleteP: (e) => dispatch(PS.deletePlaylist(e)),
  deleteRP: (e) => dispatch(RP.deletePlaylist(e)),
});

export default connect(mapSTP, mapDTP)(PlaylistDisplay);
