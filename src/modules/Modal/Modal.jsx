import React from "react";
import * as S from "./style";
import { hideModal } from "../../store/modal/actions";
import { connect } from "react-redux";
import * as pages from "./pages";
import { Grid } from "@material-ui/core/";
import CloseIcon from "@material-ui/icons/Close";

const Modal = ({ isvisible, type, title, hideM }) => {
  const CurrentScreen = pages[type];
  document.body.style.position = isvisible ? "sticky" : "";
  return isvisible ? (
    <>
      <S.ModalBackground />
      <S.ModalWrapper onClick={() => hideM()}>
        <Grid container style={{ minHeight: "100vh" }} justify="center" alignItems="center">
          <S.ComponentWrapper onClick={(e) => e.stopPropagation()}>
            <S.Header>
              <S.Title>{title || "Error getting title..."}</S.Title>
              <S.CloseWrapper onClick={() => hideM()}>
                <CloseIcon />
              </S.CloseWrapper>
            </S.Header>
            <CurrentScreen />
          </S.ComponentWrapper>
        </Grid>
      </S.ModalWrapper>
    </>
  ) : (
    <></>
  );
};

const mapSTP = (state) => ({
  type: state.modal.type,
  title: state.modal.title,
  isvisible: state.modal.isvisible,
});
const mapDTP = (dispatch) => ({
  hideM: () => dispatch(hideModal()),
});

export default connect(mapSTP, mapDTP)(Modal);
