import React from "react";
import * as S from "./style";
import SongDisplay from "../../components/SongDisplay";

const ResultsGroup = ({ songs, changeSong, displaytype }) => {
  let current_duration = 0;
  let results =
    displaytype === "details"
      ? songs.map((song, i) => {
          current_duration += song.duration;
          return <SongDisplay key={i} song={song} displaytype={displaytype} index={i} curr_dur={current_duration} />;
        })
      : songs.map((e, page) =>
          e.map((song, i) => (
            <SongDisplay key={i} song={song} displaytype={displaytype} index={i} changeSong={changeSong} page={page} />
          ))
        );
  return (
    <S.StyledList id="songlist" displaytype={displaytype}>
      {results}
    </S.StyledList>
  );
};

export default ResultsGroup;
