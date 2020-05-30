import React from "react";
import { Grid } from "@material-ui/core/";
import * as S from "./style";

const LoadingPanel = () => (
  <S.Container>
    <S.StyledPaper>
      <S.LoopIco />
      <Grid>Loading the Playlist...</Grid>
    </S.StyledPaper>
  </S.Container>
);

export default LoadingPanel;
