import React from "react";
import * as S from "./style";
import SingleResult from "../../components/SingleResult";

const ResultsGroup = ({ songs, changeSong, currentIndex }) => {
  const lp = songs.length.toString().length;
  const arr = songs.map((e, i) => (
    <SingleResult key={i} song={e} index={i} changeSong={changeSong} isPlaying={currentIndex === i} lp={lp} />
  ));
  return <S.StyledList>{arr}</S.StyledList>;
};

export default ResultsGroup;
