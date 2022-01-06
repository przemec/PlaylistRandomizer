import React from "react";
import * as S from "./style";
import { hideModal } from "../../store/modal/actions";
import resizedContainerRef from "../../helpers/ResizeObserver";
import { connect } from "react-redux";
import * as pages from "./pages";
import { Grid } from "@material-ui/core/";
import CloseIcon from "@material-ui/icons/Close";

const Modal = ({ isvisible, type, title, hideM }) => {
  const CurrentScreen = pages[type];

  //after closing modal body will be in the same position as before opening it
  let [savedscroll, savescroll] = React.useState();
  React.useEffect(() => {
    if (isvisible) {
      savescroll(document.body.getBoundingClientRect().y);
      //preventing body scrolling
      document.body.style.position = "fixed";
    } else {
      document.body.style.position = "";
      window.scrollTo(0, parseInt(savedscroll || "0") * -1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isvisible]);

  //modal won't be too big, it will alternate its height depending on its content
  const onResize = (element) => {
    const { height } = element.contentRect;
    document.getElementById("resizable-wrap").style.height = `${Math.ceil(height)}px`;
  };

  return isvisible ? (
    <>
      <S.ModalBackground />
      <S.ModalWrapper onClick={() => hideM()}>
        <Grid container style={{ height: "100vh" }} justify="center" alignItems="center">
          <S.ComponentWrapper onClick={(e) => e.stopPropagation()}>
            <S.Header>
              <S.Title>{title || "Error getting title..."}</S.Title>
              <S.CloseWrapper onClick={() => hideM()}>
                <CloseIcon />
              </S.CloseWrapper>
            </S.Header>
            <S.ResizableWrap id="resizable-wrap">
              <S.ContainerRel>
                <S.ContainerAbs>
                  <CurrentScreen resizeref={() => resizedContainerRef(onResize)} />
                </S.ContainerAbs>
              </S.ContainerRel>
            </S.ResizableWrap>
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
