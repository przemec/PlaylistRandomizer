import React from "react";
import * as S from "./style";
import SingleResult from "../../components/SingleResult";

const ResultsGroup = ({ songs, page, changeSong, currentIndex, isHighlighted }) => {
  const lp = songs[page].length.toString().length;
  const arr = songs[page].map((e, i) => (
    <SingleResult key={i} song={e} index={i} changeSong={changeSong} isPlaying={currentIndex === i && isHighlighted} lp={lp} page={page} />
  ));
  return <S.StyledList id="songlist">{arr}</S.StyledList>;
};

export default ResultsGroup;
