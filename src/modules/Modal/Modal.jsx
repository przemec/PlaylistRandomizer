import React from "react";
import * as S from "./style";
import SingleResult from "../../components/SingleResult";

const Modal = ({ component }) => {
  return (
    <S.ModalBackground>
      <S.ComponentWrapper>{component}</S.ComponentWrapper>
    </S.ModalBackground>
  );
};

export default Modal;
