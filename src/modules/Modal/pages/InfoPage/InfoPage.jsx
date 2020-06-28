import React from "react";
import * as S from "./style";
import { Grid } from "@material-ui/core/";

const InfoPage = () => (
  <Grid container justify="center" alignItems="center">
    <S.StyledContainer container justify="center">
      <S.QHeader>What is this page?</S.QHeader>
      <S.Answer>
        Playlist Randomizer lets You play randomized YouTube playlists. Playing and loading is way quicker and more stable than on the
        YouTube page, because lists are stored locally in browser storage. If minimalistic style, multiple themes and high responsiveness is
        what You want, then this page is perfect for You!
      </S.Answer>
      <S.QHeader>Why is playlist cut into 200-songs segments?</S.QHeader>
      <S.Answer>
        YouTube video player is designed to accept max 200 songs per custom playlist. Don't worry though, the page will automatically switch
        to next part after reaching 200.
      </S.Answer>
    </S.StyledContainer>
  </Grid>
);
export default InfoPage;
