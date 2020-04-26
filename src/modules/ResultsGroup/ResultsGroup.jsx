import React from "react";
import { gapi } from "gapi-script";
import { TextField, Grid, Paper } from "@material-ui/core/";
import * as S from "./style";
import SingleResult from "../../components/SingleResult";

const ResultsGroup = ({ songs }) => {
  const arr = songs.map((e, i) => <SingleResult key={i} song={e} index={i} />);
  return <S.StyledPaper>{arr}</S.StyledPaper>;
};

export default ResultsGroup;
