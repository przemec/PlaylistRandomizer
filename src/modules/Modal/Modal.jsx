import React from "react";
import * as S from "./style";
import { hideModal } from "../../store/modal/actions";
import { connect } from "react-redux";
import * as pages from "./pages";

const Modal = ({ isvisible, type, hideM }) => {
  const CurrentScreen = pages[type];
  return isvisible ? (
    <S.ModalBackground onClick={() => hideM()}>
      <S.ComponentWrapper onClick={(e) => e.stopPropagation()}>
        <CurrentScreen />
      </S.ComponentWrapper>
    </S.ModalBackground>
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
