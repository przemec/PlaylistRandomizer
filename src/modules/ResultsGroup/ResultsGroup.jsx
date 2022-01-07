import React from "react";
import * as S from "./style";
import SongDisplay from "../../components/SongDisplay";

const ResultsGroup = ({ songs, changeSong, displayType }) => {
  let results = displayType === "details" ?
    songs.map((song, i) => (
      <SongDisplay
        key={i}
        song={song}
        displayType={displayType}
        index={i}
      />
    )) : 
    songs.map((e, page) =>
      e.map((song, i) => (
        <SongDisplay
          key={i}
          song={song}
          displayType={displayType}
          index={i}
          changeSong={changeSong}
          page={page}
        /> 
      ))
    )
  return <S.StyledList id="songlist" displayType={displayType}>{results}</S.StyledList>;
};

export default ResultsGroup;
