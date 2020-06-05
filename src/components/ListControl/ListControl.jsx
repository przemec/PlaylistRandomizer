import React from "react";
import * as S from "./style";
import { Hidden } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const ListControl = ({ swapPage, isNextActive, isPrevActive }) => (
  <>
    <Hidden smDown>
      <S.ListControl className="listControl">
        <S.ArrowWrapper onClick={() => swapPage(-1)} isactive={isPrevActive ? 1 : 0}>
          <ArrowBackIosIcon />
        </S.ArrowWrapper>
        <S.ArrowWrapper onClick={() => swapPage(1)} isactive={isNextActive ? 1 : 0}>
          <ArrowForwardIosIcon />
        </S.ArrowWrapper>
      </S.ListControl>
    </Hidden>
    <Hidden mdUp>
      <S.ListControlMob className="listControl">
        <S.ArrowWrapper onClick={() => swapPage(-1)} isactive={isPrevActive ? 1 : 0}>
          <ArrowBackIosIcon />
        </S.ArrowWrapper>
        <S.ArrowWrapper onClick={() => swapPage(1)} isactive={isNextActive ? 1 : 0}>
          <ArrowForwardIosIcon />
        </S.ArrowWrapper>
      </S.ListControlMob>
    </Hidden>
  </>
);

export default ListControl;
