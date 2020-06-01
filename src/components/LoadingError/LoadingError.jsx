import React from "react";
import { Grid } from "@material-ui/core/";
import { Link } from "react-router-dom";
import * as S from "./style";

const LoadingError = () => (
  <S.Container>
    <S.StyledPaper>
      <Grid>Loading Error!</Grid>
      <Grid>
        <Link to="/">Back to Home Page</Link>
      </Grid>
    </S.StyledPaper>
  </S.Container>
);

export default LoadingError;
