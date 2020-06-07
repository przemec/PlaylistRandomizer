import React from "react";
import * as S from "./style";
import { switchModal } from "../../store/modal/actions";
import { connect } from "react-redux";

const Modal = ({ component, withShadow, isRemovable, switchM, modal }) => {
  return modal ? (
    <S.ModalBackground withshadow={withShadow ? 1 : 0} onClick={() => isRemovable && switchM(false)}>
      <S.ComponentWrapper>{component}</S.ComponentWrapper>
    </S.ModalBackground>
  ) : (
    <></>
  );
};

const mapSTP = (state) => ({
  modal: state.modal,
});
const mapDTP = (dispatch) => ({
  switchM: (e) => {
    dispatch(switchModal(e));
  },
});

export default connect(mapSTP, mapDTP)(Modal);
