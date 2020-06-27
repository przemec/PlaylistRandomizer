import React from "react";
import * as S from "./style";
import { hideModal } from "../../store/modal/actions";
import { connect } from "react-redux";
import * as pages from "./pages";
import { Grid } from "@material-ui/core/";

const Modal = ({ isvisible, type, hideM }) => {
  const CurrentScreen = pages[type];
  return isvisible ? (
    <>
      <S.ModalBackground />
      <S.ModalWrapper onClick={() => hideM()}>
        <Grid container style={{ minHeight: "100vh" }} justify="center" alignItems="center">
          <S.ComponentWrapper onClick={(e) => e.stopPropagation()}>
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
  isvisible: state.modal.isvisible,
});
const mapDTP = (dispatch) => ({
  hideM: () => dispatch(hideModal()),
});

export default connect(mapSTP, mapDTP)(Modal);
