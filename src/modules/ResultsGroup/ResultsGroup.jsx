import React from "react";
import * as S from "./style";
import SingleResult from "../../components/SingleResult";

const ResultsGroup = ({ songs, changeSong, currentIndex }) => {
  const arr = songs.map((e, i) => <SingleResult key={i} song={e} index={i} changeSong={changeSong} isPlaying={currentIndex === i} />);
  return <S.StyledPaper>{arr}</S.StyledPaper>;
};

export default ResultsGroup;
