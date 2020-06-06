import React from "react";
import { Grid } from "@material-ui/core/";
import * as S from "./style";
import { Link } from "react-router-dom";

const LoadingPanel = ({ err }) => {
  return !err ? (
    <S.StyledPaper>
      <S.LoopIco />
      <Grid>Loading the Playlist...</Grid>
    </S.StyledPaper>
  ) : (
    <S.StyledPaperErr>
      <Grid>Loading Error!</Grid>
      <Grid>
        <Link to="/">Back to Home Page</Link>
      </Grid>
    </S.StyledPaperErr>
  );
};

export default LoadingPanel;
