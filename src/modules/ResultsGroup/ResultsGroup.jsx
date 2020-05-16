import React from "react";
import * as S from "./style";
import SingleResult from "../../components/SingleResult";
import { Hidden } from "@material-ui/core";

const ResultsGroup = ({ songs, changeSong, currentIndex }) => {
  const lp = songs.length.toString().length;
  const arr = songs.map((e, i) => (
    <SingleResult key={i} song={e} index={i} changeSong={changeSong} isPlaying={currentIndex === i} lp={lp} />
  ));
  return (
    <>
      <Hidden mdDown>
        <S.Styled100>{arr}</S.Styled100>
      </Hidden>
      <Hidden lgUp>
        <S.StyledList>{arr}</S.StyledList>
      </Hidden>
    </>
  );
};

export default ResultsGroup;
