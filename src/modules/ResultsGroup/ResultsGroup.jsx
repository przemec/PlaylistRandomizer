import React from "react";
import * as S from "./style";
import SongDisplay from "../../components/SongDisplay";

const ResultsGroup = React.memo(({ songs, playingPage, changeSong, currentIndex }) => {
  const arr = songs.map((e, page) =>
    e.map((song, i) => (
      <SongDisplay
        key={i}
        song={song}
        index={i}
        changeSong={changeSong}
        isPlaying={currentIndex === i && playingPage === page}
        page={page}
      />
    ))
  );
  return <S.StyledList id="songlist">{arr}</S.StyledList>;
});

export default ResultsGroup;
