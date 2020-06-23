import React from "react";
import { Grid } from "@material-ui/core/";
import * as S from "./style";
import { Link } from "react-router-dom";

const LoadingPanel = ({ err }) => {
  return (
    <S.PanelBackground>
      {!err ? (
        <S.StyledPanel>
          <S.LoopIco />
          <Grid>Loading the Playlist...</Grid>
        </S.StyledPanel>
      ) : (
        <S.StyledPanelErr>
          <Grid>Loading Error!</Grid>
          <Grid>
            <S.StyledLink to="/">Back to Home Page</S.StyledLink>
          </Grid>
        </S.StyledPanelErr>
      )}
    </S.PanelBackground>
  );
};

export default LoadingPanel;
