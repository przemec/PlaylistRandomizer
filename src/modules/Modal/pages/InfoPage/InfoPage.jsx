import React from "react";
import * as S from "./style";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

const InfoPage = ({ resizeref }) => (
  <S.Container ref={resizeref()}>
    <S.QHeader />
    <S.Answer>
      Playlist Randomizer lets You play randomized YouTube playlists. Playing and loading is way quicker and more stable than on the YouTube page, because lists are
      stored locally in browser storage. If minimalistic style, multiple themes and high responsiveness is what You enjoy, then this page is perfect for You!
    </S.Answer>
    <S.QHeader>My playlist isn't refreshing after I update it on YouTube, why?</S.QHeader>
    <S.Answer>
      This page saves every playlist locally. This process is done automatically only once per playlist (right after searching it for the first time), so if You want to
      refresh updated list from YouTube, just click <CloudDownloadIcon /> icon underneath the player.
    </S.Answer>
  </S.Container>
);
export default InfoPage;
